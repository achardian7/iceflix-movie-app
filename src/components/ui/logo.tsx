import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-3xl">
      <span className="font-bold text-white">Ice</span>
      <span className="tracking-wider text-gray-200">flix</span>
    </Link>
  );
};

export default Logo;
