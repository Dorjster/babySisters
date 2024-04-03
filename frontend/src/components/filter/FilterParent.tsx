"use client";

import { Separator, Checkbox } from "@/components/ui";
import { LocationSelect } from "./Location";
import { Wage } from "./Wage";
import { useState } from "react";
import { MdVerified } from "react-icons/md";


export const FilterParent = () => {
    const [sliderValue, setSliderValue] = useState<number>(2);

    const handleSliderChange = (value: number | number[]) => {
        setSliderValue(value as number);
    };

    const [sliderRatingValue, setSliderRatingValue] = useState<number>(2);

    const handleSliderRatingChange = (value: number | number[]) => {
        setSliderRatingValue(value as number);
    };

    return (
        <div className="w-[300px]  bg-[#f5f5f5] p-10 grid gap-5 rounded-xl h-fit sticky top-[20%]">
            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Цалин
                </p>
                <Wage />
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Байршил
                </p>
                <LocationSelect />
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Нэмэлт
                </p>
                <div className="flex gap-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox/>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Баталгаажсан</p>
                        <MdVerified/>
                    </div>
                </div>
            </div>
            <button className="bg-[#c9e8ec] cursor-pointer rounded-[20px] py-2 sticky bottom-3">
                Button{" "}
            </button>
        </div>
    );
};
