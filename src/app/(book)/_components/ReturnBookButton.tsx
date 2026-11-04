"use client";

import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { IBorrow } from "@/types/BookCartType";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ReturnBookButton = ({ borrow }: { borrow: IBorrow }) => {
  const router = useRouter();
  const handleReturn = async () => {
    const token = await getTokenFromClient();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/borrows/${borrow.bookId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to return this book");
      }

      toast.success(data?.message || "Book returned successfully");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };
  return (
    <button
      type="button"
      onClick={handleReturn}
      className="cursor-pointer rounded-md bg-[#0875e1] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0563c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0875e1]"
    >
      Return Book
    </button>
  );
};

export default ReturnBookButton;
