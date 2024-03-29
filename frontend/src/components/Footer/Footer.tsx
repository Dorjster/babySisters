"use client";
// Imports -----
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RadioGroupRating from "../ui/footerIcons";

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

  return (
    <div className="relative bottom-0 left-0 bg-[#c9e8ec] w-screen h-[545px] md:px-[120px] flex flex-col justify-center items-center text-black gap-[45px] px-[100px">
      <div className="flex gap-[150px]">
        <div>
          <Image
            width={100}
            height={200}
            src="/barry_waving.webp"
            alt="barry waving"
          />
        </div>
        <div className="">
          <h1 className="text-[18px] gap-5">Babysits</h1>
          <ul>
            <div className="flex flex-col gap-1 text-[16px] font-[400] text-gray-700 pt-3">
              {navigationleftItems.map(({ href, label }, index) => (
                <Link
                  href={href}
                  key={index}
                  className={`cursor-pointer ${
                    pathname === href ? "text-[#EDF7F8]" : "black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[18px] gap-5">What are you looking for?</h1>
          <ul>
            <div className="flex flex-col gap-1 text-[16px] font-[400] text-gray-700 pt-3">
              {navigationmiddleItems.map(({ href, label }, index) => (
                <Link
                  href={href}
                  key={index}
                  className={`cursor-pointer ${
                    pathname === href ? "text-[#EDF7F8]" : "black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[18px]">Discover</h1>
          <ul>
            <div className="flex flex-col gap-1 text-[16px] font-[400] text-gray-700 pt-3">
              {navigationrightItems.map(({ href, label }, index) => (
                <Link
                  href={href}
                  key={index}
                  className={`cursor-pointer ${
                    pathname === href ? "text-[#EDF7F8]" : "black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <hr className="w-full border-white" />
      <div className="flex flex-col items-center font-[200] text-[16px] gap-4">
        <h1 className="text-[20px] font-[400] ">Follow us on</h1>
      </div>
      <div>
        <RadioGroupRating />
      </div>
    </div>
  );
};
