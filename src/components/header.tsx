"use client";

import Logo from "@/components/ui/logo";
import Navlinks from "@/components/navlinks";
import ModeToggle from "@/components/buttons/mode-toggle";
import SearchButton from "@/components/buttons/search-button";
import ProfileButton from "@/components/buttons/profile-button";
import MenuButton from "@/components/buttons/menu-button";
import { useState } from "react";
import { cn } from "@/utils/cn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex h-12 items-center justify-between px-3 text-white lg:px-10",
        isScrolled ? "bg-red-600 dark:bg-gray-950" : "bg-transparent",
      )}
    >
      <Logo />
      <Navlinks />
      <div className="flex items-center space-x-3">
        <SearchButton />
        <ModeToggle />
        <ProfileButton />
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
