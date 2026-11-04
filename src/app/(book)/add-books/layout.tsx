import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Add a Book",
  description:
    "Add a book to your BookNook collection and share it with the reading community.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddBooksLayout({ children }: { children: ReactNode }) {
  return children;
}