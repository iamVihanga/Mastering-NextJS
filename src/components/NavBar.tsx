"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between list-none bg-white/5">
      <li className="">Mastering NEXTJS</li>

      <div className="flex items-center gap-x-3">
        <Link
          className={`rounded px-5 py-2  ${
            pathname === "/" ? "active bg-white text-black" : "bg-white/20"
          }`}
          href="/"
        >
          Home
        </Link>

        <Link
          className={`rounded px-5 py-2  ${
            pathname === "/about" ? "active bg-white text-black" : "bg-white/20"
          }`}
          href="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
