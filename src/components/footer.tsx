import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-red-700 px-3 py-6 text-white lg:px-10">
      <Logo />
      <p>&copy; {new Date().getFullYear()} achardian</p>
      <div className="flex items-center gap-3">
        <Link href="https://www.themoviedb.org/">
          <Image src="/tmdb.svg" alt="powered by tmdb" width={70} height={70} />
        </Link>
        <Link
          href="https://www.themoviedb.org/"
          className="rounded-lg bg-red-800 p-2"
        >
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
