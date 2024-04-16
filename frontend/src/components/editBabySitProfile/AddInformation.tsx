import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const informations = ["Жолооны үнэмлэхтэй", "Машинтай", "Хүүхэдтэй"];

type All = {
  handleAdd: (value: string) => void;
};

export const AddInformation = (props: All) => {
  const { handleAdd } = props;
  const [buttonStates, setButtonStates] = useState(
    informations.map(() => false)
  );
  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
  };
  return (
    <div>
      {" "}
      <div className="">
        <p className="text-gray-600 dark:text-white  text-base font-[500] mb-[15px]">
          Нэмэлт мэдээлэл
        </p>
        <div className="md:flex md:gap-3 flex flex-wrap gap-4  ">
          {informations.map((el, index) => (
            <div
              key={index}
              onClick={() => {
                handleAdd(el);
                handleClickButton(index);
              }}
              className={`py-1 px-2 dark:bg-[#389BA7]  text-sm rounded-xl flex gap-2 bg-[#F6F9FA] items-center  ${
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
