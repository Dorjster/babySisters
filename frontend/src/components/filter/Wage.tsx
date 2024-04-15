"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme } from "@mui/system";

interface Range {
  name: string;
  min: number;
  max: number;
}

interface WageProps {
  onChange: (min: number | null, max: number | null) => void;
}

export const Wage: React.FC<WageProps> = ({ onChange }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff5722",
      },
    },
  });

  const [selectedRanges, setSelectedRanges] = React.useState<{
    [key: string]: boolean;
  }>({
    range1: false,
    range2: false,
    range3: false,
    range4: false,
    range5: false,
  });

  const ranges: Range[] = [
    {
      name: "range1",
      min: 5000,
      max: 10000,
    },
    {
      name: "range2",
      min: 10000,
      max: 15000,
    },
    {
      name: "range3",
      min: 15000,
      max: 20000,
    },
    {
      name: "range4",
      min: 20000,
      max: 25000,
    },
    {
      name: "range5",
      min: 25000,
      max: 30000,
    },
  ];

  const handleCheckboxChange = (name: string) => {
    setSelectedRanges((prevSelectedRanges) => {
      const updatedSelectedRanges = {
        ...prevSelectedRanges,
        [name]: !prevSelectedRanges[name],
      };

      const selectedRangesValues = Object.entries(updatedSelectedRanges)
        .filter(([key, value]) => value)
        .map(([key]) => {
          const range = ranges.find((range) => range.name === key);
          return range ? [range.min, range.max] : [];
        })
        .flat();

      const min = Math.min(...selectedRangesValues);
      const max = Math.max(...selectedRangesValues);

      // Call the onChange callback with the selected min and max values
      onChange(min === Infinity ? null : min, max === -Infinity ? null : max);

      return updatedSelectedRanges;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          {ranges.map((range) => (
            <FormControlLabel
              key={range.name}
              control={
                <Checkbox
                  checked={selectedRanges[range.name]}
                  onChange={() => handleCheckboxChange(range.name)}
                  name={range.name}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "#389BA7",
                      fontSize: "25px",
                      fontWeight: "100",
                    },
                  }}
                />
              }
              label={`${range.min} - ${range.max}`}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};
