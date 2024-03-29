"use client";
// Imports -----
import React from "react";
import Image from "next/image";

// Mui Imports -----
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RadioGroupRating from "../ui/footerIcons";

export const Footer = () => {
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
          <h1 className="text-[16px]">Babysits</h1>
          <ul>
            <li className="text-[14px]">How it works</li>
            <li className="text-[14px]">Help</li>
            <li className="text-[14px]">Terms & Privacy</li>
            <li className="text-[14px]">Pricing</li>
            <li className="text-[14px]">Company details</li>
            <li className="text-[14px]">Babysits for Work</li>
            <li className="text-[14px]">Babysits Shop</li>
          </ul>
        </div>
        <div className="">
          <h1>What are you looking for?</h1>
          <ul>
            <li>Babysitters</li>
            <li> Childminders</li>
            <li> Special Needs Care</li>
            <li> Parents-help-parents</li>
            <li> Babysitting jobs</li>
            <li> Childminder jobs</li>
            <li> Childcare agencies</li>
          </ul>
        </div>
        <div className="">
          <h1>Discover</h1>
          <ul>
            <li>About us</li>
            <li>Tips & Articles</li>
            <li>Trust & Safety</li>
            <li>Community standards</li>
            <li>Partners</li>
            <li>Share your experience</li>
            <li>Babysits for Special Needs</li>
          </ul>
        </div>
      </div>
      <hr className="w-full border-white" />
      <div className="flex flex-col items-center font-[200] text-[16px] gap-4">
        <h1 className="text-[20px] font-[400] ">Follow us on</h1>
        <div>
          <RadioGroupRating />
        </div>
      </div>
    </div>
  );
};
