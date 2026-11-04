import { auth } from "@/lib/auth";
import { IBorrow } from "@/types/BookCartType";
import { headers } from "next/headers";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import ReturnBookButton from "../_components/ReturnBookButton";

const formatDate = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const MyBorrowsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user?.email) {
    throw new Error("You must be signed in to view your borrowed books.");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-borrows/${encodeURIComponent(user.email)}`,
  );

  if (!res.ok) {
    notFound();
  }

  const resData: IBorrow[] = await res.json();



  return (
    <section className="min-h-full bg-[#fafafa] px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-[#172b46] dark:text-slate-100">
              My Borrows
            </h1>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Keep track of the books you&apos;re reading.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-[#2563eb] dark:bg-blue-950/50 dark:text-blue-300">
            <BookOpen className="size-4" aria-hidden="true" />
            <span>{resData.length} active borrows</span>
          </div>
        </header>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full min-w-175 table-fixed text-left">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                <th scope="col" className="w-[12%] px-5 py-3">
                  Image
                </th>
                <th scope="col" className="w-[32%] px-5 py-3">
                  Title
                </th>
                <th scope="col" className="w-[19%] px-5 py-3">
                  Borrow Date
                </th>
                <th scope="col" className="w-[19%] px-5 py-3">
                  Return Date
                </th>
                <th scope="col" className="w-[18%] px-5 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {resData.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-slate-500 dark:text-slate-400"
                  >
                    You haven&apos;t borrowed any books yet.
                  </td>
                </tr>
              ) : (
                resData.map((borrow) => (
                  <tr
                    key={borrow._id}
                    className="border-b border-slate-100 last:border-b-0 dark:border-slate-800"
                  >
                    <td className="px-5 py-2.5">
                      <div className="relative h-18 w-13.5 overflow-hidden rounded-md bg-slate-100 shadow-sm dark:bg-slate-800">
                        <Image
                          src={borrow.bookImage}
                          alt={`${borrow.bookTitle} book cover`}
                          fill
                          unoptimized
                          sizes="54px"
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-5 py-2.5">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {borrow.bookTitle}
                      </p>
                      {borrow.bookAuthor && (
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {borrow.bookAuthor}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-2.5 text-xs text-slate-600 dark:text-slate-300">
                      {formatDate(borrow.borrowDate)}
                    </td>
                    <td className="px-5 py-2.5 text-xs text-slate-600 dark:text-slate-300">
                      {formatDate(borrow.returnDate)}
                    </td>
                    <td className="px-5 py-2.5 text-right">
                      <ReturnBookButton borrow = {borrow}></ReturnBookButton>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBorrowsPage;
