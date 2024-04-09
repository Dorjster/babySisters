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

  return (
    <div className="bg-gradient-to-b  h-fit flex justify-start py-32 px-[400px]">
      <div className="w-[60%]">
        <div className="flex border-b-[0.5px] flex-col gap-4 border-gray-600 pb-[40px]">
          <p className="text-[28px] text-gray-900 ">Ажлын санал</p>
          <p className="overflow-wrap break-word">{result?.job_description}</p>
          <div className="flex items-center gap-1 text-[18px]">
            <MdLocationOn className="text-[#008291]" size={24} />
            {result?.address}
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-600 py-10 flex gap-10">
          <div className="flex gap-6 pt-4 ">
            <div className="flex gap-8 flex-col">
              <div className="flex items-center gap-3 text-[20px] ">
                <FaChildren className="text-[#008291]" size={24} />
                {result.age_of_children.map((el: string, index: number) => (
                  <div key={index}>
                    <p className="text-[18px]">Хүүхдийн нас</p>
                    <p className="text-[16px] text-gray-600">{el}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-[20px]">
                <FaCakeCandles className="text-[#008291]" size={24} />
                {result.number_of_children.map((el: string, index: number) => (
                  <div key={index}>
                    <p className="text-[18px]">Хүүхдийн тоо</p>
                    <p className="text-[16px] text-gray-600">{el}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-24">
          <CheckedSchedule />
        </div>
        <div className="flex flex-wrap gap-8 border-t-[1px] border-black py-10"></div>
      </div>
      <div className="w-[40%] flex flex-col items-center  gap-10">
        <div className="">
          <Image
            className="rounded-full"
            src="/Mother.avif"
            height={200}
            width={200}
            alt="profile"
          />
        </div>

        <div className="bg-[#edf7f8] w-fill flex flex-col gap-3 rounded-2xl px-2 py-4 sticky top-24 ">
          <h1 className="text-[20px] flex gap-1 items-center justify-center">
            <TbCurrencyTugrik />
            {result?.wage}/цагт
          </h1>
          <button className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10">
            Холбогдох {}
          </button>
        </div>
      </div>
    </div>
  );
};
