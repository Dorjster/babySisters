"use client";
import React, { ChangeEvent, useState } from "react";
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

type stateType = {
  image: string;
  register: string;
  about: string;
  location: string;
  birthdate: string;
  languages: string[];
  education: string;
  character: string[];
  experience: string;
  additional: string[];
  skills: string[];
  wage: string;
  schedule: Schedule;
};

type Schedule = {
  [day: string]: string[];
};

export const EditBabysitProfile = () => {
  const [userdata, setUserdata] = useState<stateType>({
    image: "",
    register: "",
    about: "",
    location: "",
    birthdate: "",
    languages: [],
    education: "",
    character: [],
    experience: "",
    additional: [],
    skills: [],
    wage: "",
    schedule: {},
  });

  const click = (day: string, timeValue: string) => {
    const { schedule } = userdata;

    const existingTimes = schedule[day] || [];

    const updatedSchedule = {
      ...schedule,
      [day]: [...existingTimes, timeValue],
    };

    setUserdata((prevUserData) => ({
      ...prevUserData,
      schedule: updatedSchedule,
    }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  console.log(userdata);
  const handleLocationChange = (label: string) => {
    setUserdata({ ...userdata, location: label });
    console.log(label);
  };
  const handleEdu = (label: string) => {
    setUserdata({ ...userdata, education: label });
    console.log(label);
  };
  const handleExp = (label: string) => {
    setUserdata({ ...userdata, experience: label });
    console.log(label);
  };

  const handleLan = (value: string) => {
    setUserdata((prevUserData) => ({
      ...prevUserData,
      languages: [...prevUserData.languages, value],
    }));
  };
  const handleChar = (value: string) => {
    setUserdata((prevUserData) => ({
      ...prevUserData,
      character: [...prevUserData.character, value],
    }));
  };
  const handleAdd = (value: string) => {
    setUserdata((prevUserData) => ({
      ...prevUserData,
      additional: [...prevUserData.additional, value],
    }));
  };
  const handleSki = (value: string) => {
    setUserdata((prevUserData) => ({
      ...prevUserData,
      skills: [...prevUserData.skills, value],
    }));
  };
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
        <AboutMe
          handleChange={handleChange}
          hamndleLoc={handleLocationChange}
        />
        <Languages handleLan={handleLan} handleEdu={handleEdu} />
        <Character handleChar={handleChar} />
      </div>
      <hr />
      <div className="mt-[50px] flex flex-col gap-[45px] mb-[70px]">
        <Experience handleExp={handleExp} />
        <AddInformation handleAdd={handleAdd} />
        <Skill handleSki={handleSki} />
      </div>
      <hr />
      <div className="mt-[50px] flex flex-col gap-[45px] mb-[50px]">
        <Condition handleChange={handleChange} />
      </div>
      <ScheduleBaby handleClick={click} />
      <button className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]">
        Хадгалах
      </button>
    </Container>
  );
};
