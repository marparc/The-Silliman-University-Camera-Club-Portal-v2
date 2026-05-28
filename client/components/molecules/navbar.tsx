"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/button";
import logo from "@/public/succ-logo.png";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-black border-b border-white/10">
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center cursor-pointer"
        >
          <Image
            src={logo}
            alt="Logo"
            height={50}
            priority
            className="object-contain"
          />
        </div>

        {/* Login button — ghost variant */}
        <Button
          variant="ghost"
          className="text-white hover:text-white hover:bg-white/10"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
