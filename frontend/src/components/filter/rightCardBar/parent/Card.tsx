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
import { FaCar, FaAddressCard, FaChild, FaBirthdayCake } from "react-icons/fa";
import { ParentType } from "../../../../..";
import Tooltip from "@mui/material/Tooltip";

type CardProps = {
  data: ParentType;
};

export const Card: React.FC<CardProps> = ({ data }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const letter = data.name.charAt(0);

  const SkeletonLoader = () => (
    <Skeleton className="md:w-[450px] md:h-[220px] dark:bg-[#4D565E] w-[330px] h-[450px] md:flex-row flex flex-col  rounded-2xl overflow-hidden shadow-xl bg-[#F6F9FA] mb-[40px] "></Skeleton>
  );

  return (
    <div className="">
      {showSkeleton ? (
        <SkeletonLoader />
      ) : (
        <div className="md:w-[450px] md:h-[220px] dark:bg-[#2b313a] md:pb-0 pb-[40px]  md:flex-row flex flex-col rounded-2xl overflow-hidden shadow-xl  bg-[#F6F9FA] mb-[40px]  ">
          <div className="w-[200px] h-[220px] flex flex-col justify-between items-center ">
            {data?.image ? (
              <Image
                src={data.image}
                className="w-[170px] h-[170px] mt-[25px] rounded-xl self-center justify-center items-center"
                alt=""
                width={170}
                height={170}
              />
            ) : (
              <div className="w-[170px] h-[170px] mt-[25px] rounded-xl bg-gray-300 text-white text-[60px] flex self-center justify-center items-center">
                {letter}
              </div>
            )}
          </div>

          <div className="w-[150px] h-[150px] ml-[0px] mt-[30px]">
            <div className="text-lg font-semibold text-[#31393F] dark:text-white w-[150px] gap-2 flex flex-wrap">
              {data.name}{" "}
              {data.verification && (
                <MdVerified className="h-6 w-6 text-[#008291]" />
              )}
            </div>

            <Box
              sx={{
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div className="flex gap-2">
                <Tooltip title="Ажлын газар">
                  <div className="flex items-center gap-[5px]">
                    <MdLocationOn className="self-center text-[#008291]" />
                    <p className="">{data.address}</p>
                  </div>
                </Tooltip>
              </div>
              <div className="flex gap-2">
                <Tooltip title="Цалин">
                  <div className="flex items-center gap-[5px]">
                    <TbCurrencyTugrik className="self-center text-[#008291] " />
                    <p className="">{data.wage}/цагт</p>
                  </div>
                </Tooltip>
              </div>
              <div className="flex gap-2">
                <Tooltip title="Хүүхдийн тоо">
                  <div className="flex items-center gap-[5px]">
                    <FaChild className="self-center text-[#008291] " />
                    <p className="">{data.number_of_children}</p>
                  </div>
                </Tooltip>
              </div>
              {/* <div className="flex gap-2">
                <FaBirthdayCake className="self-center text-[#008291]" />
                <p className="">{data.age_of_children} настай</p>
              </div> */}
            </Box>

            <p
              style={{
                width: "200px",
                paddingTop: "8px",
                textWrap: "wrap",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {data.job_description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
