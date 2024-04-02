import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

const languages = [
  "Англи",
  "Орос",
  "Хятад",
  "Солонгос",
  "Япон",
  "Герман",
  "Испани",
  "Франц",
];

export const Languages = () => {
  const [buttonStates, setButtonStates] = useState(languages.map(() => false));
  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
  };

  return (
    <div className="flex flex-col gap-[45px] ">
      <div>
        <p className="text-gray-600 text-base font-[500] mb-[15px]">
          Таны эзэмшсэн хэл?
        </p>
        <div className="flex gap-3 ">
          {languages.map((el, index) => (
            <div
              key={index}
              onClick={() => handleClickButton(index)}
              className={`py-1 px-2 text-sm rounded-xl flex gap-2 bg-[#F6F9FA] items-center  ${
                buttonStates[index] ? "bg-[#c9e8ec]  " : ""
              }`}
            >
              <button className="text-gray-700">{el}</button>
              {buttonStates[index] ? (
                <CloseIcon
                  className="w-[14px] h-[14px] cursor-pointer"
                  onClick={() => handleClickButton(index)}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-base font-[500] mb-[15px]">
          Таны боловсролын зэрэг?
        </p>
        <Select>
          <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 ">
            <SelectValue placeholder="Боловсролын зэрэгээ сонгоно уу" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Бүрэн">Бүрэн</SelectItem>
              <SelectItem value="Бүрэн дунд">Бүрэн дунд</SelectItem>
              <SelectItem value="Бакалавр">Бакалавр</SelectItem>
              <SelectItem value="Магистр">Магистр</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};