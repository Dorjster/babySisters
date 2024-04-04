"use client";
import { useState } from "react";

export const Characters = () => {
  const characters = [
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

  const [characterStates, setCharacterStates] = useState(
    characters.map(() => false)
  );
  const handleClickCharacter = (index: number) => {
    const updatedCharacterStates = [...characterStates];
    updatedCharacterStates[index] = !updatedCharacterStates[index];
    setCharacterStates(updatedCharacterStates);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {characters.map((el, index) => (
        <button
          key={index}
          onClick={() => handleClickCharacter(index)}
          className={`py-1 px-2 text-sm rounded-[7px] border-[#389BA7] border-[1px] hover:bg-[#389BA7] hover:text-white ${
            characterStates[index] ? "bg-[#389BA7] text-white" : ""
          }`}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
