"use client";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { TbCurrencyTugrik } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  FaAddressCard,
  FaCar,
  FaTransgender,
  FaUserGraduate,
  FaChild,
} from "react-icons/fa";
import { GiStoneCrafting } from "react-icons/gi";
import { ScheduleBaby } from "../editBabySitProfile/ScheduleBaby";
import { LuShare } from "react-icons/lu";
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

type All = {
  result: ProfileType;
};

export const BabysitterProfile = (props: All) => {
  const { result } = props;

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
  });

  return (
    <div className="bg-gradient-to-b m-auto   h-fit flex justify-start py-32 px-[400px]">
      <div className="w-[60%]">
        <div className="flex border-b-[0.5px] flex-col gap-4 border-gray-600 pb-[40px]">
          <p className="text-[28px] text-gray-900 ">Миний тухай</p>
          <p className="overflow-wrap break-word">{result?.about}</p>
          <div className="flex gap-6 pt-4">
            <div className="flex gap-8">
              <div className="flex items-center gap-1 text-[18px] ">
                <MdBabyChangingStation className="text-[#008291]" size={24} />
                <div>{result?.info_id.year_of_experience} жил</div>
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <FaTransgender className="text-[#008291]" size={24} />
                {result?.gender === true ? (
                  <div>Эмэгтэй</div>
                ) : (
                  <div>Эрэгтэй</div>
                )}
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <MdLocationOn className="text-[#008291]" size={24} />
                {result?.address}
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <FaUserGraduate className="text-[#008291] ]" size={22} />
                {result?.info_id.education}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-600 py-10 flex gap-10">
          <div>
            <h1 className="text-[23px] pb-5 ml-[20px]">Ур чадвар</h1>
            <div className=" rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
              {result?.info_id.skills?.map((el, index) => (
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
              {result?.info_id.character?.map((el, index) => (
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
          <div className="flex flex-col gap-4 bg-[#EDF7F8] w-[380px] rounded-2xl p-4">
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
                <h1 className="text-[20px]">my name is</h1>
              </div>
              <Rating
                // sx={{ color: "#59BEC9" }}
                name="read-only"
                // value=""
                readOnly
              />
            </div>
            <p>comments:sdfsdfsdfsdfsdfsdf</p>
            <div>Feb,13,2023</div>
          </div>
          <div className="flex flex-col gap-4 bg-[#EDF7F8] w-[380px] rounded-2xl p-4">
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
                <h1 className="text-[20px]">my name is</h1>
              </div>
              <Rating
                // sx={{ color: "#59BEC9" }}
                name="read-only"
                // value=""
                readOnly
              />
            </div>
            <p>comments:sdfsdfsdfsdfsdfsdf</p>
            <div>Feb,13,2023</div>
          </div>
          <div className="flex flex-col gap-4 bg-[#EDF7F8] w-[380px] rounded-2xl p-4">
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
                <h1 className="text-[20px]">my name is</h1>
              </div>
              <Rating
                // sx={{ color: "#59BEC9" }}
                name="read-only"
                // value=""
                readOnly
              />
            </div>
            <p>comments:sdfsdfsdfsdfsdfsdf</p>
            <div>Feb,13,2023</div>
          </div>
          <div className="flex flex-col gap-4 bg-[#EDF7F8] w-[380px] rounded-2xl p-4">
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
                <h1 className="text-[20px]">my name is</h1>
              </div>
              <Rating
                // sx={{ color: "#59BEC9" }}
                name="read-only"
                // value=""
                readOnly
              />
            </div>
            <p>comments:sdfsdfsdfsdfsdfsdf</p>

            <div>Feb,13,2023</div>
          </div>
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
          <div className=" w-[530px] flex items-center py-2 border-2 rounded-2xl px-2 border-slate-300">
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
        <div className="text-[18px]">
          <div className="flex items-center justify-center gap-4 ">
            <h1 className="text-[26px]">{result?.name}</h1>
            {result?.verification && (
              <MdVerified className="text-[#008291]" size={25} />
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              {result?.info_id.rating && (
                <Rating
                  // sx={{ color: "#59BEC9" }}
                  name="read-only"
                  defaultValue={result.info_id.rating}
                  readOnly
                />
              )}
            </div>
          </div>
          <div className="flex gap-4 bg-[#edf7f8] items-center justify-center rounded-2xl py-2 px-4 mt-[20px]">
            {result?.info_id.smoker === false && (
              <MdOutlineSmokeFree className="h-6 w-6 text-[#008291]" />
            )}
            {result?.info_id.car === true && (
              <FaCar className="h-6 w-6 text-[#008291]" />
            )}
            {result?.info_id.driver_license === true && (
              <FaAddressCard className="h-6 w-6 text-[#008291]" />
            )}
            {result?.info_id.has_children === true && (
              <FaChild className="h-6 w-6 text-[#008291]" />
            )}
          </div>
        </div>

        <div className="bg-[#edf7f8] w-fill flex flex-col gap-3 rounded-2xl px-2 py-4 sticky top-24 ">
          <h1 className="text-[20px] flex gap-1 items-center justify-center">
            <TbCurrencyTugrik />
            {result?.info_id.wage}/цагт
          </h1>
          <button className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10">
            Холбогдох {}
          </button>
        </div>
      </div>
    </div>
  );
};
