"use client";
import { useState } from "react";

type All = {
  handleLan: (value: string) => void;
};

export const Languages = ({ handleLan }: All) => {
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

  const [buttonStates, setButtonStates] = useState(languages.map(() => false));
  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);

    const selectedSkill = languages[index];
    handleLan(selectedSkill);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {languages.map((el, index) => (
        <button
          key={index}
          onClick={() => handleClickButton(index)}
          className={`py-1 px-2 text-sm rounded-[7px] border-[#389BA7] border-[1px] hover:bg-[#389BA7] hover:text-white ${
            buttonStates[index] ? "bg-[#389BA7] text-white" : ""
          }`}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
