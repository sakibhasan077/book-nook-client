"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image: "/image/hero-1.jpeg",
    eyebrow: "Find your next favorite",
    title: "A good book can take you anywhere.",
    description:
      "Explore stories, ideas, and new worlds. Your next great read is waiting in the BookNook collection.",
  },
  {
    image: "/image/hero-2.jpeg",
    eyebrow: "Read. Share. Repeat.",
    title: "Make room for a little more wonder.",
    description:
      "Discover books for every mood, meet memorable characters, and find inspiration one page at a time.",
  },
  {
    image: "/image/hero-3.jpeg",
    eyebrow: "Your reading journey starts here",
    title: "Stories are better when they are shared.",
    description:
      "Browse the library, find something you love, and share the joy of reading with the BookNook community.",
  },
];
export default function Banner() {
  return (
    <section
      aria-label="Featured books"
      className="mx-auto max-w-7xl bg-[#faf8f4] px-4 py-8 transition-colors dark:bg-slate-950 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        className="book-banner"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title} className="h-auto">
            <div
              className="relative isolate flex min-h-[390px] overflow-hidden rounded-3xl bg-slate-950 px-7 pb-16 pt-9 shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 sm:min-h-[420px] sm:px-12 sm:pb-20 sm:pt-12 lg:min-h-[460px] lg:px-16"
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="z-0 object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/10"
              />

              <div className="relative z-10 flex w-full max-w-2xl flex-col items-start justify-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-sm">
                  {slide.eyebrow}
                </span>
                <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                  {slide.description}
                </p>
                <Link
                  href="/books"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Browse Books
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
