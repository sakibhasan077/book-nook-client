import { BookOpen } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[#f7f6f2] px-4 py-16 dark:bg-slate-950 sm:px-6">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200/80 bg-white px-6 py-10 text-center shadow-[0_4px_14px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 sm:px-10">
        <div
          aria-hidden="true"
          className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50 text-[#2563eb] dark:bg-blue-950/50 dark:text-blue-300"
        >
          <BookOpen className="size-7" />
        </div>
        <p className="mt-5 text-sm font-bold tracking-[0.2em] text-[#2563eb] dark:text-blue-300">
          ERROR 404
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#172b46] dark:text-slate-100">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          We couldn&apos;t find the page or book you were looking for. It may
          have been moved or removed.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/books"
            className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Browse books
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
