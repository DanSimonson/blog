"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { GiMountaintop } from "react-icons/gi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  return (
    <nav className="w-full relative flex justify-between  px-4 py-5">
      <div>
        <Link href="/">
          <span className="self-center whitespace-nowrap px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white font-bold flex flex-row justify-around p-10">
            <GiMountaintop className="size-10" />
            mariposablog
          </span>
        </Link>
      </div>
      <div className="flex justify-end w-5/12 mr-48">
        <ul className="flex justify-around ml-28 mr-28 w-3/6">
          <li className="">
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="group relative h-fit w-fit"
            >
              <a className="relative text-red-700 text-2xl">
                Profile
                <span
                  style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
                  className="absolute -bottom-2 -left-1 -right-2 h-1 origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
                />
              </a>
            </div>
          </li>
          <li className="px-4">
            <div
              onMouseEnter={() => setOpenTwo(true)}
              onMouseLeave={() => setOpenTwo(false)}
              className="group relative h-fit w-fit"
            >
              <a className="relative text-red-700 text-2xl">
                Github
                <span
                  style={{ transform: openTwo ? "scaleX(1)" : "scaleX(0)" }}
                  className="absolute -bottom-2 -left-1 -right-2 h-1 origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
                />
              </a>
            </div>
          </li>
          <li className="px-4">
            <div
              onMouseEnter={() => setOpenThree(true)}
              onMouseLeave={() => setOpenThree(false)}
              className="group relative h-fit w-fit"
            >
              <a className="relative text-red-700 text-2xl">
                Linkedin
                <span
                  style={{ transform: openThree ? "scaleX(1)" : "scaleX(0)" }}
                  className="absolute -bottom-2 -left-1 -right-2 h-1 origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
                />
              </a>
            </div>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
