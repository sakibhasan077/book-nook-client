import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Book Details",
  description:
    "Explore book details, discover your next read, and check availability to borrow it from BookNook.",
  openGraph: {
    type: "article",
    siteName: "BookNook",
    title: "Book Details | BookNook",
    description:
      "Explore book details, discover your next read, and check availability to borrow it from BookNook.",
  },
  twitter: {
    card: "summary",
    title: "Book Details | BookNook",
    description:
      "Explore book details, discover your next read, and check availability to borrow it from BookNook.",
  },
};

export default function BookDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}