import { IBook } from "@/types/BookCartType";
import BookCart from "../_components/BookCart";
import { notFound } from "next/navigation";

const AllBooksPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
  if (!res.ok) {
    notFound();
  }

  const resData: IBook[] = await res.json();
  return (
    <section className="min-h-full bg-[#f7f6f2] px-4 py-8 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1b2a39] dark:text-slate-100">
            All Books
          </h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Explore the collection
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resData.length === 0 ? (
            <div className=" container mx-auto col-span-full rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                No books available yet
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Please check back later.
              </p>
            </div>
          ) : (
            resData.map((item) => <BookCart key={item._id} bookData={item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
