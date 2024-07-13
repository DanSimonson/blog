"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="rounded-xl container flex flex-col items-center justify-center space-x-4 gap-4 md:h-24 md:flex-row">
        <div className="w-full text-balance flex justify-between text-xl leading-loose text-muted-foreground md:text-left mr-4">
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
              Linkedin
              <span
                style={{
                  transform: openThree ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 -left-1 -right-2 h-1  origin-left rounded-full bg-red-700 transition-transform duration-300 ease-out"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
