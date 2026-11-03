import { BookOpen, MonitorSmartphone, Search } from "lucide-react";

const BorrowingWork = () => {
  const steps = [
    {
      title: "Browse books",
      description: "Explore our collection and find your next great read.",
      icon: Search,
    },
    {
      title: "Borrow instantly",
      description: "Borrow with one click—no holds, no waiting.",
      icon: BookOpen,
    },
    {
      title: "Read anywhere",
      description: "Enjoy on any device, anytime, even offline.",
      icon: MonitorSmartphone,
    },
  ];

  return (
    <section className="bg-white px-4 py-10 transition-colors dark:bg-slate-950 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center font-serif text-2xl font-bold tracking-tight text-[#1b2a39] dark:text-slate-100 sm:text-3xl">
          How Borrowing Works
        </h2>

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="relative flex min-h-24 items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-[0_3px_12px_rgba(15,23,42,0.08)] transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_3px_12px_rgba(0,0,0,0.2)] sm:px-5"
            >
              <span
                aria-hidden="true"
                className="absolute left-2 top-2 flex size-5 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white"
              >
                {index + 1}
              </span>
              <Icon
                aria-hidden="true"
                className="ml-4 size-10 shrink-0 text-[#2563eb] dark:text-blue-400"
                strokeWidth={1.4}
              />
              <div>
                <h3 className="font-serif text-sm font-bold text-[#1b2a39] dark:text-slate-100 sm:text-base">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BorrowingWork;