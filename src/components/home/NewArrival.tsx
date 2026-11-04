import { BookOpen, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import BookCart from "@/app/(book)/_components/BookCart";
import type { IBook } from "@/types/BookCartType";

const NewArrival = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`,{
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load new arrivals");
  }

  const books: IBook[] = await res.json();

  return (
    <section className="bg-[#faf8f4] px-4 py-12 transition-colors dark:bg-slate-900 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#315d84] dark:text-blue-300">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Fresh stories, just in
            <Sparkles aria-hidden="true" className="size-3.5" />
          </p>
          <h2 className="mt-1 font-serif text-4xl font-bold tracking-tight text-[#18304a] dark:text-slate-100 sm:text-5xl">
            New Arrivals
          </h2>
          <BookOpen
            aria-hidden="true"
            className="mx-auto mt-2 size-5 text-[#315d84] dark:text-blue-300"
            strokeWidth={2}
          />
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Discover the latest books handpicked for you.
          </p>
        </header>

        {books.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-950">
            <p className="font-medium text-slate-700 dark:text-slate-200">
              No books available yet
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.slice(0, 6).map((book) => (
              <BookCart key={book._id} bookData={book} />
            ))}
          </div>
        )}

        <div className="mt-5 flex justify-center">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <Layers aria-hidden="true" className="size-4" />
            See All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
