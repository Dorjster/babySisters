"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}
interface SliderProps {
  onChange: (value: number | number[]) => void;
}
export default function KidsNumber({ onChange }: SliderProps) {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleChange = (
    event: Event | React.SyntheticEvent,
    value: number | number[]
  ) => {
    setSliderValue(value as number);
    if (onChange) {
      onChange(value as number);
    }
  };

  return (
    <Box sx={{ width: 230 }}>
      <Slider
        className="text-[#389BA7] h-[8px]"
        aria-label=""
        value={sliderValue}
        onChange={handleChange}
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
