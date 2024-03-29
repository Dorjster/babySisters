import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

interface RatingSliderProps {
  onChange: (value: number | number[]) => void;
}

export default function RatingSlider({ onChange }: RatingSliderProps) {
  const [sliderRatingValue, setSliderRatingValue] = React.useState<number>(2);

  const handleChange = (
    event: Event | React.SyntheticEvent,
    value: number | number[]
  ) => {
    setSliderRatingValue(value as number);
    if (onChange) {
      onChange(value as number);
    }
  };
  return (
    <Box sx={{ width: 230 }}>
      <Slider
        className="text-[#389BA7] h-[8px]"
        aria-label="Small steps"
        defaultValue={2}
        onChange={handleChange}
        getAriaValueText={valuetext}
        step={0.5}
        marks
        min={0}
        max={5}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
