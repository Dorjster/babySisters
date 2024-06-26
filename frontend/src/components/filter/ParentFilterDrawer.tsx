"use client";

import { Separator, Checkbox } from "@/components/ui";
import { LocationSelect } from "./Location";
import { WageParent } from "./WageParent";
import { useState } from "react";
import { MdVerified } from "react-icons/md";

export const FilterParentDrawer = () => {
  const [sliderValue, setSliderValue] = useState<number>(2);

  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number);
  };

  const [sliderRatingValue, setSliderRatingValue] = useState<number>(2);

  const handleSliderRatingChange = (value: number | number[]) => {
    setSliderRatingValue(value as number);
  };

  const handleWageChange = (value: string | string[]) => {
    // let updatedWage: string | string[];

    // if (typeof value === "string") {
    //   updatedWage = value;
    // } else {
    //   const currentWageArray = Array.isArray(filterdata.wage)
    //     ? filterdata.wage
    //     : [filterdata.wage];

    //   updatedWage = [...currentWageArray, ...value];
    // }

    // setFilterdata((prevFilterdata) => ({
    //   ...prevFilterdata,
    //   wage: updatedWage,
    console.log(value);
  };

  const handleLocationChange = (label: string) => {
    // setFilterdata({ ...filterdata, location: label });
    console.log(label);
  };

  return (
    <div className=" flex items-center justify-center py-10 ">
      <div className="w-[300px] h-[400px] bg-slate-50 p-10 md:grid  gap-5 rounded-xl  sticky top-[20%] z-0">
        <div className="grid gap-3">
          <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Цалин asd
          </p>
          <WageParent />
        </div>

        <Separator />

        <div className="grid gap-3 z-20">
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
        <button className="bg-[#389BA7] cursor-pointer text-white rounded-[20px] w-[200px] py-2 mt-[20px] ">
          Хайх{" "}
        </button>
      </div>
    </div>
  );
};
