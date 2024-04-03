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
import { ScheduleBaby } from "./ScheduleBaby";

export const EditBabysitProfile = () => {
  return (
    <Container
      sx={{
        marginTop: "60px",
        marginBottom: "100px",
      }}
    >
      <div
        className="flex gap-[300px] p-[80px]
      "
      >
        <div className="w-[180px]  object-fit flex flex-col items-center  gap-3 mb-[50px]">
          <Image
            src="/profile.png"
            alt=""
            className=" w-[100%] h-[180px] object-cover rounded-[15px]"
            width={180}
            height={180}
          />
          <div className="flex gap-2">
            <p className="font-normal text-base text-gray-400">Profile photo</p>
            <ModeEditOutlineOutlinedIcon className="w-[20px] h-[20px] text-[#389BA7]" />
          </div>
        </div>
        <General />
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
      <div className="mt-[50px] flex flex-col gap-[45px] mb-[50px]">
        <Condition />
      </div>
      <ScheduleBaby />
      <button className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]">
        Хадгалах
      </button>
    </Container>
  );
};
