import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Create a BookNook account to discover books, share your collection, and keep track of your borrowing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignupLayout({ children }: { children: ReactNode }) {
  return children;
}
