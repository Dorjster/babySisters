import React from "react";
import { Input } from "@mui/base";

export const Condition = () => {
  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 mb-[45px]">
        Таны нөхцөл
      </h3>
      <div className="">
        <p className="text-gray-600 text-base font-[500] mb-[15px]">
          Таны хүүхэд асрах цагийн үнэлгээ хэд байх вэ?
        </p>
        <div className="w-[100%] flex rounded-2xl border-[1px] border-zinc-200 h-[40px] ">
          <div className="w-[3%] bg-gray-100 rounded-tl-2xl flex items-center justify-center rounded-bl-2xl text-gray-600">
            ₮
          </div>
          <input className="w-[94%] h-[100%] p-2 " />
          <div className="w-[3%] text-gray-600 bg-gray-100 rounded-tr-2xl rounded-br-2xl flex items-center justify-center">
            /цаг
          </div>
        </div>
        <p className="text-gray-300">
          Бусад хүүхэд асрагч нарын үнэлгээ: 5,000₮ - 30,000₮
        </p>
      </div>
    </div>
  );
};
