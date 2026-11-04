import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "BookNook | Discover, Borrow & Share Books",
    template: "%s | BookNook",
  },
  description:
    "Discover books for every mood, explore community collections, and borrow your next great read with BookNook.",
  applicationName: "BookNook",
  keywords: [
    "BookNook",
    "online library",
    "borrow books",
    "book collection",
    "reading community",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BookNook",
    title: "BookNook | Discover, Borrow & Share Books",
    description:
      "Discover books for every mood, explore community collections, and borrow your next great read with BookNook.",
  },
  twitter: {
    card: "summary",
    title: "BookNook | Discover, Borrow & Share Books",
    description:
      "Discover books for every mood, explore community collections, and borrow your next great read with BookNook.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
