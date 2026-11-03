"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Emily R.",
    role: "Avid Reader",
    quote:
      "BookNook has completely changed the way I read. So easy to use and the selection is fantastic!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Jason M.",
    role: "Tech Enthusiast",
    quote:
      "I love borrowing books instantly and reading on my Kindle. It’s like having a library in my pocket.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Priya S.",
    role: "Parent & Book Lover",
    quote:
      "Great for my kids and me! We discover new favorites every week.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Alex T.",
    role: "Weekend Reader",
    quote:
      "Finding my next read is simple, and there are always new books to explore.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Morgan L.",
    role: "Book Club Member",
    quote:
      "I can find something for every mood. BookNook has become part of my daily routine.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=faces",
  },
  {
    name: "Sam K.",
    role: "Student",
    quote:
      "A great way to discover books and keep all my reading inspiration in one place.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
  },
];

export default function Review() {
  return (
    <section className="bg-[#faf8f4] px-4 py-10 transition-colors dark:bg-slate-900 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center font-serif text-2xl font-bold tracking-tight text-[#1b2a39] dark:text-slate-100 sm:text-3xl">
          Reader Reviews
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="px-1 pb-12"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.name}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-[0_3px_12px_rgba(15,23,42,0.08)] transition-colors dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
                  <div
                    className="flex gap-0.5 text-[#2563eb]"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        aria-hidden="true"
                        className="size-3.5 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-2 min-h-12 flex-1 border-b border-slate-100 pb-3 text-xs italic leading-relaxed text-slate-700 dark:border-slate-800 dark:text-slate-300 sm:text-sm">
                    “{review.quote}”
                  </blockquote>

                  <div className="mt-3 flex items-center gap-2.5">
                    <Image
                      src={review.image}
                      alt={`${review.name} reviewer`}
                      width={36}
                      height={36}
                      unoptimized
                      className="size-9 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        {review.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            aria-label="Previous reviews"
            className="left-[calc(50%-2.5rem)] top-auto bottom-0 translate-y-0"
          />
          <CarouselNext
            aria-label="Next reviews"
            className="right-auto left-[calc(50%+0.5rem)] top-auto bottom-0 translate-y-0"
          />
        </Carousel>
      </div>
    </section>
  );
}
