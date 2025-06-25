"use client";

import { usePathname } from "next/navigation";
import { Calculator } from "lucide-react";
import Link from "next/link";
import HamburgerMenu from "@/shared/navigation/hamburger-menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-gray-800 bg-gray-900/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center space-x-2">
        <Calculator className="h-7 w-7 text-blue-400" />
        <span className="text-base font-bold text-white lg:text-lg">
          Decimate
        </span>
      </Link>
      <nav className="hidden items-center justify-center space-x-10 text-[15px] lg:flex">
        {["Methods", "About Us", "Support"].map((item: string, index: number) => (
          <Link
            key={index}
            href={`/${item.toLowerCase() as string}`}
            className={`group text-white ${pathname === `/${item.toLowerCase() as string}` ? "bg-blue-600" : ""}`}
          >
            {item}
            <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
          </Link>
        ))}
      </nav>
      <HamburgerMenu />
    </header>
  );
}