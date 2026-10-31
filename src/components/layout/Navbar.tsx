"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const navClass =
    "rounded-none px-3 py-2 text-sm font-medium  transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300";

  const navItems = (
    <>
      <Link href={"/"} onClick={()=> isMenuOpen && closeMenu()} className={`${navClass} ${pathname === "/" ? "border-b-2 border-(--color-primary) text-blue-700 ": "text-slate-600"}`}>
        Home
      </Link>
      <Link href={"/books"} onClick={()=> isMenuOpen && closeMenu()} className={`${navClass} ${pathname === "/books" ? "border-b-2 border-(--color-primary) text-blue-700 ": "text-slate-600"}`}>
        All Books
      </Link>
      <Link href={"/add-books"} onClick={()=> isMenuOpen && closeMenu()} className={`${navClass} ${pathname === "/add-books" ? "border-b-2 border-(--color-primary) text-blue-700 ": "text-slate-600"}`}>
        Add Books
      </Link>
      <Link href={"/my-books"} onClick={()=> isMenuOpen && closeMenu()} className={`${navClass} ${pathname === "/my-books" ? "border-b-2 border-(--color-primary) text-blue-700 ": "text-slate-600"}`}>
        My Books
      </Link>
      <Link href={"/my-borrows"} onClick={()=> isMenuOpen && closeMenu()} className={`${navClass} ${pathname === "/my-borrows" ? "border-b-2 border-(--color-primary) text-blue-700 ": "text-slate-600"}`}>
        My Borrows
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid min-h-20 grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            aria-label="BookNook home"
            onClick={closeMenu}
            className="relative block h-12 w-36 overflow-hidden rounded-lg bg-white sm:w-40"
          >
            <Image
              src="/image/logo.png"
              alt="BookNook"
              fill
              priority
              sizes="(max-width: 640px) 144px, 160px"
              className="object-cover"
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">{navItems}</ul>

          <div className="hidden items-center justify-self-end gap-2 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              title={`Switch to ${isDark ? "light" : "dark"} theme`}
              className="inline-flex size-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300"
            >
              {isDark ? (
                <Sun className="size-5" aria-hidden="true" />
              ) : (
                <Moon className="size-5" aria-hidden="true" />
              )}
            </button>
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign up
            </Link>
          </div>

          <div className="flex items-center justify-self-end gap-1 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              title={`Switch to ${isDark ? "light" : "dark"} theme`}
              className="inline-flex size-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {isDark ? (
                <Sun className="size-5" aria-hidden="true" />
              ) : (
                <Moon className="size-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex size-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-200 pb-5 pt-3 dark:border-slate-800 lg:hidden"
          >
            <ul className="space-y-1 flex flex-col w-fit">

                {navItems}

             </ul>
            <div className="mt-3 flex gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex-1 max-w-38 rounded-full border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={closeMenu}
                className="flex-1 max-w-38 rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
