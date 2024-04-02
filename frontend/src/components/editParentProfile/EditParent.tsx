"use client";
import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { GeneralParent } from "./GeneralParent";
import { AboutParent } from "./AboutParent";
import { AgeChildren } from "./AgeChildren";
import { Wage } from "./Wage";

export const EditParent = () => {
  return (
    <Container
      sx={{
        marginTop: "60px",
        marginBottom: "100px",
      }}
    >
      <div className="flex p-[50px] gap-[250px]">
        <div className="w-[200px]  object-fit flex flex-col justify-center items-center gap-3 mb-[50px]">
          <Image
            src="/profile.png"
            alt=""
            className=" w-[200px] h-[180px] object-cover rounded-[15px]"
            width={200}
            height={180}
          />
          <div className="flex gap-2">
            <p className="font-normal text-base text-gray-400">Profile photo</p>
            <ModeEditOutlineOutlinedIcon className="w-[20px] h-[20px] text-[#389BA7]" />
          </div>
        </div>
        <GeneralParent />
      </div>

      <hr />
      <div className="flex flex-col gap-[45px] mb-[80px]">
        <AboutParent />
        <AgeChildren />
      </div>
      <hr />

      <div className="mt-[50px] flex flex-col gap-[45px]">
        <Wage />
      </div>
      <button className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]">
        Хадгалах
      </button>
    </Container>
  );
};
