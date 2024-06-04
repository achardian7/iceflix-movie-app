import { Inter } from "next/font/google";
import Link from "next/link";

import { cn } from "@/utils/cn";

const font = Inter({ subsets: ["latin"] });

const Logo = () => {
  return (
    <Link href="/" className={cn(font.className, "text-3xl")}>
      <span className="font-bold text-white">Ice</span>
      <span className="tracking-wider text-gray-200">flix</span>
    </Link>
  );
};

export default Logo;
