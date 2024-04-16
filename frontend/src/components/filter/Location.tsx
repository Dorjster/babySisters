import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

type All = {
  handleLoc: (label: string) => void;
};

export function LocationSelect(props: All) {
  const { handleLoc } = props;
  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-[8px]  ">
        <SelectValue placeholder="Улаанбаатар" defaultValue="Улаанбаатар" />
      </SelectTrigger>
      <SelectContent className="z-50">
        <SelectGroup className="dark:text-black">
          {locations.map((el, index) => (
            <SelectItem key={index} value={el.label}>
              {el.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

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
