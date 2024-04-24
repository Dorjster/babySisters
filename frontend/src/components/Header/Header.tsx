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
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";

// Navigation -----
type navigationItem = {
  href: string;
  label: string;
};

type navigationLogin = {
  href: string;
  label: string;
};

const navigationItems: navigationItem[] = [
  {
    href: "/",
    label: "Нүүр",
  },
  {
    href: "/how-it-works",
    label: "Ашиглах заавар",
  },
  {
    href: "/babysitter",
    label: "Хүүхэд асрагч",
  },
  {
    href: "/parent",
    label: "Эцэг эх",
  },
];

const navigationLogin: navigationLogin[] = [
  {
    // href: "/api/auth/login",
    href: "/login",
    label: "Нэвтрэх",
  },
];

export const Header = () => {
  const { loggedInUserData } = useData();
  const { isLoggedIn } = useData();
  const router = useRouter();
  const pathname = usePathname();
  const { push } = useRouter();
  const [TemporaryDrawer, setDrawer] = useState(false);
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [loggedInUserData]);

  const handleDrawer = () => {
    setDrawer(!TemporaryDrawer);
  };

  const handlePush = (href: string) => {
    window.location.href = `${href}`;
  };

  return (
    <div
      className={`${
        pathname === "/"
          ? "flex justify-between items-center py-6 bg-[#c9e8ec] dark:bg-[#31363F]  sticky top-0 md:z-30"
          : "flex justify-between items-center py-6 bg-[white] dark:bg-[#31363F] dark:border-slate-500  border-b-[0.5px] border-gray-300  sticky top-0 md:z-30"
      }`}
    >
      <div className="flex  ml-[30px] ">
        <Image
          src="/babysits.logo.png"
          alt="home.logo  "
          width={107}
          height={61}
          onClick={() => {
            window.location.href = "/";
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="md:flex justify-center items-center gap-10 text-[16px] font-[400] dark:text-[#E3E8EC] text-gray-700 hidden">
        {navigationItems.map(({ href, label }, index) => (
          <button
            // href={href}
            onClick={() => handlePush(href)}
            key={index}
            style={{ cursor: "pointer" }}
            className={`cursor-pointer ${
              pathname === href
                ? "text-[#389BA7]  hover:text-[#008291]"
                : "black hover:text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex justify-between md:gap-10">
        {" "}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <IoMoon size={22} className="text-[#389BA7] " fillRule="evenodd" />
          ) : (
            <IoSunnyOutline
              size={22}
              className=" text-[#389BA7]"
              fillRule="evenodd"
            />
          )}
        </button>
        {isLoggedIn ? (
          <div className="flex justify-end items-center md:gap-4 ">
            {loading ? (
              <CircularProgress size={20} className="w-[500px]" />
            ) : (
              <>
                {loggedInUserData.name && (
                  <Button
                    onClick={() => push("/edit-profile")}
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
                    <PersonIcon
                      sx={{ fontSize: "30px", color: "#389BA7" }}
                      fillRule="evenodd"
                    />
                    {loggedInUserData.name}
                  </Button>
                )}
              </>
            )}
            <AnchorTemporaryDrawer />
          </div>
        ) : (
          <div className="flex justify-end items-center md:gap-4 cursor-pointer ">
            {navigationLogin.map(({ href, label }, index) => (
              <div key={index} className="flex   gap-8">
                <button
                  // href={href}
                  onClick={() => handlePush(href)}
                  key={index}
                  style={{ cursor: "pointer" }}
                  className={`cursor-pointer ${
                    pathname === href
                      ? "text-[#389BA7] hover:text-[#008291]"
                      : "black hover:text-black"
                  }`}
                >
                  {label}
                </button>
              </div>
            ))}
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
    </div>
  );
};
