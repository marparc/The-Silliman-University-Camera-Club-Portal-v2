"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

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
import { Input } from "@/components/atoms/input";
import { Checkbox } from "@/components/atoms/checkbox";
import { DatePicker } from "@/components/atoms/date-picker-custom";

import Header from "@/public/landing-page/succ-portal-homepage-logo.png";

export default function RegisterPage() {
  const [birthdate, setBirthdate] = useState<Date>();
  const [consent, setConsent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 relative">
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
              Create an Account
            </CardTitle>
            <CardDescription className="text-neutral-500 text-xs normal-case tracking-normal">
              This registration is for{" "}
              <span className="text-neutral-400">clients only</span>.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-5 pt-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <Label className="text-neutral-400 text-xs">First Name</Label>
                <Input
                  type="text"
                  placeholder="Juan"
                  className="bg-neutral-800/60 border-b-neutral-700 text-white text-sm placeholder:text-neutral-600 focus-visible:border-b-red-800"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-neutral-400 text-xs">Last Name</Label>
                <Input
                  type="text"
                  placeholder="dela Cruz"
                  className="bg-neutral-800/60 border-b-neutral-700 text-white text-sm placeholder:text-neutral-600 focus-visible:border-b-red-800"
                />
              </div>
            </div>

            {/* Birthdate */}
            <div className="flex flex-col gap-2">
              <Label className="text-neutral-400 text-xs">Birthdate</Label>
              <DatePicker
                value={birthdate}
                onChange={setBirthdate}
                maxDate={maxDate}
                minDate={new Date(1950, 0, 1)}
                placeholder="Pick a date"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label className="text-neutral-400 text-xs">Email Address</Label>
              <Input
                type="email"
                placeholder="you@gmail.com"
                className="bg-neutral-800/60 border-b-neutral-700 text-white text-sm placeholder:text-neutral-600 focus-visible:border-b-red-800"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <Label className="text-neutral-400 text-xs">Phone Number</Label>
              <div className="flex items-stretch">
                <span className="flex items-center px-3 bg-neutral-800/80 border border-r-0 border-neutral-700 text-neutral-500 text-sm select-none">
                  +63
                </span>
                <Input
                  type="tel"
                  placeholder="9XX XXX XXXX"
                  className="bg-neutral-800/60 border-b-neutral-700 border-l-0 text-white text-sm placeholder:text-neutral-600 focus-visible:border-b-red-800 rounded-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <Label className="text-neutral-400 text-xs">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-neutral-800/60 border-b-neutral-700 text-white text-sm placeholder:text-neutral-600 focus-visible:border-b-red-800 pr-7"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
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

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <Label className="text-neutral-400 text-xs">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-neutral-800/60 border-b-neutral-700 text-white text-sm placeholder:text-neutral-600 focus-visible:border-b-red-800 pr-7"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={15} strokeWidth={1.5} />
                  ) : (
                    <Eye size={15} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-800 -mx-1" />

            {/* Informed Consent */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(val) => setConsent(!!val)}
                className="mt-0.5 border-neutral-600 data-checked:bg-red-800 data-checked:border-red-800"
              />
              <label
                htmlFor="consent"
                className="text-xs text-neutral-500 leading-relaxed cursor-pointer"
              >
                I understand that this account is for{" "}
                <span className="text-neutral-400">client use only</span> and
                that my personal information will be collected and used by the
                Silliman University Camera Club solely for booking and
                communication purposes. I consent to its use in accordance with
                the club's privacy policy.
              </label>
            </div>

            {/* Submit */}
            <Button
              disabled={!consent}
              className="w-full bg-red-800 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white mt-1 mb-8 transition-colors"
            >
              Create Account
            </Button>
          </CardContent>

          <CardFooter className="border-t border-neutral-800 pt-5 pb-6 flex justify-center">
            <p className="text-xs text-neutral-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="text-neutral-400 hover:text-red-400 transition-colors"
              >
                Sign In
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
