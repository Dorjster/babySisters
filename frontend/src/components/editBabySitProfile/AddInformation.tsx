import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const informations = [
  "Жолооны үнэмлэхтэй",
  "Машинтай",
  "Хүүхэдтэй",
  "Тамхи татдаггүй",
];

export const AddInformation = () => {
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
        <p className="text-gray-600 text-base font-[500] mb-[15px]">
          Нэмэлт мэдээлэл
        </p>
        <div className="flex gap-3 ">
          {informations.map((el, index) => (
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
    </div>
  );
};
