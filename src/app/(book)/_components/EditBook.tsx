"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { IBook } from "@/types/BookCartType";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const categories = [
  "Fiction",
  "Non-fiction",
  "Fantasy",
  "Science",
  "History",
  "Kids",
  "Mystery",
  "Others",
];
const inputClass =
  "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0062FB] focus:ring-2 focus:ring-[#0062FB]/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500";
const labelClass =
  "mb-1.5 block text-xs font-medium text-slate-800 dark:text-slate-200";

export function EditBookDetails({ book }: { book: IBook }) {
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const totalCopy = Number(formData.get("totalCopy"));

    if (!Number.isInteger(totalCopy) || totalCopy < 0) {
      toast.error("Total copies must be a valid non-negative number");
      return;
    }

    const data = {
      ...Object.fromEntries(formData.entries()),
      totalCopy,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${book._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const resData = await res.json();
    if (res.ok) {
      toast.success("Book details updated successfully");
      redirect(`/my-books`);
    }
    if (!res.ok) {
      toast.error("Failed to update book details");
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className={
              "rounded-full px-3 text-xs font-medium shadow-sm transition "
            }
          >
            {" "}
            <Pencil className="size-3.5" aria-hidden="true" /> Edit{" "}
          </Button>
        }
      />
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>Update the book details below.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSave}>
          <FieldGroup className="grid gap-x-4 gap-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_3px_12px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-2 sm:p-5">
            <div>
              <label className={labelClass} htmlFor={`book-title-${book._id}`}>
                Book Title
              </label>
              <input
                id={`book-title-${book._id}`}
                name="title"
                required
                maxLength={200}
                defaultValue={book.title}
                placeholder="Enter book title"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor={`author-name-${book._id}`}>
                Author Name
              </label>
              <input
                id={`author-name-${book._id}`}
                name="author"
                required
                maxLength={150}
                defaultValue={book.author}
                placeholder="Enter author name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                className={labelClass}
                htmlFor={`book-category-${book._id}`}
              >
                Category
              </label>
              <select
                id={`book-category-${book._id}`}
                name="category"
                required
                defaultValue={book.category}
                className={inputClass}
              >
                {!categories.includes(book.category) && (
                  <option value={book.category}>{book.category}</option>
                )}
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className={labelClass}
                htmlFor={`total-copies-${book._id}`}
              >
                Total Copies
              </label>
              <input
                id={`total-copies-${book._id}`}
                name="totalCopy"
                type="number"
                required
                defaultValue={book.totalCopy}
                placeholder="0"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                className={labelClass}
                htmlFor={`book-image-url-${book._id}`}
              >
                Book Image URL
              </label>
              <input
                id={`book-image-url-${book._id}`}
                name="imageUrl"
                type="url"
                required
                maxLength={2048}
                defaultValue={book.imageUrl}
                placeholder="https://example.com/book-cover.jpg"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                className={labelClass}
                htmlFor={`book-description-${book._id}`}
              >
                Short Description
              </label>
              <textarea
                id={`book-description-${book._id}`}
                name="description"
                required
                maxLength={500}
                rows={3}
                defaultValue={book.description}
                placeholder="Enter a short description about the book..."
                className={`${inputClass} h-auto min-h-20 resize-y py-2`}
              />
            </div>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <DialogClose render={<Button
              type="submit"
              className="bg-[#0062FB] text-white hover:bg-[#004DE5]"
            >
              Save changes
            </Button>} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
