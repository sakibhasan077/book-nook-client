import { BookOpen } from "lucide-react";

const Loading = () => {
  return (
    <section
      aria-busy="true"
      aria-labelledby="my-borrows-heading"
      className="min-h-full bg-[#fafafa] px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1
              id="my-borrows-heading"
              className="font-serif text-2xl font-bold tracking-tight text-[#172b46] dark:text-slate-100"
            >
              My Borrows
            </h1>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Keep track of the books you&apos;re reading.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-[#2563eb] dark:bg-blue-950/50 dark:text-blue-300">
            <BookOpen className="size-4" aria-hidden="true" />
            <span className="sr-only">Active borrow count loading</span>
            <span aria-hidden="true" className="h-3 w-16 animate-pulse rounded bg-blue-200 dark:bg-blue-900" />
          </div>
        </header>

        <p className="sr-only" role="status">
          Loading borrowed books...
        </p>
        <div
          aria-hidden="true"
          className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900"
        >
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
            <tbody className="animate-pulse">
              {Array.from({ length: 4 }, (_, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 last:border-b-0 dark:border-slate-800"
                >
                  <td className="px-5 py-2.5">
                    <div className="h-18 w-13.5 rounded-md bg-slate-200 shadow-sm dark:bg-slate-800" />
                  </td>
                  <td className="space-y-2 px-5 py-2.5">
                    <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
                  </td>
                  <td className="px-5 py-2.5">
                    <div className="h-3 w-4/5 rounded bg-slate-200 dark:bg-slate-800" />
                  </td>
                  <td className="px-5 py-2.5">
                    <div className="h-3 w-4/5 rounded bg-slate-200 dark:bg-slate-800" />
                  </td>
                  <td className="px-5 py-2.5 text-right">
                    <div className="ml-auto h-8 w-24 rounded-md bg-slate-200 dark:bg-slate-800" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Loading;
