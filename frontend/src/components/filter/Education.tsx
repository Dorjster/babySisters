"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

type All = {
  handleEdu: (value: string) => void;
};

export const Education = ({ handleEdu }: All) => {
  return (
    <Select onValueChange={handleEdu}>
      <SelectTrigger className="w-[180px] rounded-[7px]">
        <SelectValue placeholder="Бүрэн" defaultValue="Бүрэн" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Бүрэн">Бүрэн</SelectItem>
          <SelectItem value="Бүрэн дунд">Бүрэн дунд</SelectItem>
          <SelectItem value="Бакалавр">Бакалавр</SelectItem>
          <SelectItem value="Магистр">Магистр</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
