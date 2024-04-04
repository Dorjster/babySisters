"use client";

import React, { useState, useEffect } from "react";
import { Rating, Box } from "@mui/material";
import Image from "next/image";
import { Skeleton } from "../../../ui";
import { MdLocationOn, MdVerified, MdOutlineSmokeFree, MdBabyChangingStation } from "react-icons/md";
import { TbCurrencyTugrik } from "react-icons/tb";
import { FaCar, FaAddressCard, FaChild, FaBirthdayCake } from "react-icons/fa";



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
    <Skeleton className="w-[450px] h-[220px] flex rounded-2xl overflow-hidden shadow-xl bg-[#F6F9FA] mb-[40px] mx-[50px]">

        {/* {data?.image ? (
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
        )} */}

      {/* <Skeleton className="w-[230px] h-full flex flex-col justify-between">
        <Skeleton className="w-[230px] h-[180px] rounded-e-xl bg-gray-300 animate-pulse" />

        <Box
          sx={{
            marginLeft: "30px",
            "& > legend": { mt: 2 },
          }}
        >
          <Rating sx={{ color: "#59BEC9" }} name="read-only" value={0} />
        </Box>
      </Skeleton> */}

      {/* <Skeleton className="w-[150px] h-[150px] ml-4 mt-[10px]">
        <Skeleton className="text-lg  font-semibold mb-5 text-[#31393F] animate-pulse " />
        <Skeleton className="w-full h-[120px] text-[#222222]  animate-pulse" />
      </Skeleton> */}
    </Skeleton>
  );

  return (
    <div className="">
      {showSkeleton ? (
        <SkeletonLoader />
      ) : (
        <div className="w-[450px] h-[220px] flex rounded-2xl overflow-hidden shadow-xl bg-[#F6F9FA] mb-[40px] mx-[50px]">
          <div className="w-[200px] h-[220px] flex flex-col justify-between items-center">
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

            <div className="text-lg font-semibold text-[#31393F] w-[150px] flex flex-wrap">
              {data.name}
            </div>


            <Box
              sx={{
                alignItems: "center",
                paddingBottom: "10px"
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

            <p style={{ width: '200px', paddingTop: "8px", textWrap: "wrap", overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>
              {data.job_description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
