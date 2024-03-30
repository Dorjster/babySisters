"use client"
import { Separator } from "@/components/ui";
import DiscreteSliderSteps from "./SliderExperience";
import { LocationSelect } from "./Location";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import { Characters } from "./Characters";
import { Gender } from "./Gender";
import { Education } from "./Education";
import { Info } from "./Info";
import RatingSlider from "./Rating";
import { useState } from "react";
import { FaStar } from "react-icons/fa";






export const Filter = () => {

    
    const [sliderValue, setSliderValue] = useState<number>(2);
 
    const handleSliderChange = (value: number | number[]) => {
      setSliderValue(value as number);
    };
    
    const [sliderRatingValue, setSliderRatingValue] = useState<number>(2);
 
    const handleSliderRatingChange = (value: number | number[]) => {
      setSliderRatingValue(value as number);
    };
    

    return (
        <div className="w-[300px] bg-[#f5f5f5] rounded-l p-10 grid gap-5">
            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Үнэлгээ</p>
                <div className="flex gap-2 items-center">
                    <span>{sliderRatingValue}-аас 5</span>
                    <FaStar/>
                </div>
                <RatingSlider onChange={handleSliderRatingChange}/>
            </div>

            <Separator/>

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Байршил</p>
                <LocationSelect />
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Хүйс</p>
                <Gender/>  
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Эзэмшсэн хэл</p>
                <Languages/>
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Туршлага</p>
                <p>{sliderValue}-аас 10+ жил</p>
                < DiscreteSliderSteps onChange={handleSliderChange}/>
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Зан ааш</p>
                <Characters/>
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Боловсролын зэрэг</p>
                <Education/>
            </div>

            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ур чадвар</p>
                <Skills/>
            </div>


            <Separator />

            <div className="grid gap-3">
                <p className="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Нэмэлт мэдээлэл</p>
                <Info/>
            </div>
            <button className="bg-[#c9e8ec] cursor-pointer rounded-[20px] py-2 sticky bottom-3">Button </button>



        </div>
    )
}