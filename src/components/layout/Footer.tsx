import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  ChevronRight,
  Code2,
  Mail,
  MapPin,
  UsersRound,
} from "lucide-react";
import { FaDiscord, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-900 transition-colors dark:border-slate-800 dark:bg-[#06152b] dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-4 lg:gap-10">
          <section aria-labelledby="footer-brand">
            <div className="relative mb-5 h-18 w-47.5">
              <Image
                src="/image/logo.png"
                alt="BookNook"
                fill
                sizes="190px"
                className="object-contain object-left dark:hidden"
              />
              <Image
                src="/image/dark-theme-logo-removebg-preview.png"
                alt="BookNook"
                fill
                sizes="190px"
                className="hidden object-contain object-left dark:block"
              />
            </div>
            <h2 id="footer-brand" className="sr-only">
              BookNook
            </h2>
            <p className="max-w-xs text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Your personal online library. Discover, borrow and enjoy your
              favorite books.
            </p>

            <div
              className="mt-6 flex items-center gap-3"
              aria-label="Social links"
            >
              <Link href={"https://www.facebook.com/sakibhasan077"}>
                <span className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-blue-400">
                  <FaFacebookF className="size-5" aria-hidden="true" />
                </span>
              </Link>
              <Link href={"https://github.com/sakibhasan077"}>
                <span className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-blue-400">
                  <FaGithub className="size-5" aria-hidden="true" />
                </span>
              </Link>
              <Link href={"https://discord.com/users/1517404827343388828"}>
                <span className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-blue-400">
                  <FaDiscord className="size-5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </section>

          <section aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="mb-5 text-lg font-bold text-slate-900 dark:text-white sm:text-xl"
            >
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>Home</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>All Books</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/add-books"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>Add Book</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/my-borrows"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>My Borrows</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="mb-5 text-lg font-bold text-slate-900 dark:text-white sm:text-xl"
            >
              Explore
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/books"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>Popular Books</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>New Arrivals</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="group flex items-center justify-between gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span>Categories</span>
                  <ChevronRight className="size-4 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
                </Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="mb-5 text-lg font-bold text-slate-900 dark:text-white sm:text-xl"
            >
              Contact Us
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:sakibhasanmd077@gamil.com"
                  className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 sm:text-base"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-400/15 dark:bg-blue-400/10 dark:text-blue-400">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span>sakibhasanmd077@gamil.com</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-400/15 dark:bg-blue-400/10 dark:text-blue-400">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>Bangladesh</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:mt-12 sm:pt-6 sm:text-base">
          © 2026 BookNook. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
