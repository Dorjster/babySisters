import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import React, { useEffect, useState } from "react";
import { useFilterData } from "@/context/filterProvider";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

type SliderProps = React.ComponentProps<typeof Slider>;

export function Wage({ className, ...props }: SliderProps) {
  const { filterData, setFilterData } = useFilterData();
  const [value, setValue] = useState<number[]>([0, 100000]);

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[]);
    if (Array.isArray(newValue)) {
      setValue(newValue);
      setFilterData({
        ...filterData,
        minWage: newValue[0],
        maxWage: newValue[1],
      });
    }
  };

  return (
    <div className={cn("w-[100%] h-[100px]")}>
      <Slider
        value={value}
        onValueChange={handleChange}
        max={100000}
        min={0}
        step={500}
        className={cn("w-full h-[100px] mt-[-30px] mb-[-20px]")}
        {...props}
      />
      <div className="flex justify-between">
        <span className="bg-slate-200 w-[95px] text-sm text-black rounded-[4px] text-center pt-1">
          {value[0]}₮
        </span>
        <span>
          <HorizontalRuleIcon className="text-slate-500" />
        </span>
        <span className="bg-slate-200 w-[95px] text-sm text-black rounded-[4px] text-center pt-1">
          {value[1]}₮
        </span>
      </div>
    </div>
  );
}
