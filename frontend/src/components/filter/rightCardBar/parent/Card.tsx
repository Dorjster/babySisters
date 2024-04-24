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
    <Skeleton className="md:w-[450px] md:h-[220px] dark:bg-[#4D565E] w-[330px] h-[450px] md:flex-row flex flex-col  rounded-2xl overflow-hidden shadow-xl bg-[#F6F9FA] mb-[40px] ">
     
    </Skeleton>
  );

  return (
    <div className="">
      {showSkeleton ? (
        <SkeletonLoader />
      ) : (
        <div className="md:w-[450px] md:h-[220px] dark:bg-[#2b313a] md:pb-0 pb-[40px]  md:flex-row flex flex-col rounded-2xl overflow-hidden shadow-xl px-10 bg-[#F6F9FA] mb-[40px] ">
          <div className="w-[220px] h-[220px] flex flex-col justify-between items-center">
            {data?.image ? (
              <Image
                src={data.image}
                className="w-[170px] h-[170px] mt-[25px] rounded-e-xl self-center justify-center items-center"
                alt=""
                width={230}
                height={220}
              />
            ) : (
              <div className="w-[170px] h-[170px] mt-[25px] rounded-xl bg-gray-300 text-white text-[60px] flex self-center justify-center items-center">
                {letter}
              </div>
            )}
          </div>

          <div className="w-[150px] h-[150px] ml-[5px] mt-[30px]">
            <div className="text-lg font-semibold text-[#31393F] dark:text-slate-200 w-[150px] flex flex-wrap">
              {data.name}
            </div>

            <Box
              sx={{
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div className="flex gap-2">
                <MdLocationOn className="self-center text-[#008291]" />
                <p className="">{data.address}</p>
              </div>
              <div className="flex gap-2">
                <TbCurrencyTugrik className="self-center text-[#008291] " />
                <p className="">{data.wage}/цагт</p>
              </div>
              <div className="flex gap-2">
                <FaChild className="self-center text-[#008291] " />
                <p className="">{data.number_of_children}</p>
              </div>
              <div className="flex gap-2">
                <FaBirthdayCake className="self-center text-[#008291]" />
                <p className="">{data.age_of_children} настай</p>
              </div>
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
