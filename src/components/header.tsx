import Logo from "@/components/ui/logo";
import Navlinks from "@/components/navlinks";
import ModeToggle from "@/components/buttons/mode-toggle";
import SearchButton from "@/components/buttons/search-button";
import ProfileButton from "@/components/buttons/profile-button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-12 items-center justify-between bg-red-600 px-10 text-white dark:bg-gray-950">
      <Logo />
      <Navlinks />
      <div className="flex items-center space-x-3">
        <SearchButton />
        <ModeToggle />
        <ProfileButton />
      </div>
    </header>
  );
};

export default Header;
