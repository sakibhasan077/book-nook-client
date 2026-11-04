import { BookOpen, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { IBook } from "@/types/BookCartType";
import { ConfirmBorrowDialog } from "../../_components/ConfirmBorrowDialog";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const BookDetails = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;

  const token = await getTokenFromServer();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`,{
      headers: {
        authorization: `Bearer ${token}`,
      }

    }
  );

  if (!response.ok) {
    notFound();
  }

  const book: IBook = await response.json();
  const hasCopies = Number(book.totalCopy) > 0;

  return (
    <section className="min-h-full bg-[#f7f6f2] px-4 py-8 dark:bg-slate-950 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/books"
            className="transition-colors hover:text-[#315d84] dark:hover:text-blue-300"
          >
            Books
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700 dark:text-slate-200">
            Book Details
          </span>
        </nav>

        <article className="grid gap-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 sm:p-7 lg:grid-cols-[minmax(280px,0.9fr)_1fr] lg:gap-10 lg:p-8">
          <div className="relative mx-auto aspect-2/3 w-full max-w-95 overflow-hidden rounded-lg bg-slate-100 shadow-[0_8px_18px_rgba(15,23,42,0.14)] dark:bg-slate-800 lg:max-w-none">
            <Image
              src={book.imageUrl}
              alt={`${book.title} book cover`}
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center py-1 lg:py-3">
            <header className="border-b border-slate-200 pb-5 dark:border-slate-700">
              <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#1b2a39] dark:text-slate-100 sm:text-4xl">
                {book.title}
              </h1>
              <p className="mt-2 text-lg font-medium text-[#5f7f83] dark:text-teal-300">
                {book.author}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#edf6f4] px-3.5 py-2 text-sm font-medium text-[#4c7779] dark:bg-teal-950/60 dark:text-teal-200">
                <BookOpen className="size-4" aria-hidden="true" />
                <span>{book.category}</span>
              </div>
            </header>

            <p className="border-b border-slate-200 py-5 text-base leading-7 text-slate-600 dark:border-slate-700 dark:text-slate-300">
              {book.description}
            </p>

            <div className="grid grid-cols-[1fr_auto] border-b border-slate-200 dark:border-slate-700">
              <div className="py-4 pr-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Added by:
                </p>
                <p className="mt-1 font-medium text-slate-800 dark:text-slate-100">
                  {book.userName}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {book.userEmail}
                </p>
              </div>
              <div className="border-l border-slate-200 py-4 pl-5 dark:border-slate-700 sm:pl-7">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Total Copies:
                </p>
                <p className="mt-1 text-2xl font-bold leading-none text-[#1b2a39] dark:text-slate-100">
                  {book.totalCopy}
                </p>
              </div>
            </div>

            <ConfirmBorrowDialog
              hasCopies={hasCopies}
              book={book}
            ></ConfirmBorrowDialog>

            <p
              className={`mt-4 flex items-center gap-2 text-sm font-medium ${
                hasCopies
                  ? "text-[#5f8587] dark:text-teal-300"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <CircleCheck className="size-5" aria-hidden="true" />
              {hasCopies ? "Available to borrow" : "Currently unavailable"}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BookDetails;
