"use client";
// Imports -----
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RadioGroupRating from "../ui/footerIcons";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

// Footer -----
export const Footer = () => {
  const pathname = usePathname();

  const FooterArray = [
    { title: "Ашиглах заавар", href: "/how-it-works" },
    { title: "Зөвлөгөө", href: "/tips" },
    { title: "Аюулгүй байдал", href: "/safety" },
  ];

  return (
    <div className="relative bottom-0 left-0 bg-[#c9e8ec] w-screen h-full md:px-[120px] flex flex-col justify-center items-center text-black gap-[45px] px-[100px] py-[50px] ">
      <div className="flex justify-center items-center gap-10 text-[16px] font-[400] text-gray-700  ">
        {FooterArray.map(({ href, title }, index) => (
          <Link
            href={href}
            key={index}
            className={`cursor-default ${
              pathname === href ? "text-[#389BA7] hover:text-[#008291]"  : "black hover:text-black"
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex gap-[150px]">
        <div>
          <Image
            width={100}
            height={200}
            src="/barry_waving.webp"
            alt="barry waving"
          />
        </div>
      </div>
      <hr className="w-full border-white" />

      <div>
        <RadioGroupRating />
      </div>
    </div>
  );
};
