import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { GiMountaintop } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w max-w-2xl mx-auto px-4 py-5">
      {/* <Link href="/" className="font-bold text-3xl">
        Dan<span className="text-red-500">Blog</span>
      </Link> */}
      <span className="self-center whitespace-nowrap px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white font-bold flex flex-row justify-around p-10">
        <GiMountaintop className="size-10" />
        mariposablog
      </span>
      <ModeToggle />
    </nav>
  );
}
