"use client";

import React, { useState, useEffect } from "react";
import { Rating, Box } from "@mui/material";
import Image from "next/image";
import { Skeleton } from "../../../ui";
import { MdLocationOn } from "react-icons/md";

type CardProps = {
  data: ProfileType;
};

export const Card: React.FC<CardProps> = ({ data }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const [value, setValue] = React.useState<number | null>(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const letter = data.name.charAt(0);

  const SkeletonLoader = () => (
    <Skeleton className="w-[400px] h-[220px] flex rounded-2xl overflow-hidden shadow-lg mb-[40px]">
      <Skeleton className="w-[230px] h-full flex flex-col justify-between">
        <Skeleton className="w-[230px] h-[180px] rounded-e-xl bg-gray-300 animate-pulse" />

        <Box
          sx={{
            marginLeft: "30px",
            "& > legend": { mt: 2 },
          }}
        >
          <Rating sx={{ color: "#59BEC9" }} name="read-only" value={0} />
        </Box>
      </Skeleton>

      <Skeleton className="w-[150px] h-[150px] ml-4 mt-[10px]">
        <Skeleton className="text-lg  font-semibold mb-5 text-[#31393F] animate-pulse " />
        <Skeleton className="w-full h-[120px] text-[#222222]  animate-pulse" />
      </Skeleton>
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

          <div className="w-[150px] h-[150px] ml-[5px] mt-[25px]">
            <div className="flex gap-5">
              <div className="text-lg font-semibold mb-5 text-[#31393F]">
                {data.name}
              </div>
              <Rating
                sx={{ color: "#59BEC9" }}
                name="read-only"
                value={value}
                readOnly
              />
            </div>
            <div className="w-fit h-fit text-[#222222] ">{data.about}</div>
            <Box
              sx={{
                marginLeft: "30px",
                "& > legend": { mt: 2 },
              }}
            >
              <div className="flex gap-2">
                <MdLocationOn/>
                <p>{}</p>

              </div>

              
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};
