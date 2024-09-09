import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode | ReactNode[];
}

export const metadata: Metadata = {
  title: "Dashboard | Mastering NextJS",
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <nav className="w-full px-8 py-2 flex items-center justify-between list-none bg-white/5">
        <li className="">Dashboard</li>

        <div className="flex items-center gap-x-3">
          {[
            { name: "Home", path: "/dashboard" },
            { name: "Settings", path: "/dashboard/settings" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <section>{children}</section>
    </main>
  );
}
