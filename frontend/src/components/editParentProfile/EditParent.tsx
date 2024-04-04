"use client";
import React, { ChangeEvent, useState } from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { GeneralParent } from "./GeneralParent";
import { AboutParent } from "./AboutParent";
import { AgeChildren } from "./AgeChildren";
import { Wage } from "./Wage";
import { Schedule } from "./Schedule";
type stateType = {
  image: string;
  register: string;
  about: string;
  location: string;
  child: string;
  childAge: string[];
  wage: string;
  schedule: Schedule;
};

type Schedule = {
  [day: string]: string[];
};

export const EditParent = () => {
  const [address, setAddress] = useState<string>(" ");
  const [child, setChild] = useState<string>("1");
  const [userdata, setUserdata] = useState<stateType>({
    image: "",
    register: "",
    about: "",
    location: "",
    child: "",
    childAge: [],
    wage: "",
    schedule: {},
  });

  // const click = (day: string, timeValue: string) => {
  //   const { schedule } = userdata;

  //   const updatedSchedule = { ...schedule, day: day, time: timeValue };

  //   setUserdata((prevUserData) => ({
  //     ...prevUserData,
  //     schedule: updatedSchedule,
  //   }));
  // };
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
  const handleSelect = (value: string) => {
    setUserdata({ ...userdata, child: value });
  };
  const handleCount = (value: string) => {
    setUserdata((prevUserData) => ({
      ...prevUserData,
      childAge: [...prevUserData.childAge, value],
    }));
  };
  return (
    <Container
      sx={{
        marginTop: "60px",
        marginBottom: "100px",
      }}
    >
      <div className="flex p-[50px] gap-[250px]">
        <div className="w-[180px]  object-fit flex flex-col justify-center items-center gap-3 mb-[50px]">
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
        <GeneralParent />
      </div>

      <hr />
      <div className="flex flex-col gap-[45px] mb-[80px]">
        <AboutParent
          hamndleLoc={handleLocationChange}
          handlechild={handleSelect}
          handleChange={handleChange}
        />
        <AgeChildren handleCount={handleCount} />
      </div>
      <hr />

      <div className="mt-[50px] flex flex-col mb-[50px] gap-[45px]">
        <Wage handleChange={handleChange} />
      </div>
      <Schedule handleClick={click} />

      <button className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]">
        Хадгалах
      </button>
    </Container>
  );
};
