// Wage.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme } from "@mui/system";

interface Range {
  name: string;
  min: string;
  max: string;
}

interface WageProps {
  onChange: (value: string | string[]) => void;
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedRanges({
      ...selectedRanges,
      [name]: checked,
    });

    const selectedRange = ranges.find((range) => range.name === name);

    if (selectedRange) {
      const selectedMin = checked ? selectedRange.min.toString() : "0";
      const selectedMax = checked ? selectedRange.max.toString() : "0";

      onChange([selectedMin, selectedMax]);
    }
  };

  const ranges: Range[] = [
    {
      name: "range1",
      min: "5000",
      max: "10000",
    },
    {
      name: "range2",
      min: "10000",
      max: "15000",
    },
    {
      name: "range3",
      min: "15000",
      max: "20000",
    },
    {
      name: "range4",
      min: "20000",
      max: "25000,",
    },
    {
      name: "range5",
      min: "25000",
      max: "30000",
    },
  ];

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
                  onChange={handleChange}
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
              label={`${range.min}-с ${range.max}`}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};
