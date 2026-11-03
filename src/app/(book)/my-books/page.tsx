import { BookOpen, FileText, Tag, UserRound } from "lucide-react";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { IBook } from "@/types/BookCartType";
import { headers } from "next/headers";
import { EditBookDetails } from "../_components/EditBook";
import { DeleteDialog } from "../_components/DeleteBook";

const MyBooksPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-books/${user?.email}`,
  );
  const resData: IBook[] = await res.json();

  return (
    <section className="min-h-full bg-[#f7f6fc] px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 flex items-start gap-3">
          <BookOpen
            className="mt-0.5 size-7 shrink-0 fill-[#30258c] text-[#30258c] dark:fill-indigo-300 dark:text-indigo-300"
            aria-hidden="true"
          />
          <div>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
              My Books
            </h1>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Here are the books you have added.
            </p>
          </div>
        </header>

        <div className="space-y-3">
          {resData.length === 0 ? (
            <div className=" container mx-auto col-span-full rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                No books added yet
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Please create a new book entry.
              </p>
            </div>
          ) : (
            resData.map((book) => (
              <article
                key={book._id}
                className="flex flex-col gap-4 rounded-xl border border-[#e8e7f2] bg-white p-3 shadow-[0_3px_10px_rgba(35,31,76,0.06)] dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:gap-4 sm:px-4"
              >
                <div className="relative h-24 w-16 shrink-0 self-center overflow-hidden rounded-md bg-slate-100 shadow-sm dark:bg-slate-800 sm:self-auto">
                  <Image
                    src={book.imageUrl}
                    alt={`${book.title} book cover`}
                    fill
                    unoptimized
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-sm font-bold text-slate-900 dark:text-slate-100">
                    {book.title}
                  </h2>
                  <dl className="mt-1 space-y-0.5 text-[11px] leading-4 text-slate-600 dark:text-slate-300">
                    <div className="flex min-w-0 items-center gap-1.5">
                      <UserRound
                        className="size-3 shrink-0 text-[#4c478f] dark:text-indigo-300"
                        aria-hidden="true"
                      />
                      <dt className="shrink-0 font-medium">Author:</dt>
                      <dd className="truncate">{book.author}</dd>
                    </div>
                    <div className="flex min-w-0 items-center gap-1.5">
                      <Tag
                        className="size-3 shrink-0 text-[#4c478f] dark:text-indigo-300"
                        aria-hidden="true"
                      />
                      <dt className="shrink-0 font-medium">Category:</dt>
                      <dd className="truncate">{book.category}</dd>
                    </div>
                    <div className="flex min-w-0 items-center gap-1.5">
                      <FileText
                        className="size-3 shrink-0 text-[#4c478f] dark:text-indigo-300"
                        aria-hidden="true"
                      />
                      <dt className="shrink-0 font-medium">Description:</dt>
                      <dd className="truncate">{book.description}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex shrink-0 items-center justify-end gap-2 border-t border-slate-100 pt-3 dark:border-slate-800 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                  <EditBookDetails book={book}></EditBookDetails>
                  <DeleteDialog book={book}></DeleteDialog>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBooksPage;
