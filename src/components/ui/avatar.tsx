import Image from "next/image";

const Avatar = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="relative h-10 w-10 overflow-clip rounded-full">
      <Image src={imgSrc} alt="user-profile" fill className="object-cover" />
    </div>
  );
};

export default Avatar;
