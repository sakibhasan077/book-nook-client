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
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/lib/auth-client";
import { IBook } from "@/types/BookCartType";
import { BookOpen } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function ConfirmBorrowDialog({
  hasCopies,
  book,
}: {
  hasCopies: boolean;
  book: IBook;
}) {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const data = {
    bookId: book._id,
    bookTitle: book.title,
    bookImage: book.imageUrl,
    userEmail: user?.email,
  };
  const handleBorrow = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/borrows`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to borrow this book");
      }

      toast.success(result.message || "Book borrowed successfully");
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            disabled={!hasCopies}
            className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#0062FB] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#004DE5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0062FB] disabled:cursor-not-allowed disabled:bg-slate-400 dark:disabled:bg-slate-700"
          >
            <BookOpen className="size-5" aria-hidden="true" />
            Borrow This Book
          </button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Borrow "{book.title}"</DialogTitle>
          <DialogDescription>
            Please confirm that you want to borrow this book. You will be able
            to return it later.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleBorrow}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="BorrowUserName"
                readOnly
                value={user?.name}
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="BorrowUserEmail"
                readOnly
                value={user?.email}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button variant="outline" className={"rounded-full"}>
                  Cancel
                </Button>
              }
            />
            <DialogClose
              render={
                <Button
                  type="submit"
                  className={
                    "rounded-full bg-green-500 text-white hover:bg-green-600"
                  }
                >
                  Borrow
                </Button>
              }
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
