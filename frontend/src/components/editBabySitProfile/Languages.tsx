import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { stateType } from "./EditBabysitProfile";
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

type All = {
  handleLan: (value: string) => void;
  handleEdu: (value: string) => void;
  getData: stateType[] & any;
};

export const Languages = (props: All) => {
  const { handleLan, handleEdu, getData } = props;
  const [buttonStates, setButtonStates] = useState(languages.map(() => false));

  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
  };

  return (
    <div className="flex flex-col gap-[45px] ">
      <div>
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
          Таны эзэмшсэн хэл?
        </p>
        <div className="md:flex md:gap-3 flex flex-wrap gap-4 ">
          {languages.map((el, index) => {
            const isHeKnown = getData[0]?.info_id[0]?.language.includes(el);
            return (
              <div
                key={index}
                onClick={() => {
                  handleLan(el);
                  handleClickButton(index);
                }}
                className={`py-1 px-2 dark:bg-[#c9e8ec] text-sm rounded-xl flex gap-2 bg-[#F6F9FA] items-center  ${
                  buttonStates[index] || isHeKnown ? "bg-[#c9e8ec]" : ""
                }`}
              >
                <button className="text-gray-700 dark:text-black">{el}</button>
                {buttonStates[index] || isHeKnown ? (
                  <CloseIcon
                    className="w-[14px] h-[14px] cursor-pointer"
                    onClick={() => {
                      handleClickButton(index);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
          Таны боловсролын зэрэг?
        </p>
        <Select onValueChange={handleEdu}>
          <SelectTrigger className="w-[100%] border-zinc-200 dark:text-white rounded-2xl text-gray-500 ">
            <SelectValue placeholder="Боловсролын зэрэгээ сонгоно уу" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="dark:text-black">
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
