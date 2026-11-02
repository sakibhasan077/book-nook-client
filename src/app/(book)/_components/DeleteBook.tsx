"use client"
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
import { IBook } from "@/types/BookCartType";
import { Trash2, X } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteDialog({book}:{book:IBook}) {
  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${book._id}`,{
      method: "DELETE"
    })
    if(res.ok){
      toast.success("Book deleted successfully");
    }
    if(!res.ok){
      toast.error("Failed to delete book");
    }
    const data = await res.json();
    redirect("/my-books");
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <button
              type="button"
              aria-label={`Delete ${book.title}`}
              className="inline-flex h-9 items-center gap-2 rounded-full bg-linear-to-r from-[#f22e55] to-[#e81e46] px-3 text-xs font-medium text-white shadow-sm transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e81e46]"
            >
              <Trash2 className="size-3.5" aria-hidden="true" />
              Delete
            </button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Book</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this book? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline"><X className="size-3.5" aria-hidden="true" />Cancel</Button>} />
            <DialogClose render={<Button onClick={handleDelete} type="submit" variant={"destructive"}>
              <Trash2 className="size-3.5" aria-hidden="true" />
              Delete
            </Button>} />

          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
