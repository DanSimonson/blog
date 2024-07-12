"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { GiMountaintop } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { siteConfig } from "@/config/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <>
      <section>
        <nav className=" flex justify-between items-center w-[92%] mx-auto h-14 ">
          <div>
            <Link href="/">
              <span className="self-center whitespace-nowrap px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white font-bold flex flex-row justify-around p-10">
                <GiMountaintop className="size-10" />
                mariposaweb
              </span>
            </Link>
          </div>
          <div className="flex w-full justify-center">
            <ul className="gap-8 invisible md:visible md:flex md:justify-end  w-full mr-10">
              <li className="mr-16 ml-6">
                <div
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                  className="group relative h-fit w-fit"
                >
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative text-red-700 text-2xl"
                  >
                    Github
                    <span
                      style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
                      className="absolute -bottom-2 -left-1 -right-2 h-1  origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
                    />
                  </a>
                </div>
              </li>
              <li className="mr-16">
                <div
                  onMouseEnter={() => setOpenTwo(true)}
                  onMouseLeave={() => setOpenTwo(false)}
                  className="group relative h-fit w-fit"
                >
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="relative text-red-700 text-2xl"
                  >
                    Twitter
                    <span
                      style={{ transform: openTwo ? "scaleX(1)" : "scaleX(0)" }}
                      className="absolute -bottom-2 -left-1 -right-2 h-1  origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
                    />
                  </a>
                </div>
              </li>
              <li className="mr-38">
                <div
                  onMouseEnter={() => setOpenThree(true)}
                  onMouseLeave={() => setOpenThree(false)}
                  className="group relative h-fit w-fit"
                >
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="relative text-red-700 text-2xl"
                  >
                    LinkedIn
                    <span
                      style={{
                        transform: openThree ? "scaleX(1)" : "scaleX(0)",
                      }}
                      className="absolute -bottom-2 -left-1 -right-2 h-1  origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <ModeToggle />
            <div
              onClick={() => setClick(!click)}
              className="text-3xl cursor-pointer transition transform duration-300 ease-in-out visible md:invisible"
            >
              {click ? <FaTimes /> : <CiMenuFries />}
            </div>
          </div>

          <section className="visible md:invisible">
            <div
              className="absolute left-0 w-[100vw] h-[100vh] transition-transform duration-300 ease-out"
              style={{
                zIndex: "1",
                marginTop: "34px",
                backgroundColor: "white",
                transform: click ? "scaleX(1)" : "scaleX(0)",
              }}
            >
              <ul className="flex flex-col justify-center items-center h-[100vh]">
                <li className="pb-28">
                  <div
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    className="group relative h-fit w-fit"
                  >
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="relative text-red-700 text-2xl hover:text-cyan-500"
                    >
                      Github
                    </a>
                  </div>
                </li>
                <li className="pb-28">
                  <div
                    onMouseEnter={() => setOpenTwo(true)}
                    onMouseLeave={() => setOpenTwo(false)}
                    className="group relative h-fit w-fit"
                  >
                    <a
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="relative text-red-700 text-2xl hover:text-cyan-500"
                    >
                      Twitter
                    </a>
                  </div>
                </li>
                <li className="pb-28">
                  <div
                    onMouseEnter={() => setOpenThree(true)}
                    onMouseLeave={() => setOpenThree(false)}
                    className="group relative h-fit w-fit"
                  >
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="relative text-red-700 text-2xl hover:text-cyan-500"
                    >
                      Linkedin
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </section>
    </>
  );
}
