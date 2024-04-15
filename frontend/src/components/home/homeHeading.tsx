"use client";

import Image from "next/image";
import { HomeSvg } from "../Icons/HomeSvg";
import { useTheme } from "next-themes";

const HomeHeading = () => {
  const { theme } = useTheme();

  return (
    <div className="">
      <div className="w-screen flex justify-end items-start h-[200px] dark:bg-[#4D565E]  bg-[#c9e8ec] ">
        <Image
          className="z-10 hidden md:flex"
          src="/WOMANN.png"
          width={250}
          height={200}
          alt="Woman"
        />
        <div className="rounded-full w-[300px] ml-[200px] mt-4 md:hidden flex">
          <Image
            className="z-30 "
            src="/Market.png"
            width={200}
            height={200}
            alt="Woman"
          />
        </div>
      </div>

      <div className="bg-[#c9e8ec] dark:bg-[#4D565E] w-screen  relative  z-2   overflow-hidden bg-red">
        <div className="  inset-x-0 bg- w-full h-10" />

        <HomeSvg
          color={theme === "dark" ? "#BA5E7B" : "#FCCFDD"}
          bigColor={theme === "dark" ? "#31393F" : "white"}
        />

        <div className="bg-[#EDF7F8] dark:bg-[#456F76]  w-[400px] h-[400px]  rounded-full absolute  right-[400px] top-4 "></div>
        <div className="bg-[#EDF7F8] dark:bg-[#456F76]  w-[700px] h-[700px]  rounded-full absolute -right-[260px] top-0 "></div>
        <div className="w-[400px] h-[600px]  rounded-full absolute right-[310px] top-10 ">
          <Image src="/Readingpp.png" width={250} height={250} alt="reading" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeading;
