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
  const [fromValues, setFromValues] = useState<Record<string, Dayjs | null>>(
    Object.fromEntries(days.map((day) => [day, dayjs("2022-04-17T15:30")]))
  );
  const [toValues, setToValues] = useState<Record<string, Dayjs | null>>(
    Object.fromEntries(days.map((day) => [day, dayjs("2022-04-17T15:30")]))
  );
  const [checkedDays, setCheckedDays] = useState<Record<string, boolean>>(
    Object.fromEntries(days.map((day) => [day, true])) // Initialize all days as checked
  );

  const handleDayToggle = (day: string) => {
    setCheckedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div className="">
      <Card className="flex flex-col gap-[30px] py-[20px] dark:bg-[#4D565E] ">
        {days.map((el, index) => (
          <div
            className="flex items-center w-[62%] justify-between  md:h-[40px] h-[130px] pl-[20px] "
            key={index}
          >
            <div>
              <FormControlLabel
                control={
                  <CyanSwitch
                    onChange={() => handleDayToggle(el)}
                    checked={checkedDays[el]}
                  />
                }
                className=" dark:text-white"
                label={el}
              />
            </div>

            {checkedDays[el] ? (
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker", "TimePicker"]}>
                    <TimePicker
                      label="from"
                      value={fromValues[el]}
                      onChange={(newValue) =>
                        setFromValues({ ...fromValues, [el]: newValue })
                      }
                    />
                    <TimePicker
                      label="to"
                      value={toValues[el]}
                      onChange={(newValue) =>
                        setToValues({ ...toValues, [el]: newValue })
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            ) : (
              <div className=" md:w-[70%] w-full  bg-slate-50 dark:bg-gray-300 items-center flex  rounded-2xl gap-4 p-4 ">
                <NightlightRoundIcon className="text-[#389BA7] " />
                <p className="dark:text-black text-slate-600">Ажиллах боломжгүй</p>
              </div>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
};
