"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navlinks } from "@/constant";
import { cn } from "@/utils/cn";

const Navlinks = () => {
  const path = usePathname();

  return (
    <div className="hidden h-full items-center space-x-3 lg:flex">
      {navlinks.map((navlink) => (
        <Link
          key={navlink.name}
          href={navlink.path}
          className={cn(
            "rounded-sm p-2 font-semibold hover:bg-gray-800 dark:hover:bg-red-700",
            path === navlink.path
              ? "bg-red-700 dark:bg-blue-800"
              : "bg-transparent",
          )}
        >
          <span>{navlink.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;