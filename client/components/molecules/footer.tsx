import { Mail, Phone, MapPin } from "lucide-react";
import { CLUB_CONTACTS } from "@/constants/club-contacts";
import Image from "next/image";
import Logo from "@/public/landing-page/succ-portal-homepage-logo.png";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-neutral-800">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none opacity-5 z-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="The Silliman University Camera Club"
                height={50}
                priority
                className="w-auto max-w-50 object-contain"
              />
            </div>
            <p className="text-neutral-500 text-sm max-w-sm">
              Capturing moments, creating memories, and building a community of
              photographers and videographers since 2010.
            </p>
            <div className="flex gap-2">
              <a
                href={CLUB_CONTACTS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center size-8 rounded-sm border border-neutral-800 bg-transparent text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={CLUB_CONTACTS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center size-8 rounded-sm border border-neutral-800 bg-transparent text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Empty middle column to push Contact Us to the right */}
          <div />

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-neutral-400 text-xs font-semibold uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-neutral-600 mt-0.5 shrink-0" />
                <span className="text-neutral-500 text-sm">
                  {CLUB_CONTACTS.address.line1}
                  <br />
                  {CLUB_CONTACTS.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-neutral-600 shrink-0" />
                <a
                  href={`mailto:${CLUB_CONTACTS.email}`}
                  className="text-neutral-500 hover:text-white text-sm transition-colors"
                >
                  {CLUB_CONTACTS.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-neutral-600 shrink-0" />
                <span className="text-neutral-500 text-sm">
                  {CLUB_CONTACTS.phone}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Silliman University Camera Club. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
