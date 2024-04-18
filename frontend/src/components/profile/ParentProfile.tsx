"use client";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { TbCurrencyTugrik } from "react-icons/tb";
import {
  MdLocationOn,
  MdVerified,
  MdOutlineSmokeFree,
  MdBabyChangingStation,
} from "react-icons/md";
import Image from "next/image";
import { Rating } from "@mui/material";
import babysitter from "@/app/babysitter/page";
import { CheckedSchedule } from "./CheckedSchedule";
import { ParentType } from "../../..";
import { FaChildren } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";

type All = {
  result: ParentType;
};

export const ParentProfile = (props: All) => {
  const { result } = props;
  const letter = result?.name;
  // console.log(result, "result asd");

  return (
    <div className="bg-gradient-to-b m-auto   h-fit md:flex-row md:gap-[130px] dark:bg-[#31393F] bg-[#F4FAFB] flex flex-col-reverse md:py-32 justify-center py-10 px-4">
      <div className="mt-[30px] md:w-[60%] md:mt-0">
        <div className="flex border-b-[0.5px] flex-col gap-4 border-gray-600 pb-[40px]">
          <p className="text-[28px] text-gray-900 dark:text-white">
            Ажлын санал
          </p>
          <p className="overflow-wrap break-word dark:text-white ">
            {result?.job_description}
          </p>
          <div className="flex items-center gap-1 text-[18px] dark:text-white ">
            <MdLocationOn className="text-[#008291]" size={24} />
            {result?.address}
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-600 py-10 flex gap-10">
          <div className="flex gap-6 pt-4 ">
            <div className="flex gap-8 flex-col">
              <div className="flex items-center gap-3 text-[20px]  ">
                <FaChildren className="text-[#008291]" size={24} />
                {result.age_of_children.map((el: string, index: number) => (
                  <div key={index}>
                    <p className="text-[18px]">Хүүхдийн нас</p>
                    <p className="text-[16px] text-gray-600 dark:text-white">
                      {el}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-[20px]">
                <FaCakeCandles className="text-[#008291]" size={24} />
                {result.number_of_children.map((el: string, index: number) => (
                  <div key={index}>
                    <p className="text-[18px]">Хүүхдийн тоо</p>
                    <p className="text-[16px] text-gray-600 dark:text-white">
                      {el}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-24">
          <CheckedSchedule />
        </div>
        <div className="flex flex-wrap gap-8 border-t-[1px] border-black dark:border-slate-300 py-10"></div>
      </div>
      <div className=" flex flex-col items-center h-fit md:p-8 rounded-2xl gap-4  bg-[#F6F9FA] shadow-xl dark:bg-[#4D565E]">
        <div className="">
          <Image
            className="w-[200px] h-[200px] rounded-full"
            src={result.image}
            alt=""
            width={200}
            height={200}
          />

          <div className=" text-slate-700  dark:text-white text-2xl font-medium flex self-center justify-center items-center">
            {letter}
          </div>
        </div>

        <div className="bg-[#DAEFF1] dark:bg-[#434C54] w-fill flex flex-col gap-3 rounded-2xl px-2 py-4 ">
          <h1 className="text-[20px] flex gap-1 items-center justify-center">
            <TbCurrencyTugrik />
            {result?.wage}/цагт
          </h1>
          {/* <button className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10">
            Холбогдох {}
          </button> */}
        </div>
      </div>
    </div>
  );
};
