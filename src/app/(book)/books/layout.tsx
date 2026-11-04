import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Browse Books",
  description:
    "Explore the BookNook library, discover books across genres, and find your next great read.",
  openGraph: {
    type: "website",
    siteName: "BookNook",
    title: "Browse Books | BookNook",
    description:
      "Explore the BookNook library, discover books across genres, and find your next great read.",
  },
  twitter: {
    card: "summary",
    title: "Browse Books | BookNook",
    description:
      "Explore the BookNook library, discover books across genres, and find your next great read.",
  },
};

export default function BooksLayout({ children }: { children: ReactNode }) {
  return children;
}