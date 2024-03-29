"use client";
// Imports -----
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mui Imports -----
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

// Navigation -----
type navigationItem = {
  href: string;
  label: string;
};

const navigationItems: navigationItem[] = [
  {
    href: "/babysitter",
    label: "Babysitters",
  },
  {
    href: "/babysitting",
    label: "Babysitting Jobs",
  },
  {
    href: "/about-us/how-it-works",
    label: "How it works",
  },
  {
    href: "/pricing",
    label: "Pricing",
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

  // Search Area just in case -----

  //   const [search, setSearch] = useState("");

  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target;
  //     if (name === "search") {
  //       setSearch(value);
  //     }
  //   };

  // -----
  return (
    <div className="flex justify-between items-center py-6 bg-[#c9e8ec]">
      <div className="flex  ml-[30px] ">
        <Image
          src="/babysits.logo.png"
          alt="home.logo"
          width={107}
          height={61}
          onClick={() => {
            window.location.href = "/";
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center gap-10 text-[16px] font-[400] text-gray-700 ">
        {navigationItems.map(({ href, label }, index) => (
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
      <div className="flex justify-end items-center gap-4">
        <button
          onClick={() => router.push("./login")}
          className="text-[16px] font-[400] text-[#4d565e]"
        >
          Log in
          <hr
            style={{
              color: "red",
              backgroundColor: "red",
              border: "0.5px solid gray",
            }}
          />
        </button>
        <button
          onClick={() => router.push("./signup")}
          className="text-[16px] font-[400] w-[88px] h-[38px] text-white  rounded-[15px] bg-[#389BA7]"
        >
          Sign up
        </button>
        <Button
          onClick={handleDrawer}
          variant="text"
          startIcon={<MenuIcon />}
          className="text-[3px]
          font-[700] leading-2"
          color="inherit"
        ></Button>
      </div>
    </div>
  );
};
