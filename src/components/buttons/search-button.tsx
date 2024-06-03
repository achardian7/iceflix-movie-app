"use client";

import { Search } from "lucide-react";
import Button from "../ui/button";

const SearchButton = () => {
  return (
    <Button className="flex cursor-pointer items-center space-x-2">
      <Search className="h-5 w-5" />
    </Button>
  );
};

export default SearchButton;
