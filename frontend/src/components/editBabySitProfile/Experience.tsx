import React, { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type All = {
  handleExp: (label: string) => void;
};
export const Experience = (props: All) => {
  const { handleExp } = props;
  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 dark:text-white">
        Таны туршлага болон ур чадварууд
      </h3>
      <p className="text-gray-600 text-base font-[500] mb-[15px] mt-[45px] dark:text-white ">
        Та хэдэн жилийн туршлагатай вэ?
      </p>
      <Select onValueChange={handleExp}>
        <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl  dark:text-white  text-gray-600 ">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="dark:text-black">
            <SelectItem value="<-1">1-ээс доош жил</SelectItem>
            <SelectItem value="1">1-ээс дээш жил</SelectItem>
            <SelectItem value="2">2-ээс дээш жил</SelectItem>
            <SelectItem value="3">3-ээс дээш жил</SelectItem>
            <SelectItem value="4">4-ээс дээш жил</SelectItem>
            <SelectItem value="5">5-ээс дээш жил</SelectItem>
            <SelectItem value="6">6-ээс дээш жил</SelectItem>
            <SelectItem value="7">7-ээс дээш жил</SelectItem>
            <SelectItem value="8">8-ээс дээш жил</SelectItem>
            <SelectItem value="9">9-ээс дээш жил</SelectItem>
            <SelectItem value="10">10-ээс дээш жил</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
