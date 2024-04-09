"use client";
import { Separator } from "@/components/ui";
import DiscreteSliderSteps from "./SliderExperience";
import { LocationSelect } from "./Location";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import { Characters } from "./Characters";
import { Gender } from "./Gender";
import { Education } from "./Education";
import { Info } from "./Info";
import { Wage } from "./Wage";
import RatingSlider from "./Rating";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AxiosInstance } from "@/utils/axiosInstance";

export type stateType = {
  location: string;

  languages: string[];
  education: string;
  character: string[];
  experience: number | number[];
  additional: string[];
  skills: string[];
  wage: string | string[];
  rating: number | number[];
};

export const FilterBabysitter = () => {
  const [sliderValue, setSliderValue] = useState<number>(2);

  const [filterdata, setFilterdata] = useState<stateType>({
    location: "Улаанбаатар",

    languages: [],
    education: "",
    character: [],
    experience: 2,
    additional: [],
    skills: [],
    wage: [],
    rating: 2,
  });

  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number);
    setFilterdata({ ...filterdata, experience: value });
  };

  const [sliderRatingValue, setSliderRatingValue] = useState<number>(2);

  const handleSliderRatingChange = (value: number | number[]) => {
    setSliderRatingValue(value as number);
    setFilterdata({ ...filterdata, rating: value });
  };

  const handleWageChange = (value: string | string[]) => {
    let updatedWage: string | string[];

    if (typeof value === "string") {
      updatedWage = value;
    } else {
      const currentWageArray = Array.isArray(filterdata.wage)
        ? filterdata.wage
        : [filterdata.wage];

      updatedWage = [...currentWageArray, ...value];
    }

    setFilterdata((prevFilterdata) => ({
      ...prevFilterdata,
      wage: updatedWage,
    }));
  };

  console.log(filterdata);

  const handleLocationChange = (label: string) => {
    setFilterdata({ ...filterdata, location: label });
  };

  const handleSki = (value: string) => {
    setFilterdata((prevUserData) => {
      const isSkillExist = prevUserData.skills.includes(value);
      let updatedSkills;

      if (isSkillExist) {
        updatedSkills = prevUserData.skills.filter((skill) => skill !== value);
      } else {
        updatedSkills = [...prevUserData.skills, value];
      }

      return {
        ...prevUserData,
        skills: updatedSkills,
      };
    });
  };
  const handleLan = (value: string) => {
    setFilterdata((prevUserData) => {
      const isLanExist = prevUserData.languages.includes(value);
      let updatedLan;

      if (isLanExist) {
        updatedLan = prevUserData.languages.filter((lan) => lan !== value);
      } else {
        updatedLan = [...prevUserData.languages, value];
      }

      return {
        ...prevUserData,
        languages: updatedLan,
      };
    });
  };
  const handleChar = (value: string) => {
    setFilterdata((prevUserData) => {
      const isCharExist = prevUserData.character.includes(value);
      let updatedChar;

      if (isCharExist) {
        updatedChar = prevUserData.character.filter((char) => char !== value);
      } else {
        updatedChar = [...prevUserData.character, value];
      }

      return {
        ...prevUserData,
        character: updatedChar,
      };
    });
  };

  const handleEdu = (label: string) => {
    setFilterdata({ ...filterdata, education: label });
    console.log(label);
  };

  const handleInfoChange = (value: string[]) => {
    setFilterdata({ ...filterdata, additional: value });
  };

  return (
    <div className="w-[400px]  bg-slate-50 p-10 grid gap-5 rounded-xl overflow-hidden hover:overflow-y-scroll sticky">
      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Цалин
        </p>
        <Wage onChange={handleWageChange} />
      </div>
      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Үнэлгээ
        </p>
        <div className="flex gap-2 items-center">
          <span>{sliderRatingValue}-аас 5</span>
          <FaStar />
        </div>
        <RatingSlider onChange={handleSliderRatingChange} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Байршил
        </p>
        <LocationSelect handleLoc={handleLocationChange} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Хүйс
        </p>
        <Gender />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Эзэмшсэн хэл
        </p>
        <Languages handleLan={handleLan} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Туршлага
        </p>
        <p>{sliderValue}-аас 10+ жил</p>
        <DiscreteSliderSteps onChange={handleSliderChange} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Зан ааш
        </p>
        <Characters handleChar={handleChar} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Боловсролын зэрэг
        </p>
        <Education handleEdu={handleEdu} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Ур чадвар
        </p>
        <Skills handleSki={handleSki} />
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Нэмэлт мэдээлэл
        </p>
        <Info onChange={handleInfoChange} />
      </div>
      <button className="bg-[#389BA7] cursor-pointer text-white rounded-[20px] py-2 sticky bottom-1">
        Хайх{" "}
      </button>
    </div>
  );
};
