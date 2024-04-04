import React, { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locations = [
  { label: "Улаанбаатар" },
  { label: "Архангай" },
  { label: "Баян-Өлгий" },
  { label: "Баянхонгор" },
  { label: "Булган" },
  { label: "Говь-Алтай" },
  { label: "Говьсүмбэр" },
  { label: "Дархан-Уул" },
  { label: "Дорноговь" },
  { label: "Дорнод" },
  { label: "Дундговь" },
  { label: "Завхан" },
  { label: "Орхон" },
  { label: "Өвөрхангай" },
  { label: "Өмнөговь" },
  { label: "Сүхбаатар" },
  { label: "Сэлэнгэ" },
  { label: "Төв" },
  { label: "Увс" },
  { label: "Ховд" },
  { label: "Хөвсгөл" },
];

type About = {
  hamndleLoc: (label: string) => void;

  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
export const AboutMe = (props: About) => {
  const { hamndleLoc, handleChange } = props;
  return (
    <div className="flex flex-col gap-4 mt-[45px]">
      <h3 className="text-2xl font-medium text-gray-700">Миний тухай</h3>
      <div className="flex flex-col gap-[45px] ">
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">
            Регистрийн дугаар
          </p>
          <input
            name="register"
            onChange={handleChange}
            className="w-[100%] border-[1px] h-[40px] p-2  rounded-2xl text-gray-800 border-zinc-200"
            type="text"
            placeholder="УУ:12345678"
          />
          <p className="text-gray-300">
            Регистрийн дугаарыг хийснээр таны хаяг баталгаажих болно
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">
            Өөрийнхөө тухай товч мэдээллийг бичнэ үү
          </p>
          <textarea
            name="about"
            onChange={handleChange}
            className="w-[100%] h-[130px] rounded-2xl border-zinc-200 border-[1px] p-3 "
          />
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">Хаяг</p>
          <Select onValueChange={hamndleLoc}>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 ">
              <SelectValue
                placeholder="Улаанбаатар"
                defaultValue="Улаанбаатар"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {locations.map((el, index) => (
                  <SelectItem key={index} value={el.label}>
                    {el.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">
            Төрсөн өдөр
          </p>
          <Input
            name="birthdate"
            onChange={handleChange}
            className="w-[100%] rounded-2xl text-gray-500 text-lg border-zinc-200 "
            type="date"
          />
        </div>
      </div>
    </div>
  );
};
