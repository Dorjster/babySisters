"use client";
import { Separator, Checkbox } from "@/components/ui";
import { LocationSelect } from "./Location";
import { Wage } from "./Wage";
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { MdVerified } from "react-icons/md";
// import KidsNumber from "./KidsNumber";
import { WageParent } from "./WageParent";
import { LocationSelectParent } from "./LocationParent";
import { useParentFilter } from "@/context/parentProvider";
import { clear } from "console";

export const FilterParent = () => {
  const [sliderValue, setSliderValue] = useState<number>(2);
  const { setParentFilter, parentFilter } = useParentFilter();
  const [verified, setVerified] = useState(false);
  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number);
  };

  const [sliderRatingValue, setSliderRatingValue] = useState<number>(2);

  const handleSliderRatingChange = (value: number | number[]) => {
    setSliderRatingValue(value as number);
  };

  const handleLocationChange = (label: string) => {
    setParentFilter({ ...parentFilter, address: label });
    console.log(label);
  };

  const clearFilters = () => {
    setParentFilter({
      address: "",
      minWage: 0,
      maxWage: 0,
      verification: false,
    });
  };

  return (
    <div className="w-[300px] dark:bg-[#2b313a]  bg-slate-100 p-10 md:grid hidden gap-5 rounded-xl h-fit md:-ml-20 ">
      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Цалин
        </p>
        <WageParent />
        {/* <Wage onChange={handleWageChange} /> */}
      </div>

      <Separator />

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Байршил
        </p>
        <LocationSelectParent handleLoc={handleLocationChange} />
      </div>

      <Separator />

      {/* <div className="grid gap-3 py-2">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Хүүхдийн тоо
        </p>
        <p>{sliderValue}-аас 4+ </p>
        <KidsNumber onChange={handleSliderChange} />
      </div> */}

      <div className="grid gap-3">
        <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Нэмэлт
        </p>
        <div className="flex gap-3">
          <div className="flex items-center space-x-2">
            {/* <Checkbox
              className="rounded-[4px]"
              checked={parentFilter.verification || false} // Set initial checked state based on parentFilter.verification
              onChange={handleVerificationChange}
            /> */}
            <Checkbox
              className="rounded-[4px]"
              onClick={() => {
                const isCheckboxChecked = !verified;
                setVerified(isCheckboxChecked);
                setParentFilter({
                  ...parentFilter,
                  verification: isCheckboxChecked,
                });
              }}
            />
          </div>
          <div className="flex gap-2">
            <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Баталгаажсан
            </p>
            <MdVerified color="#389BA7" />
          </div>
        </div>
      </div>
      <button
        onClick={clearFilters}
        className="bg-[#389BA7] cursor-pointer text-white rounded-[20px] py-2 sticky bottom-3"
      >
        Clear{" "}
      </button>
    </div>
  );
};
