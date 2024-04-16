import React from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useData } from "@/context/userProvider";

export const General = () => {
  const { loggedInUserData } = useData();
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between  min-w-[300px] md:w-[500px] p- ">
        <div>
          <p className="text-gray-400 text-[16px] dark:text-white">Таны нэр</p>
          <p className="text-[20px] text-gray-700 dark:text-white">{loggedInUserData.name}</p>
        </div>
        <ModeEditOutlineOutlinedIcon className="text-[#389BA7]" />
      </div>
      <hr />
      <div className="flex items-center justify-between md:w-[500px]  ">
        <div>
          <p className="text-gray-400 text-[16px] dark:text-white">Утасны дугаар</p>
          <p className="text-[20px] text-gray-700 dark:text-white">{loggedInUserData.phone}</p>
        </div>
        <ModeEditOutlineOutlinedIcon className="text-[#389BA7]" />
      </div>
      <hr />
      <div className="flex items-center justify-between md:w-[500px]  ">
        <div>
          <p className="text-gray-400 text-[16px dark:text-white]">Имэйл хаяг</p>
          <p className="text-[20px] text-gray-700 dark:text-white">{loggedInUserData.email}</p>
        </div>
        <ModeEditOutlineOutlinedIcon className="text-[#389BA7]" />
      </div>
    </div>
  );
};
