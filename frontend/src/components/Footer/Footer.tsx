"use client";
// Imports -----
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RadioGroupRating from "../ui/footerIcons";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

// Navigation -----
type navigationItem = {
  href: string;
  label: string;
};

// Navigation Left How it works? -----
const navigationleftItems: navigationItem[] = [
  {
    href: "/about-us/how-it-works",
    label: "How it works",
  },
  {
    href: "/Help",
    label: "Help",
  },
  {
    href: "/Terms-Privacy",
    label: "Terms & Privacy",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/About-us",
    label: "Company details",
  },
  {
    href: "/Babysits-for-Work",
    label: "Babysits for Work",
  },
  {
    href: "/Shop",
    label: "Babysits Shop",
  },
];

// Navigation Middle What ya looking for? -----
const navigationmiddleItems: navigationItem[] = [
  {
    href: "/Babysitter",
    label: "Babysitters",
  },
  {
    href: "/Childminders",
    label: "Childminders",
  },
  {
    href: "/Special-needs-care",
    label: "Special Needs Care",
  },
  {
    href: "/Parents-help-Parents",
    label: "Parents help Parents",
  },
  {
    href: "/Babysitting-Jobs",
    label: "Babysitting Jobs",
  },
  {
    href: "/Childminder-for-Work",
    label: "Childminder Jobs",
  },
  {
    href: "/Agencies",
    label: "Childcare Agencies",
  },
];

// Navigation Right Discovery? -----
const navigationrightItems: navigationItem[] = [
  {
    href: "/About-us",
    label: "About us",
  },
  {
    href: "/Tips",
    label: "Tips & Articles",
  },
  {
    href: "/Trust-Safety",
    label: "Trust & Safety",
  },
  {
    href: "/Community-standards",
    label: "Community Standards",
  },
  {
    href: "/Partners",
    label: "Partners",
  },
  {
    href: "/Share-your-experience",
    label: "Share your experience",
  },
  {
    href: "/Babysitters-for-Special-Needs",
    label: "Babysitters for Special Needs",
  },
];

// Footer -----
export const Footer = () => {
  const pathname = usePathname();
  //   const textArray: Array<{ label: string; link: string }> = [
  //     { label: "Home", link: "/" },
  //     { label: "About", link: "/about" },
  //     { label: "Contact", link: "/contact" },
  //   ];
  const FooterArray = [
    { title: "Ашиглах заавар", href: "/how-it-works" },
    { title: "Эцэг эхэд", href: "/tipsParent" },
    { title: "Асрагчид", href: "/tipsBabysitter" },
    { title: "Аюулгүй байдал", href: "/safety" },
  ];

  return (
    <div className="relative bottom-0 left-0 bg-[#c9e8ec] w-screen h-full md:px-[120px] flex flex-col justify-center items-center text-black gap-[45px] px-[100px] py-[50px] ">
      <div className="flex justify-center items-center gap-10 text-[20px] font-[400] text-gray-700  ">
        {FooterArray.map(({ href, title }, index) => (
          <Link
            href={href}
            key={index}
            className={`cursor-default${
              pathname === href ? "text-[#389BA7]" : "black"
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
