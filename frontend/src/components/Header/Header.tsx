"use client";
// Imports -----
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnchorTemporaryDrawer from "../Drawer/rightDrawer";
import PersonIcon from "@mui/icons-material/Person";
// Mui Imports -----
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useData } from "@/context/userProvider";

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
  const { loggedInUserData } = useData();
  const { isLoggedIn } = useData();
  const router = useRouter();
  const pathname = usePathname();
  const { push } = useRouter();
  // Button's Modal Placeholder -----

  const [TemporaryDrawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!TemporaryDrawer);
  };

  // -----
  return (
    <div className="flex justify-between items-center py-6 bg-[#c9e8ec] sticky top-0 z-30">
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
      <div className="md:flex justify-center items-center gap-10 text-[16px] font-[400] text-gray-700 hidden">
        {navigationItems.map(({ href, label }, index) => (
          <Link
            href={href}
            key={index}
            style={{ cursor: "pointer" }}
            className={`cursor-default ${
              pathname === href
                ? "text-[#389BA7] hover:text-[#008291]"
                : "black hover:text-black"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      {isLoggedIn ? (
        <div className="flex justify-end items-center gap-4 md:">
          <Button
            onClick={() => {
              push("/edit-profile");
            }}
            sx={{
              fontWeight: "700px",
              color: "#389BA7",
              fontSize: "20px",
              height: "20px",
              width: "100px",
              px: "20px",
              display: "flex",
              gap: "20px",
              marginRight: "30px",
            }}
          >
            {" "}
            <PersonIcon sx={{ fontSize: "30px", color: "#389BA7" }} />
            {loggedInUserData.name}
          </Button>
          <AnchorTemporaryDrawer />
        </div>
      ) : (
        <div className="flex justify-end items-center gap-4 md:">
          <button
            onClick={() => router.push("./login")}
            className="text-[16px] font-[400] cursor-pointer text-[#4d565e] md:flex hidden hover:text-black"
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
            className="text-[16px] cursor-pointer font-[400] p-2 text-white  rounded-[15px] bg-[#389BA7] md:flex hidden hover:bg-[#008291]"
          >
            Бүртгүүлэх
          </button>
          <AnchorTemporaryDrawer />
        </div>
      )}
    </div>
  );
};
