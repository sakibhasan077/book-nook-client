"use client";

import type { FormEvent } from "react";
import { LockKeyhole, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { authClient, useSession } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const categories = ["Fiction", "Non-fiction" , "Fantasy", "Science", "History", "Kids","Mystery", "Others"];
const inputClass =
  "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0062FB] focus:ring-2 focus:ring-[#0062FB]/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500";
const labelClass =
  "mb-1.5 block text-xs font-medium text-slate-800 dark:text-slate-200";

export default function AddBookPage() {
  const {data:session} = useSession();
  const user = session?.user;
  // Handler Function
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const totalCopy = Number(formData.get("totalCopy"));

    if (!Number.isInteger(totalCopy) || totalCopy < 0) {
      toast.error("Total copies must be a valid non-negative number");
      return;
    }

    const data = {
      ...Object.fromEntries(formData.entries()),
      totalCopy,
      createdAt: new Date().toISOString(),
    };

    const token = await getTokenFromClient();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
    if(res.ok){
      toast.success("Book added successfully!")
    }
    if(!res.ok) {
      toast.error("Failed to add book. Please try again.")
    }
    form.reset()

    const resData = await res.json();
  }

  return (
    <main className="min-h-full bg-[#fbfaf7] px-4 py-9 dark:bg-slate-950 sm:py-10">
      <div className="mx-auto max-w-xl">
        <header className="mb-4">
          <h1 className="font-serif text-2xl font-bold tracking-tight text-[#172b46] dark:text-slate-100">
            Add a New Book
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Share a book with your collection.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid gap-x-4 gap-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_3px_12px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-2 sm:p-5"
        >
          <div>
            <label className={labelClass} htmlFor="book-title">
              Book Title
            </label>
            <input
              id="book-title"
              name="title"
              required
              maxLength={200}
              placeholder="Enter book title"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="author-name">
              Author Name
            </label>
            <input
              id="author-name"
              name="author"
              required
              maxLength={150}
              placeholder="Enter author name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="book-category">
              Category
            </label>
            <select
              id="book-category"
              name="category"
              required
              defaultValue="Fiction"
              className={inputClass}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="total-copies">
              Total Copies
            </label>
            <input
              id="total-copies"
              name="totalCopy"
              type="number"
              required
              maxLength={20}
              placeholder="0"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="book-image-url">
              Book Image URL
            </label>
            <input
              id="book-image-url"
              name="imageUrl"
              type="url"
              required
              maxLength={2048}
              placeholder="https://example.com/book-cover.jpg"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="book-description">
              Short Description
            </label>
            <textarea
              id="book-description"
              name="description"
              required
              maxLength={500}
              rows={3}
              placeholder="Enter a short description about the book..."
              className={`${inputClass} h-auto min-h-20 resize-y py-2`}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="user-name">
              User Name
            </label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-500" />
              <input
                id="user-name"
                name="userName"
                value={user ? user?.name : "Loading..."}
                readOnly
                className={`${inputClass} bg-slate-100 pl-9 dark:bg-slate-800`}
              />
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="user-email">
              Email
            </label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-500" />
              <input
                id="user-email"
                type="email"
                name="userEmail"
                value={user ? user?.email : "Loading..."}
                readOnly
                className={`${inputClass} bg-slate-100 pl-9 dark:bg-slate-800`}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-1 h-10 w-full gap-2 rounded-md bg-[#0062FB] text-white hover:bg-[#004DE5] sm:col-span-2"
          >
            <PlusCircle className="size-4" />
            Add Book
          </Button>
        </form>
      </div>
    </main>
  );
}
