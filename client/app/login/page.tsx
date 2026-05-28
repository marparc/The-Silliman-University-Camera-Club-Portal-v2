"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/atoms/card";
import { Label } from "@/components/atoms/label";
import { Eye, EyeOff } from "lucide-react";

import Header from "@/public/landing-page/succ-portal-homepage-logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none opacity-5 z-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(153,27,27,0.12),transparent)]" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src={Header}
            alt="The Silliman University Camera Club"
            height={36}
            priority
            className="w-auto max-w-220px object-contain"
          />
        </div>

        {/* Card */}
        <Card className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl backdrop-blur-sm gap-0">
          <CardHeader className="border-b border-neutral-800">
            <CardTitle className="text-white text-sm">Sign In</CardTitle>
            <CardDescription className="text-neutral-500 text-xs normal-case tracking-normal">
              Enter your credentials to access the portal
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-5 pt-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label className="text-neutral-400 text-xs">Email Address</Label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="w-full bg-neutral-800/60 border border-neutral-700 rounded-none text-white text-sm px-3 py-2.5 placeholder:text-neutral-600 focus:outline-none focus:border-red-800 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label className="text-neutral-400 text-xs">Password</Label>
                <button
                  type="button"
                  onClick={() => router.push("/forgot-password")}
                  className="text-xs text-neutral-500 hover:text-red-400 transition-colors normal-case tracking-normal"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-neutral-800/60 border border-neutral-700 rounded-none text-white text-sm px-3 py-2.5 pr-10 placeholder:text-neutral-600 focus:outline-none focus:border-red-800 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={15} strokeWidth={1.5} />
                  ) : (
                    <Eye size={15} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button className="w-full bg-red-800 hover:bg-red-700 text-white mt-1">
              Sign In
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-neutral-800" />
              <span className="text-neutral-600 text-xs">or</span>
              <div className="flex-1 h-px bg-neutral-800" />
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="mb-8 w-full cursor-pointer flex items-center justify-center gap-2.5 bg-neutral-800/60 border border-neutral-700 text-neutral-300 text-sm px-3 py-2.5 hover:bg-neutral-700/60 hover:border-neutral-600 transition-colors"
            >
              {/* Google "G" icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-4 h-4 shrink-0"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.08-6.08C34.36 3.01 29.47 1 24 1 14.82 1 7.01 6.48 3.54 14.27l7.09 5.51C12.33 13.71 17.67 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.67c-.55 2.9-2.2 5.35-4.67 7l7.17 5.57C43.27 37.26 46.5 31.3 46.5 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.63 28.22A14.55 14.55 0 0 1 9.5 24c0-1.47.2-2.89.56-4.22l-7.09-5.51A23.93 23.93 0 0 0 .5 24c0 3.87.93 7.53 2.57 10.76l7.56-6.54z"
                />
                <path
                  fill="#34A853"
                  d="M24 46.5c5.47 0 10.06-1.81 13.42-4.93l-7.17-5.57c-1.98 1.33-4.52 2.1-6.25 2.1-6.33 0-11.67-4.21-13.37-9.88l-7.56 6.54C7.01 41.52 14.82 46.5 24 46.5z"
                />
              </svg>
              Continue with Google
            </button>
          </CardContent>

          <CardFooter className="border-t border-neutral-800 pt-5 pb-6 flex justify-center">
            <p className="text-xs text-neutral-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="text-neutral-400 hover:text-red-400 transition-colors"
              >
                Register
              </button>
            </p>
          </CardFooter>
        </Card>

        <p className="text-xs text-neutral-700 text-center">
          © {new Date().getFullYear()} Silliman University Camera Club
        </p>
      </div>
    </main>
  );
}
