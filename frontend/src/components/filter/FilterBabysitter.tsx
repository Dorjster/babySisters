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
import { useCallback, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AxiosInstance } from "@/utils/axiosInstance";

import { useFilterData } from "@/context/filterProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type stateType = {
  location: string;
  language: string[];
  education: string;
  character: string[];
  year_of_experience: number | number[];
  additional: string | string[];
  skills: string[];
  wage: string | string[];
  address: string;
  minWage: number;
  maxWage: number;
};

export const FilterBabysitter = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const { filterData, setFilterData } = useFilterData();
  // const [filterdata, setFilterdata] = useState<stateType>({
  //   location: "Улаанбаатар",

  //   language: [],
  //   education: "",
  //   character: [],
  //   year_of_experience: 2,
  //   additional: [],
  //   skills: [],
  //   wage: [],
  //   rating: 2,
  //   minWage: 0,
  //   maxWage: 0,
  // });

  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number);
    setFilterData({ ...filterData, year_of_experience: value });
  };

  const [sliderRatingValue, setSliderRatingValue] = useState<number>(0);

  const handleSliderRatingChange = (value: number | number[]) => {
    setSliderRatingValue(value as number);
    // setFilterData({ ...filterData, rating: value });
  };

  const handleWageChange = useCallback(
    (min: number | null, max: number | null) => {
      setFilterData((prevFilterData) => ({
        ...prevFilterData,
        minWage: min ?? NaN,
        maxWage: max ?? NaN,
      }));
    },
    [setFilterData]
  );

  const handleLocationChange = (label: string) => {
    setFilterData({ ...filterData, address: label });
  };

  const handleSki = (value: string) => {
    setFilterData((prevUserData) => {
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
    setFilterData((prevUserData) => {
      const isLanExist = prevUserData.language.includes(value);
      let updatedLan;

      if (isLanExist) {
        updatedLan = prevUserData.language.filter((lan) => lan !== value);
      } else {
        updatedLan = [...prevUserData.language, value];
      }

      return {
        ...prevUserData,
        language: updatedLan,
      };
    });
  };

  const handleChar = (value: string) => {
    setFilterData((prevUserData) => {
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
    setFilterData({ ...filterData, education: label });
    console.log(label);
  };
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleInfoChange = (updatedData: {
    selectedItems: string[];
    additionalData: any;
  }) => {
    setSelectedItems(updatedData.selectedItems);

    const selectedIds = updatedData.selectedItems;

    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      additional: selectedIds,
    }));
  };

  const clearFilters = () => {
    setFilterData({
      language: [],
      education: "",
      character: [],
      year_of_experience: 0,
      additional: [],
      skills: [],
      wage: "",
      address: "",
      minWage: 0,
      maxWage: 0,
      verification: false,
      gender: "",
    });
    notify();
  };
  const notify = () => {
    toast("Reset completed!", {
      position: "top-right",
      autoClose: 2000,
      // hideProgressBar: true,
      closeButton: false,
      className: "mt-[80px] ",
    });
  };
  return (
    <div className="w-[400px] h-[900px] dark:bg-[#2b313a] bg-slate-100 p-10 gap-5 rounded-xl md:grid hidden pr-20 overflow-hidden hover:overflow-y-scroll  ">
      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Цалин ₮
        </p>
        <Wage />
      </div>
      {/* <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Үнэлгээ
        </p>
        <div className="flex gap-2 items-center">
          <span>{sliderRatingValue}-аас 5</span>
          <FaStar />
        </div>
        <RatingSlider onChange={handleSliderRatingChange} />
      </div> */}

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Байршил
        </p>
        <LocationSelect handleLoc={handleLocationChange} />
      </div>

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Хүйс
        </p>
        <Gender />
      </div>

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Эзэмшсэн хэл
        </p>
        <Languages handleLan={handleLan} />
      </div>

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Туршлага
        </p>
        <p>{sliderValue}-аас 10+ жил</p>
        <DiscreteSliderSteps onChange={handleSliderChange} />
      </div>

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Зан ааш
        </p>
        <Characters handleChar={handleChar} />
      </div>

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Боловсролын зэрэг
        </p>
        <Education handleEdu={handleEdu} />
      </div>

      <Separator />

      <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Ур чадвар
        </p>
        <Skills handleSki={handleSki} />
      </div>

      <Separator />

      <div className="grid gap-3 py-2 float-left">
        <p className="text-m font-medium mb-[-40px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Нэмэлт мэдээлэл
        </p>
        <Info selectedItems={selectedItems} onChange={handleInfoChange}/>
      </div>
      <button
        onClick={clearFilters}
        className="bg-[#389BA7] cursor-pointer text-white rounded-[20px] py-2 sticky bottom-1"
      >
        Шинэчлэх
      </button>
      <ToastContainer className="toast" />
    </div>
  );
};
