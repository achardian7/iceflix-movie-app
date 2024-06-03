"use client";

import { User2 } from "lucide-react";
import Button from "@/components/ui/button";

const ProfileButton = () => {
  return (
    <Button className="hidden lg:block">
      <User2 className="h-5 w-5" />
    </Button>
  );
};

export default ProfileButton;
