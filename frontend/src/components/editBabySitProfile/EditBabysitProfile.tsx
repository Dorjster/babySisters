"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@mui/system";
import { AboutMe } from "./AboutMe";
import { Languages } from "./Languages";
import { Character } from "./ Character";
import { Experience } from "./Experience";
import { AddInformation } from "./AddInformation";
import { Skill } from "./Skill";
import { Condition } from "./Condition";
import { General } from "./General";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Schedule } from "../filter/Schedule";

export const EditBabysitProfile = () => {
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
        <General />
  
      <div className="w-[160px]  object-fit flex flex-col justify-center items-center gap-3 mb-[50px]">
        <Image
          src="/profile.png"
          alt=""
          className=" w-[100%] h-[160px] object-cover rounded-[15px]"
          width={160}
          height={160}
        />
        <p className="font-normal text-base text-gray-400">Profile photo</p>
      </div>

      <hr />
      <div className="flex flex-col gap-[45px] mb-[80px]">
        <AboutMe />
        <Languages />
        <Character />
      </div>
      <hr />
      <div className="mt-[50px] flex flex-col gap-[45px] mb-[70px]">
        <Experience />
        <AddInformation />
        <Skill />
      </div>
      <hr />
      <div className="mt-[50px] flex flex-col gap-[45px]">
        <Condition />
      </div>
      <Schedule/>
      <button className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]">
        Хадгалах
      </button>
      </div>
    </Container>
  );
};
