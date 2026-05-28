"use client";

import Image from "next/image";
import { useState } from "react";
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
import { ArrowLeft, MailCheck } from "lucide-react";

import Header from "@/public/landing-page/succ-portal-homepage-logo.png";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

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
            <CardTitle className="text-white text-sm">
              {submitted ? "Check your email" : "Forgot Password"}
            </CardTitle>
            <CardDescription className="text-neutral-500 text-xs normal-case tracking-normal">
              {submitted
                ? `We sent a reset link to ${email}`
                : "Enter your email and we'll send you a reset link"}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-5 pt-6">
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center gap-4 py-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700">
                  <MailCheck
                    size={20}
                    strokeWidth={1.5}
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-neutral-300 text-sm">Reset link sent</p>
                  <p className="text-neutral-600 text-xs">
                    Didn't receive it?{" "}
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-neutral-400 hover:text-red-400 transition-colors"
                    >
                      Try again
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              /* ── Form state ── */
              <>
                <div className="flex flex-col gap-2">
                  <Label className="text-neutral-400 text-xs">
                    Email Address
                  </Label>
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-800/60 border border-neutral-700 rounded-none text-white text-sm px-3 py-2.5 placeholder:text-neutral-600 focus:outline-none focus:border-red-800 transition-colors"
                  />
                </div>

                <Button
                  className="w-full bg-red-800 hover:bg-red-700 text-white mt-1 mb-8"
                  onClick={() => {
                    if (email) setSubmitted(true);
                  }}
                >
                  Send Reset Link
                </Button>
              </>
            )}
          </CardContent>

          <CardFooter className="border-t border-neutral-800 pt-5 pb-6 flex justify-center">
            <a
              href="/login"
              className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-red-400 transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={1.5} />
              Back to Sign In
            </a>
          </CardFooter>
        </Card>

        <p className="text-xs text-neutral-700 text-center">
          © {new Date().getFullYear()} Silliman University Camera Club
        </p>
      </div>
    </main>
  );
}
