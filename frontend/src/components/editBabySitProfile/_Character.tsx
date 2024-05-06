import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const behaviors = [
  "Хариуцлагатай",
  "Хөгжилтэй",
  "Спортлог",
  "Бүтээлч",
  "Нөхөрсөг",
  "Яриасаг",
  "Тайван",
  "Урам зоригтой",
  "Халамжтай",
  "Өрөвч",
  "Тэвчээртэй",
];

type All = {
  handleChar: (value: string) => void;
};
export const Character = (props: All) => {
  const { handleChar } = props;
  const [buttonStates, setButtonStates] = useState(behaviors.map(() => false));
  const [charac, setCharac] = useState([]);
  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
    // const characters = [];

    // setCharac(characters);
  };
  return (
    <div>
      {" "}
      <div className="">
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
          Өөрийгөө 3 үгээр тодорхойлно уу
        </p>
        <div className="md:flex md:gap-3 flex flex-wrap gap-4 ">
          {behaviors.map((el, index) => (
            <div
              key={index}
              onClick={() => {
                handleChar(el);
                handleClickButton(index);
              }}
              className={`py-1 px-3  dark:bg-[#389BA7]  text-sm rounded-xl flex gap-2 bg-[#F6F9FA] items-center  ${
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
