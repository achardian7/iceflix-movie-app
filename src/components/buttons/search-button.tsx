"use client";

import { Search } from "lucide-react";
import Button from "../ui/button";
import useSearchModal from "@/store/use-search-modal";
import useClickOutside from "@/hooks/use-click-outside";
import { useRef } from "react";

const SearchButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { setIsOpen } = useSearchModal();

  return (
    <Button
      ref={buttonRef}
      onClick={() => setIsOpen(true)}
      className="flex cursor-pointer items-center space-x-2"
    >
      <Search className="h-5 w-5" />
    </Button>
  );
};

export default SearchButton;
