"use client";

import { Separator, Checkbox } from "@/components/ui";
import { LocationSelect } from "./Location";
import { Wage } from "./Wage";
import { useCallback, useState } from "react";
import { MdVerified } from "react-icons/md";

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
  minWage: number;
  maxWage: number;
};

export const FilterParent = () => {
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
    minWage: 0,
    maxWage: 0,
  });
  const [sliderValue, setSliderValue] = useState<number>(2);

  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number);
  };

  const [sliderRatingValue, setSliderRatingValue] = useState<number>(2);

  const handleSliderRatingChange = (value: number | number[]) => {
    setSliderRatingValue(value as number);
  };

  // const handleWageChange = useCallback();
  // (min: number | null, max: number | null) => {
  //   setFilterdata((prevFilterdata) => ({
  //     ...prevFilterdata,
  //     minWage: min ?? 0,
  //     maxWage: max ?? 0,
  //   }));
  // },
  //   [setFilterdata];

  const handleLocationChange = (label: string) => {
    // setFilterdata({ ...filterdata, location: label });
    console.log(label);
  };

  return (
    <div className="w-[300px] dark:bg-[#4D565E]  bg-slate-50 p-10 md:grid hidden gap-5 rounded-xl h-fit sticky top-[20%]">
      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Цалин
        </p>
        {/* <Wage onChange={handleWageChange} /> */}
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
          Нэмэлт
        </p>
        <div className="flex gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox className="rounded-[4px]" />
          </div>
          <div className="flex gap-2">
            <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Баталгаажсан
            </p>
            <MdVerified />
          </div>
        </div>
      </div>
      <button className="bg-[#389BA7] cursor-pointer text-white rounded-[20px] py-2 sticky bottom-3">
        Хайх{" "}
      </button>
    </div>
  );
};
