"use client";

import React, { useState, useEffect } from "react";
import { Rating, Box } from "@mui/material";
import Image from "next/image";
import { Skeleton } from "../../../ui";
import {
  MdLocationOn,
  MdVerified,
  MdOutlineSmokeFree,
  MdBabyChangingStation,
} from "react-icons/md";
import { TbCurrencyTugrik } from "react-icons/tb";
import { FaCar, FaAddressCard, FaBaby } from "react-icons/fa";
import { ProfileType } from "../../../../..";
import Tooltip from "@mui/material/Tooltip";
type CardProps = {
  data: ProfileType;
  rating: number | undefined;
  about: string;
  wage: number | undefined;
  driver: boolean | undefined;
  car: boolean | undefined;
  // smoker: boolean | undefined;
  exp: number | undefined;
  language: string[] | undefined;
  has_children?: boolean | undefined;
};

export const Card: React.FC<CardProps> = ({
  data,
  rating,
  about,
  wage,
  driver,
  car,
  // smoker,
  exp,
  language,
  has_children,
}) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const letter = data.name.charAt(0);

  const SkeletonLoader = () => (
    <Skeleton className="md:w-[450px] dark:bg-[#4D565E]  w-[330px] md:h-[220px] h-[400px] md:flex-row flex flex-col rounded-2xl overflow-hidden shadow-xl bg-[#F6F9FA] mb-[40px]  "></Skeleton>
  );

  return (
    <div className="">
      {showSkeleton ? (
        <SkeletonLoader />
      ) : (
        <div className=" md:w-[450px] dark:bg-[#2b313a] h-[400px] md:flex-row md:h-[220px] md:px-0 px-16 md:pb-0 flex flex-col items-center  rounded-2xl overflow-hidden shadow-xl bg-[#F6F9FA] mb-[40px] ">
          <div className=" w-[200px] h-[220px] flex flex-col justify-between items-center">
            {data?.image ? (
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={data.image}
                  className="w-[170px] h-[170px] mt-[25px] rounded-xl self-center justify-center items-center"
                  alt=""
                  width={230}
                  height={220}
                />
              </div>
            ) : (
              <div className="w-[170px] h-[170px] mt-[25px] rounded-xl bg-gray-300 text-white text-[60px] flex self-center justify-center items-center">
                {letter}
              </div>
            )}
          </div>

          <div className="w-[150px] h-[150px] ml-[5px] md:-mt-[24px] ">
            <div className="flex gap-5">
              <div className="text-lg font-semibold text-[#31393F] dark:text-white w-[150px] gap-2 flex flex-wrap">
                {data.name}{" "}
                {data.verification && (
                  <MdVerified className="h-6 w-6 text-[#008291]" />
                )}
              </div>
            </div>

            <Box
              sx={{
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <div className="flex  gap-2">
                <Tooltip title="Байршил" arrow>
                  <div className="flex items-center">
                    {" "}
                    <MdLocationOn className="self-center text-[#008291] text-[20px] " />
                    <p className="ml-[4px]">{data.address}</p>
                  </div>
                </Tooltip>
              </div>
              <div className="flex  gap-2">
                <Tooltip title="Цалин" arrow>
                  <div className="flex items-center">
                    <TbCurrencyTugrik className="self-center text-[#008291] text-[20px]" />
                    <p className="ml-[4px]">{wage}/цагт</p>
                  </div>
                </Tooltip>
              </div>
              <div className="flex gap-2 ml-[2px]">
                <Tooltip title="Туршлага" arrow>
                  <div className="flex items-center">
                    <MdBabyChangingStation className="self-center text-[#008291] text-[20px] " />
                    <p className="ml-[4px]">{exp} жил</p>
                  </div>
                </Tooltip>
              </div>
            </Box>

            <div className="flex gap-4">
              {car === true && (
                <Tooltip title="Машинтай">
                  <div>
                    <FaCar className="h-6 w-6 text-[#008291]" />
                  </div>
                </Tooltip>
              )}
              {driver === true && (
                <Tooltip title="Жолооны үнэмлэхтэй" arrow>
                  <div>
                    <FaAddressCard className="h-6 w-6 text-[#008291]" />
                  </div>
                </Tooltip>
              )}
              {has_children === true && (
                <Tooltip title="Хүүхэдтэй">
                  <div>
                    <FaBaby className="h-6 w-6 text-[#008291]" />
                  </div>
                </Tooltip>
              )}
            </div>

            <p
              style={{
                width: "fill",
                paddingTop: "8px",
                textWrap: "wrap",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {about}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
