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

export const EditBabysitProfile = () => {
  return (
    <Container
      sx={{
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
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
      <div className="mt-[50px] flex flex-col gap-[45px]">
        <Experience />
        <AddInformation />
        <Skill />
      </div>
    </Container>
  );
};
