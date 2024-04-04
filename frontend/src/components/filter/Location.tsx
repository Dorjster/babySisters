import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

export function LocationSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-[8px]">
        <SelectValue placeholder="Улаанбаатар" defaultValue="Улаанбаатар" />
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
