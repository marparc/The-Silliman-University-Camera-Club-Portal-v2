import Image from "next/image";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { ThreeDMarquee } from "../atoms/marquee";
import { Button } from "@/components/atoms/button";

import BT1 from "@/public/landing-page/BI1.jpg";
import BT2 from "@/public/landing-page/BI2.jpg";
import BT3 from "@/public/landing-page/BI3.jpg";
import BT4 from "@/public/landing-page/BI4.jpg";
import BT5 from "@/public/landing-page/BI5.jpg";
import BT6 from "@/public/landing-page/BI6.jpg";
import BT7 from "@/public/landing-page/BI7.jpg";
import BT8 from "@/public/landing-page/BI8.jpg";
import BT9 from "@/public/landing-page/BI9.jpg";
import BT10 from "@/public/landing-page/BI10.jpg";
import BT11 from "@/public/landing-page/BI11.jpg";
import BT12 from "@/public/landing-page/BI12.jpg";
import BT13 from "@/public/landing-page/BI13.jpg";
import BT14 from "@/public/landing-page/BI14.jpg";
import BT15 from "@/public/landing-page/BI15.jpg";
import BT16 from "@/public/landing-page/BI16.jpg";

import Header from "@/public/landing-page/succ-portal-homepage-logo.png";

const images = [
  BT1.src,
  BT2.src,
  BT3.src,
  BT4.src,
  BT5.src,
  BT6.src,
  BT7.src,
  BT8.src,
  BT9.src,
  BT10.src,
  BT11.src,
  BT12.src,
  BT13.src,
  BT14.src,
  BT15.src,
  BT16.src,
];

export function Hero() {
  return (
    <section className="relative h-[80vh] lg:h-[70vh] bg-black px-4 flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none opacity-10 z-5 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

      {/* 3D Marquee Background */}
      <div className="absolute inset-0 z-5 opacity-20 pointer-events-none flex items-center justify-center scale-130">
        <ThreeDMarquee images={images} className="h-full w-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center text-white">
        {/* Title image */}
        <div className="flex justify-center mb-6">
          <Image
            src={Header}
            alt="The Silliman University Camera Club"
            height={80}
            priority
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
          Capturing moments, creating memories, and building a community of
          photographers and videographers since 2010
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="px-12 py-6 bg-red-800 hover:bg-red-700 text-white min-w-50 gap-3">
            <CalendarIcon className="size-5" />
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
