import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const skill = [
  "Зураг зурах",
  "Гар урлал",
  "Хөгжим тоглох",
  "Хоол хийх",
  "Спорт",
  "Бүжиг",
];

type All = {
  handleSki: (value: string) => void;
};

export const Skill = (props: All) => {
  const { handleSki } = props;
  const [buttonStates, setButtonStates] = useState(skill.map(() => false));
  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
  };
  return (
    <div>
      {" "}
      <div className="">
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
          Таны чадварууд
        </p>
        <div className="md:flex md:gap-3  flex flex-wrap gap-4 ">
          {skill.map((el, index) => (
            <div
              key={index}
              onClick={() => {
                handleSki(el);
                handleClickButton(index);
              }}
              className={`py-1 px-2 text-sm rounded-xl  dark:bg-[#389BA7] flex gap-2 bg-[#F6F9FA] items-center  ${
                buttonStates[index] ? "bg-[#c9e8ec]  " : ""
              }`}
            >
              <button className="text-gray-700 dark:text-white">{el}</button>
              {buttonStates[index] ? (
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
          ))}
        </div>
      </div>
    </div>
  );
};
