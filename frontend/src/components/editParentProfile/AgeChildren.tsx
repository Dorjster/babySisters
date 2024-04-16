import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ages = [
  "0 - 1 нас",
  "1 - 3 нас",
  "3 - 7 нас",
  "7 - 11 нас",
  "11 - 15 нас",
  "15 - 17 нас",
];
type All = {
  handleCount: (value: string) => void;
};

export const AgeChildren = (props: All) => {
  const { handleCount } = props;
  const [buttonStates, setButtonStates] = useState(ages.map(() => false));
  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
  };

  return (
    <div>
      <div className="">
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
          Хүүхдүүдийн нас
        </p>
        <div className="md:flex md:gap-3 flex flex-wrap gap-4 ">
          {ages.map((el, index) => (
            <div
              key={index}
              onClick={() => {
                handleCount(el);
                handleClickButton(index);
              }}
              className={`py-1 px-2 text-sm rounded-xl dark:bg-[#389BA7] flex gap-2 bg-[#F6F9FA] items-center  ${
                buttonStates[index] ? "bg-[#c9e8ec]  " : ""
              }`}
            >
              <button className="text-gray-700 dark:text-white">{el}</button>
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
    </div>
  );
};
