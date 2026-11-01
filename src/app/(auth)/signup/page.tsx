"use client";
import Link from "next/link";
import {
  BookOpen,
  Eye,
  EyeClosed,
  Leaf,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { signIn, signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

// types
type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FieldName = keyof FormValues;
type FormError = Partial<Record<FieldName, string>>;

const validate = (values: FormValues): FormError => {
  const errors: FormError = {};
  // Name Validate
  if (!values.name.trim()) {
    errors.name = "Name is Required";
  } else if (values.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email Validate
  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password Validate
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain an uppercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password must contain a number";
  }

  // Confirm Password Validate
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export default function SignUpPage() {
  // states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [track, setTrack] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  // variables
  const errors = validate(values);

  // Handler functions

  // for input change
  const handleChange = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setTrack((prev) => ({ ...prev, [field]: true }));
  };

  // for on blur
  const handleBlur = (field: FieldName) => {
    setTrack((prev) => ({ ...prev, [field]: true }));
  };

  // for get error
  const getError = (field: FieldName) => {
    if (track[field] || submitted) {
      return errors[field];
    }
    return undefined;
  };

  // for password visibility
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // for form validation
    setSubmitted(true);
    const formErrors = validate(values);
    if (Object.keys(formErrors).length > 0) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    // for get data from form
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as FormValues;

    const { data: resData, error } = await signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,

      },
      {
        onRequest: () => {
          toast.loading("Signing up...", { id: "signup" });
        },
        onSuccess: () => {
          toast.success("Sign up successful!",{id: "signup"});
          redirect("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Something went wrong",{id:"signup"});
        },
      },
    );
  };

  // for google sign in
  const handleGoogleSubmit = async () => {
    try {
      await signIn.social(
        {
          provider: "google",
          callbackURL: "/",
        },
        {
          onRequest: () => {
            toast.loading("Signing in with Google...");
          },
          onSuccess: () => {
            toast.success("Google sign in successful!");
          },
          onError: () => {
            toast.error("Google sign in failed");
          },
        },
      );
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#faf8f4] px-4 py-10 dark:bg-slate-950 sm:px-6">
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-7 top-1/4 hidden size-48 -rotate-45 text-[#9aab9d]/25 md:block lg:left-8 lg:size-56"
        strokeWidth={0.7}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 bottom-12 hidden size-52 rotate-12 text-[#9aab9d]/25 md:block lg:right-8 lg:size-64"
        strokeWidth={0.7}
      />

      <section className="relative z-10 w-full max-w-117.5 rounded-2xl border border-white bg-white/95 px-6 py-8 shadow-[0_16px_50px_rgba(34,40,30,0.10)] dark:border-slate-800 dark:bg-slate-900 sm:px-10 sm:py-9">
        <div className="mb-5 flex justify-center">
          <div className="relative flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Leaf
              aria-hidden="true"
              className="absolute -left-6 top-1 size-4 -rotate-45 text-blue-300"
            />
            <BookOpen aria-hidden="true" className="size-8" strokeWidth={1.8} />
            <Leaf
              aria-hidden="true"
              className="absolute -right-6 top-1 size-4 rotate-45 text-blue-300"
            />
          </div>
        </div>

        <h1 className="text-center font-serif text-3xl font-bold tracking-tight text-[#18304a] dark:text-white sm:text-4xl">
          Create your account
        </h1>
        <div className="mx-auto my-4 flex max-w-36 items-center gap-2">
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <span className="size-1.5 rotate-45 bg-[#c4ccd1] dark:bg-slate-500" />
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>
        <p className="mb-6 text-center text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
          Welcome to a world of stories.
          <br />
          Sign up to discover your next great read.
        </p>

        {/* form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Full name
              </label>
              <div
                className={cn(
                  "flex h-11 items-center gap-3 rounded-lg border bg-white px-3 text-slate-400 transition dark:bg-slate-950",
                  getError("name")
                    ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100 dark:border-red-500/80 dark:focus-within:ring-red-950/40"
                    : "border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:focus-within:ring-blue-900/40",
                )}
              >
                <UserRound aria-hidden="true" className="size-4 shrink-0" />
                <input
                  id="full-name"
                  type="text"
                  autoComplete="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Enter your full name"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
              {getError("name") && (
                <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
                  {getError("name")}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Email address
              </label>
              <div
                className={cn(
                  "flex h-11 items-center gap-3 rounded-lg border bg-white px-3 text-slate-400 transition dark:bg-slate-950",
                  getError("email")
                    ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100 dark:border-red-500/80 dark:focus-within:ring-red-950/40"
                    : "border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:focus-within:ring-blue-900/40",
                )}
              >
                <Mail aria-hidden="true" className="size-4 shrink-0" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="Enter your email address"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
              {getError("email") && (
                <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
                  {getError("email")}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Password
              </label>
              <div
                className={cn(
                  "flex h-11 items-center gap-3 rounded-lg border bg-white px-3 text-slate-400 transition dark:bg-slate-950",
                  getError("password")
                    ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100 dark:border-red-500/80 dark:focus-within:ring-red-950/40"
                    : "border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:focus-within:ring-blue-900/40",
                )}
              >
                <LockKeyhole aria-hidden="true" className="size-4 shrink-0" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  name="password"
                  value={values.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="Create a password"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <button
                  type="button"
                  onClick={handlePassword}
                  className="text-slate-400 hover:text-slate-600 focus:outline-none dark:hover:text-slate-300 cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeClosed aria-hidden="true" className="size-4 shrink-0" />
                  ) : (
                    <Eye aria-hidden="true" className="size-4 shrink-0" />
                  )}
                </button>
              </div>
              {getError("password") && (
                <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
                  {getError("password")}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Confirm password
              </label>
              <div
                className={cn(
                  "flex h-11 items-center gap-3 rounded-lg border bg-white px-3 text-slate-400 transition dark:bg-slate-950",
                  getError("confirmPassword")
                    ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100 dark:border-red-500/80 dark:focus-within:ring-red-950/40"
                    : "border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:focus-within:ring-blue-900/40",
                )}
              >
                <LockKeyhole aria-hidden="true" className="size-4 shrink-0" />
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                  onBlur={() => handleBlur("confirmPassword")}
                  placeholder="Confirm your password"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <button
                  type="button"
                  onClick={handleConfirmPassword}
                  className="text-slate-400 hover:text-slate-600 focus:outline-none dark:hover:text-slate-300 cursor-pointer"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeClosed aria-hidden="true" className="size-4 shrink-0" />
                  ) : (
                    <Eye aria-hidden="true" className="size-4 shrink-0" />
                  )}
                </button>
              </div>
              {getError("confirmPassword") && (
                <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
                  {getError("confirmPassword")}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-11 w-full cursor-pointer rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* or */}
        <div className="my-4 flex items-center gap-3 text-sm text-slate-400">
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          or
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* Continue with google */}
        <button
          type="button"
          onClick={handleGoogleSubmit}
          className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <span className="text-lg font-bold text-[#4285f4]" aria-hidden="true">
            G
          </span>
          Continue with Google
        </button>

        {/* Already have an account */}
        <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Login
          </Link>
        </p>
      </section>
    </section>
  );
}
