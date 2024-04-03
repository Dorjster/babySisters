import React from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useData } from "@/context/userProvider";

export const GeneralParent = () => {
  const { loggedInUserData } = useData();
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between w-[500px]  ">
        <div>
          <p className="text-gray-400 text-[16px]">Таны нэр</p>
          <p className="text-[20px] text-gray-700">{loggedInUserData.name}</p>
        </div>
        <ModeEditOutlineOutlinedIcon className="text-[#389BA7]" />
      </div>
      <hr />
      <div className="flex items-center justify-between w-[500px]  ">
        <div>
          <p className="text-gray-400 text-[16px]">Утасны дугаар</p>
          <p className="text-[20px] text-gray-700">{loggedInUserData.phone}</p>
        </div>
        <ModeEditOutlineOutlinedIcon className="text-[#389BA7]" />
      </div>
      <hr />
      <div className="flex items-center justify-between w-[500px]  ">
        <div>
          <p className="text-gray-400 text-[16px]">Имэйл хаяг</p>
          <p className="text-[20px] text-gray-700">{loggedInUserData.email}</p>
        </div>
        <ModeEditOutlineOutlinedIcon className="text-[#389BA7]" />
      </div>
    </div>
  );
};
