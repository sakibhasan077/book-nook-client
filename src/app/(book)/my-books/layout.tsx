import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "My Books",
  description:
    "Manage the books you have added to your BookNook collection.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MyBooksLayout({ children }: { children: ReactNode }) {
  return children;
}