"use client";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { TbCurrencyTugrik } from "react-icons/tb";
import {
  FaAddressCard,
  FaCar,
  FaTransgender,
  FaUserGraduate,
  FaChild,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdVerified,
  MdOutlineSmokeFree,
  MdBabyChangingStation,
} from "react-icons/md";
import Image from "next/image";
import { Rating } from "@mui/material";
import { CheckedSchedule } from "./CheckedSchedule";
import { ProfileType } from "../../..";
type All = {
  result: ProfileType[] & any;
};

type ReviewType = {
  point: string;
  description: string;
  parent_id: string;
  babysitter_id: string;
  createdAt: string;
};

export const BabysitterProfile = (props: All) => {
  const { result } = props;

  const info = result[0].info_id[0];
  const review = result[0].review;
  console.log(review, "rev");

  // useEffect(() => {
  //   const token: string | null = localStorage.getItem("token");
  // });

  return (
    <div className="bg-gradient-to-b m-auto   h-fit md:flex-row md:gap-[130px]  flex flex-col-reverse md:py-32 justify-center py-10 px-2">
      <div className="mt-[30px] md:w-[60%] md:mt-0">
        <div className="flex border-b-[0.5px] flex-col gap-4 border-gray-600 pb-[40px]">
          <p className="text-[28px] text-gray-900 ">Миний тухай</p>
          <p className="overflow-wrap break-word">{result[0]?.about}</p>
          <div className="flex gap-6 pt-4">
            <div className="flex md:gap-8 gap-3">
              <div className="flex items-center gap-1 text-[18px] ">
                <MdBabyChangingStation className="text-[#008291]" size={24} />
                <div>{info?.year_of_experience} жил</div>
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <FaTransgender className="text-[#008291]" size={24} />
                {result[0]?.gender === true ? (
                  <div>Эмэгтэй</div>
                ) : (
                  <div>Эрэгтэй</div>
                )}
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <MdLocationOn className="text-[#008291]" size={24} />
                {result[0]?.address}
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <FaUserGraduate className="text-[#008291] ]" size={22} />
                {info?.education}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-600 py-10 md:flex  gap-10">
          <div>
            <h1 className="text-[23px] pb-5 ml-[20px]">Ур чадвар</h1>
            <div className=" rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
              {info?.skills?.map((el: string, index: number) => (
                <div
                  className="flex gap-2 bg-[#c9e8ec] shadow-md shadow-[#c5c5c5] w-fit rounded-xl px-4 py-2 text-gray-700 text-[16px]"
                  key={index}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[23px] pb-5 ml-[20px]">Зан чанар</h1>
            <div className=" rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
              {info?.character?.map((el: string, index: number) => (
                <div
                  className="flex gap-2 bg-[#c9e8ec] shadow-md shadow-[#c5c5c5] w-fit rounded-xl px-4 py-2 text-[16px] text-gray-700"
                  key={index}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-24">
          <CheckedSchedule />
        </div>
        <div className="flex flex-wrap gap-8 border-t-[0.5px] border-gray-600 py-10">
          {review.map((el: ReviewType, index: number) => (
            <div
              className="flex flex-col gap-4 bg-[#EDF7F8] w-[380px] rounded-2xl p-4"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex gap-2 ">
                  <div className="flex items-center justify-center">
                    <Image
                      className="rounded-full"
                      src="/Mother.avif"
                      height={50}
                      width={50}
                      alt="photo"
                    />
                  </div>
                  <h1 className="text-[20px]"></h1>
                </div>
                <Rating
                  // sx={{ color: "#59BEC9" }}
                  name="read-only"
                  readOnly
                />
              </div>
              <p>{el.description}</p>
              <div>{el.createdAt}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col ">
          <div>
            <h1 className="font-medium">Сэтгэгдэл үлдээх</h1>
            <div>
              <Rating
                sx={{ color: "#59BEC9" }}
                name="read-only"
                // value=""
                readOnly
              />
            </div>
          </div>
          <div className=" w-[300px] flex items-center py-2 border-2 rounded-2xl px-2 border-slate-300">
            <input
              className=" w-[450px] outline-none "
              placeholder="Comment"
              type="text "
            />
            <button className="bg-[#389BA7] text-white rounded-xl py-[2px] px-4">
              Илгээх
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center  gap-10">
        <div className="">
          <Image
            className="rounded-full"
            src="/Mother.avif"
            height={200}
            width={200}
            alt="profile"
          />
        </div>
        <div className="text-[18px]">
          <div className="flex items-center justify-center gap-4 ">
            <h1 className="text-[26px]">{result[0]?.name}</h1>
            {result[0]?.verification && (
              <MdVerified className="text-[#008291]" size={25} />
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              {info?.rating && (
                <Rating
                  // sx={{ color: "#59BEC9" }}
                  name="read-only"
                  defaultValue={info?.rating}
                  readOnly
                />
              )}
            </div>
          </div>
          <div className="flex gap-4 bg-[#edf7f8] items-center justify-center rounded-2xl py-2 px-4 mt-[20px]">
            {info?.smoker === false && (
              <MdOutlineSmokeFree className="h-6 w-6 text-[#008291]" />
            )}
            {info?.car === true && <FaCar className="h-6 w-6 text-[#008291]" />}
            {info?.driver_license === true && (
              <FaAddressCard className="h-6 w-6 text-[#008291]" />
            )}
            {info?.has_children === true && (
              <FaChild className="h-6 w-6 text-[#008291]" />
            )}
          </div>
        </div>

        <div className="bg-[#edf7f8] w-fill flex flex-col gap-3 rounded-2xl px-2 py-4 md:sticky md:top-24 ">
          <h1 className="text-[20px] flex gap-1 items-center justify-center">
            <TbCurrencyTugrik />
            {info?.wage}/цагт
          </h1>
          <button className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10">
            Холбогдох {}
          </button>
        </div>
      </div>
    </div>
  );
};
