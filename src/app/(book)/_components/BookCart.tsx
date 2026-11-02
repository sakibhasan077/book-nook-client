import Image from "next/image";
import { BookOpen } from "lucide-react";
import type { IBook } from "@/types/BookCartType";

const BookCart = ({ bookData }: { bookData: IBook }) => {
  console.log(bookData.imageUrl);
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-1 shadow-[0_2px_8px_rgba(15,23,42,0.07)] dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[1.24] overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
        <Image
          src={bookData.imageUrl}
          alt={`${bookData.title} book cover`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="px-2 pb-2 pt-3">
        <h2 className="truncate text-sm font-bold text-slate-800 dark:text-slate-100">
          {bookData.title}
        </h2>
        <p className="mt-1 truncate text-sm text-[#37658c] dark:text-blue-300">
          {bookData.author}
        </p>

        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
          <BookOpen className="size-3.5 text-[#5f7ea1] dark:text-blue-300" aria-hidden="true" />
          <span>{bookData.category}</span>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-md border border-[#7892ac] bg-transparent px-3 py-2 text-xs font-semibold text-[#315d84] transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-blue-300 dark:hover:bg-slate-800"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default BookCart;