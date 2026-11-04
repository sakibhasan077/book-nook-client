const Loading = () => {
  return (
    <section
      aria-busy="true"
      aria-labelledby="books-heading"
      className="min-h-full bg-[#f7f6f2] px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1
            id="books-heading"
            className="font-serif text-3xl font-bold tracking-tight text-[#1b2a39] dark:text-slate-100"
          >
            All Books
          </h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Explore the collection
          </p>
        </header>

        <p className="sr-only" role="status">
          Loading books...
        </p>
        <div
          aria-hidden="true"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Array.from({ length: 6 }, (_, index) => (
            <article
              key={index}
              className="animate-pulse rounded-xl border border-slate-200/80 bg-white p-1 shadow-[0_2px_8px_rgba(15,23,42,0.07)] dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="aspect-[1.24] rounded-lg bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-3 px-2 pb-2 pt-3">
                <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="mt-4 h-9 w-full rounded-md bg-slate-200 dark:bg-slate-800" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
