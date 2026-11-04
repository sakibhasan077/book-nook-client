import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "My Borrows",
  description:
    "View the books you have borrowed from BookNook and keep track of their return dates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MyBorrowsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}