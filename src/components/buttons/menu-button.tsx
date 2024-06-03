"use client";

import { useEffect, useRef } from "react";
import { Menu } from "lucide-react";

import Button from "@/components/ui/button";
import useSidebarMobileStore from "@/store/use-sidebar-mobile";
import useClickOutside from "@/hooks/use-click-outside";

const MenuButton = () => {
  const ref = useRef(null);
  const { setIsOpen, setButtonRef, isOpen, buttonRef } =
    useSidebarMobileStore();

  useClickOutside(buttonRef!, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    setButtonRef(ref);
  }, [setButtonRef]);

  return (
    <Button
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className="block lg:hidden"
    >
      <Menu className="h-5 w-5" />
    </Button>
  );
};

export default MenuButton;
