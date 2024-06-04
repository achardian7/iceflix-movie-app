"use client";

import Link from "next/link";

import { dummyUser, navlinks } from "@/constant";
import Avatar from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import useSidebarMobileStore from "@/store/use-sidebar-mobile";
import { cn } from "@/utils/cn";

const SidebarMobile = () => {
  const user = dummyUser;

  const { isOpen } = useSidebarMobileStore();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-[99] flex h-full w-[250px] flex-col bg-gradient-to-r from-red-700 to-red-900 px-3 py-12 duration-150 ease-in-out dark:from-gray-900 dark:to-gray-950 lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex flex-col">
        {navlinks.map((navlink) => (
          <Link
            key={navlink.name}
            href={navlink.path}
            className="border-b border-red-600 p-2 text-lg font-medium text-white dark:border-gray-800"
          >
            {navlink.name}
          </Link>
        ))}
      </div>
      <div className="mt-auto">
        {user ? (
          <Link
            href={`/user/${user.id}`}
            className="flex items-center gap-3 rounded-md border-b border-l border-t border-red-700 bg-red-800 p-2 dark:border-gray-700 dark:bg-gray-900"
          >
            <Avatar imgSrc={user.image} />
            <span className="flex flex-col text-white">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </span>
          </Link>
        ) : (
          <Button className="w-full rounded-full border border-red-800 bg-red-600 text-center font-bold text-white dark:border-gray-900">
            Sign In
          </Button>
        )}
      </div>
    </aside>
  );
};

export default SidebarMobile;
