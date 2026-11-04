import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Log in to your BookNook account to manage your books and keep track of your borrowing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}