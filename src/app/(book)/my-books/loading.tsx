import { BookOpen } from "lucide-react";

const Loading = () => {
  return (
    <section
      aria-busy="true"
      aria-labelledby="my-books-heading"
      className="min-h-full bg-[#f7f6fc] px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 flex items-start gap-3">
          <BookOpen
            className="mt-0.5 size-7 shrink-0 fill-[#30258c] text-[#30258c] dark:fill-indigo-300 dark:text-indigo-300"
            aria-hidden="true"
          />
          <div>
            <h1
              id="my-books-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100"
            >
              My Books
            </h1>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Here are the books you have added.
            </p>
          </div>
        </header>

        <p className="sr-only" role="status">
          Loading your books...
        </p>
        <div aria-hidden="true" className="space-y-3">
          {Array.from({ length: 4 }, (_, index) => (
            <article
              key={index}
              className="flex animate-pulse flex-col gap-4 rounded-xl border border-[#e8e7f2] bg-white p-3 shadow-[0_3px_10px_rgba(35,31,76,0.06)] dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:gap-4 sm:px-4"
            >
              <div className="h-24 w-16 shrink-0 self-center rounded-md bg-slate-200 shadow-sm dark:bg-slate-800 sm:self-auto" />

              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-3 w-2/5 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
              </div>

              <div className="flex shrink-0 items-center justify-end gap-2 border-t border-slate-100 pt-3 dark:border-slate-800 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                <div className="h-8 w-8 rounded-md bg-slate-200 dark:bg-slate-800" />
                <div className="h-8 w-8 rounded-md bg-slate-200 dark:bg-slate-800" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
