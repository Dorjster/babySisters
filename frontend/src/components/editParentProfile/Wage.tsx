import React, { ChangeEvent } from "react";
import { Input } from "@mui/base";

type All = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
export const Wage = (props: All) => {
  const { handleChange } = props;
  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 mb-[45px] dark:text-white">
        Таны нөхцөл
      </h3>
      <div className="">
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
          Хүүхэд асрагчийн цагийн үнэлгээ
        </p>
        <div className="w-[100%] flex rounded-2xl border-[1px] border-zinc-200 h-[40px] ">
          <div className="w-[5%] bg-gray-100 rounded-tl-2xl flex items-center justify-center rounded-bl-2xl text-gray-600">
            ₮
          </div>
          <input
            name="wage"
            type="number"
            onChange={handleChange}
            className="w-[94%] h-[100%] p-2 dark:bg-white dark:text-black "
          />
          <div className="w-[10%] text-gray-600 bg-gray-100 rounded-tr-2xl rounded-br-2xl flex items-center justify-center">
            /цаг
          </div>
        </div>
        <p className="text-gray-300 pt-2">
          Бусад эцэг эхчүүдийн санал болгож буй үнэлгээ: 5,000₮ - 30,000₮
        </p>
      </div>
    </div>
  );
};
