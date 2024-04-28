"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useParentFilter } from "@/context/parentProvider";
import { PathString } from "react-hook-form";

function valuetext(value: number) {
  return `${value}°C`;
}
interface SliderProps {
  onChange: (value: number | number[]) => void;
}
export default function KidsNumber({ onChange }: SliderProps) {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const { setParentFilter, parentFilter } = useParentFilter();

  return (
    <Box sx={{ width: 230 }}>
      <Slider
        className="text-[#389BA7] h-[8px]"
        aria-label=""
        value={sliderValue}
        getAriaValueText={valuetext}
        step={1}
        marks
        min={0}
        max={4}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
