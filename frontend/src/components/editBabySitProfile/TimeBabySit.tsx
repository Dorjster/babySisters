"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
import { Card } from "@mui/material";

const CyanSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: cyan[600],
    "&:hover": {
      backgroundColor: alpha(cyan[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: cyan[600],
  },
}));

const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];

export const TimeBabySit = () => {
  const [fromValue, setFromValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  const [toValue, setToValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [checked, setChecked] = useState(false);

  return (
    <div className="">
      <Card className="flex flex-col gap-[20px] py-[20px]">
        {days.map((el, index) => (
          <div
            className="flex items-center w-[62%] justify-between pl-[20px] "
            key={index}
          >
            <div>
              <FormControlLabel
                control={
                  <CyanSwitch
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    defaultChecked
                  />
                }
                className=""
                label={el}
              />
            </div>

            {checked ? (
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker", "TimePicker"]}>
                    <TimePicker
                      label="from"
                      value={fromValue}
                      onChange={(newValue) => setFromValue(newValue)}
                    />
                    <TimePicker
                      label="to"
                      value={toValue}
                      onChange={(newValue) => setToValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            ) : (
              <div className="w-[70%] bg-gray-200 flex h-[50px]">
                <NightlightRoundIcon /> <p>Ажиллах боломжгүй</p>
              </div>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
};
