import { useState } from "react";

type All = {
  handleSki: (value: string) => void;
};

export const Skills = ({ handleSki }: All) => {
  const skills = [
    "Зураг зурах",
    "Гар урлал",
    "Хөгжим тоглох",
    "Хоол хийх",
    "Спорт",
    "Бүжиг",
  ];

  const [buttonStates, setButtonStates] = useState(skills.map(() => false));

  const handleClickButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);

    // Pass the selected skill value to the handleSki function
    const selectedSkill = skills[index];
    handleSki(selectedSkill);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {skills.map((el, index) => (
        <button
          key={index}
          onClick={() => handleClickButton(index)}
          className={`py-1 px-2 text-sm rounded-[7px] border-[#389BA7] border-[1px] hover:bg-[#389BA7] hover:text-white 
                ${buttonStates[index] ? "bg-[#389BA7] text-white" : ""}`}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
