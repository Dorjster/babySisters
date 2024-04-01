"use client";
// Imports -----
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnchorTemporaryDrawer from "../Drawer/rightDrawer";

// Mui Imports -----
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

// Navigation -----
type navigationItem = {
  href: string;
  label: string;
};

const navigationItems: navigationItem[] = [
  {
    href: "/",
    label: "Нүүр",
  },
  {
    href: "/babysitter",
    label: "Хүүхэд асрагч",
  },
  {
    href: "/parent",
    label: "Эцэг эх",
  },
  {
    href: "/how-it-works",
    label: "Ашиглах заавар",
  },
];

// -----
export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Button's Modal Placeholder -----

  const [TemporaryDrawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!TemporaryDrawer);
  };

  // -----
  return (
    <div className="flex justify-between items-center py-6 bg-[#c9e8ec] sticky top-0 z-10">
      <div className="flex  ml-[30px] ">
        <Image
          src="/babysits.logo.png"
          alt="home.logo"
          width={107}
          height={61}
          onClick={() => {
            window.location.href = "/";
          }}
          className="cursor-default"
        />
      </div>
      <div className="flex justify-center items-center gap-10 text-[16px] font-[400] text-gray-700 ">
        {navigationItems.map(({ href, label }, index) => (
          <Link
            href={href}
            key={index}
            className={`cursor-default ${
              pathname === href ? "text-[#389BA7]" : "black"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex justify-end items-center gap-4">
        <button
          onClick={() => router.push("./login")}
          className="text-[16px] font-[400] cursor-default text-[#4d565e] hover:text-black"
        >
          Нэвтрэх
          <hr
            style={{
              color: "red",
              backgroundColor: "red",
              border: "0.5px solid gray",
            }}
          />
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="text-[16px] cursor-default font-[400] p-2 text-white  rounded-[15px] bg-[#389BA7] hover:bg-[#008291]"
        >
          Бүртгүүлэх
        </button>
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
};
