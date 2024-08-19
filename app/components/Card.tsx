"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.floor(Math.random() * 1.5),
    },
  }),
};

type Props = {
  image: string;
  title: string;
  text: string;
  header?: string;
  demo?: string;
  github?: string;
};

export const Card = ({ image, title, text, github }: Props) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      className="bg-gradient-to-tl from-purple-600 to-green-800 h-96 w-full relative rounded-md text-2xl text-white "
    >
      <Link
        href={`${github}`}
        target="_blank"
        className="inline-flex font-medium items-center text-black hover:underline cursor-pointer"
      >
        <Image
          src={image}
          alt="image"
          fill={true}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
      </Link>
      <h5 className="px-3 mb-2 text-xl sm:text-2xl font-bold tracking-tight  ">
        {title}
      </h5>
      <p className=" pl-3 mb-3 font-light">{text}</p>
      <div className="pl-3 inline-flex font-medium items-center  hover:underline cursor-pointer">
        See Github
        <svg
          className="text-white w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </div>
    </motion.div>
  );
};
