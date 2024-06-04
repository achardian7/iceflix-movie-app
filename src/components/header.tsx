import Logo from "@/components/ui/logo";
import Navlinks from "@/components/navlinks";
import ModeToggle from "@/components/buttons/mode-toggle";
import SearchButton from "@/components/buttons/search-button";
import ProfileButton from "@/components/buttons/profile-button";
import MenuButton from "@/components/buttons/menu-button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex h-12 items-center justify-between bg-red-600 px-3 text-white dark:bg-gray-950 lg:px-10">
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
