const Loading = () => {
  return (
    <section
      aria-busy="true"
      aria-labelledby="book-details-heading"
      className="min-h-full bg-[#f7f6f2] px-4 py-8 dark:bg-slate-950 sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
        >
          <span>Books</span>
          <span aria-hidden="true">/</span>
          <span id="book-details-heading" className="text-slate-700 dark:text-slate-200">
            Book Details
          </span>
        </nav>

        <p className="sr-only" role="status">
          Loading book details...
        </p>
        <article
          aria-hidden="true"
          className="grid animate-pulse gap-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 sm:p-7 lg:grid-cols-[minmax(280px,0.9fr)_1fr] lg:gap-10 lg:p-8"
        >
          <div className="mx-auto aspect-2/3 w-full max-w-95 rounded-lg bg-slate-200 shadow-[0_8px_18px_rgba(15,23,42,0.14)] dark:bg-slate-800 lg:max-w-none" />

          <div className="flex flex-col justify-center py-1 lg:py-3">
            <header className="space-y-4 border-b border-slate-200 pb-5 dark:border-slate-700">
              <div className="h-9 w-4/5 rounded bg-slate-200 dark:bg-slate-800 sm:h-11" />
              <div className="h-6 w-2/5 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-9 w-32 rounded-full bg-slate-200 dark:bg-slate-800" />
            </header>

            <div className="space-y-2 border-b border-slate-200 py-5 dark:border-slate-700">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="grid grid-cols-[1fr_auto] border-b border-slate-200 dark:border-slate-700">
              <div className="space-y-2 py-4 pr-4">
                <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-40 max-w-full rounded bg-slate-200 dark:bg-slate-800" />
              </div>
              <div className="space-y-2 border-l border-slate-200 py-4 pl-5 dark:border-slate-700 sm:pl-7">
                <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-7 w-10 rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>

            <div className="mt-5 h-11 w-full rounded-md bg-slate-200 dark:bg-slate-800" />
            <div className="mt-4 h-5 w-48 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Loading;
