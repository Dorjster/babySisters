"use client";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useContext, useEffect, useState, ChangeEvent } from "react";
import { TbCurrencyTugrik } from "react-icons/tb";

import {
  FaAddressCard,
  FaCar,
  FaTransgender,
  FaUserGraduate,
  FaChild,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdVerified,
  MdOutlineSmokeFree,
  MdBabyChangingStation,
} from "react-icons/md";
import Image from "next/image";
import { Box, Button, Rating, Typography } from "@mui/material";
import { ParentType, ProfileType } from "../../..";
import React from "react";
import { useData } from "@/context/userProvider";
import { Description } from "@radix-ui/react-toast";
import { TimeBabySit } from "../editBabySitProfile/TimeBabySit";
import { constants } from "buffer";
import { Dayjs } from "dayjs";
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

import TextField from "@mui/material/TextField";

import { useRouter } from "next/navigation";
import { Modal } from "@mui/base";
type All = {
  result: ProfileType[] & any;
  babysitterId: string;
};

type Parent = {
  name: string;
  image: string;
};

export type ReviewType = {
  point: number;
  description: string;
  parent_id: Parent;
  babysitter_id: string;
  createdAt: string;
  _id: string;
};

type State = {
  _id: string;
  role: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  number_of_children: string[];
  age_of_children: string[];
  verification: boolean;
  availableTime: string[];
  image: string;
};

type Review = {
  parent_id: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 200,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
};

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

// const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];

export const BabysitterProfile = (props: All) => {
  const { push } = useRouter();
  // const { profile } = router.query;
  const { result, babysitterId } = props;
  const { loggedInUserData } = useData();
  const [comment, setComment] = useState("");
  const [reviewValue, setReviewValue] = useState<number | null>(null);
  const [parentId, setParentId] = useState<Review>({
    parent_id: "",
  });
  // console.log(result, "result");
  // console.log(profile, "url");

  const [parent, setParent] = useState<State>({
    _id: "",
    role: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    number_of_children: [],
    age_of_children: [],
    verification: false,
    availableTime: [],
    image: "",
  });

  useEffect(() => {
    const CommentedUser = async () => {
      try {
        const { data } = await AxiosInstance.post("/get/parent", {
          id: parentId.parent_id,
        });
        setParent(data);
        return data;
      } catch (er: any) {
        console.error(er.message);
      }
    };
    CommentedUser();
  }, [parentId]);

  const sendComment = async () => {
    try {
      const { data } = await AxiosInstance.post("/Createreview", {
        babysitter_id: babysitterId,
        parent_id: loggedInUserData._id,
        point: reviewValue,
        description: comment,
      });

      setComment(" ");
      setReviewValue(0);
      location.reload();
      return data;
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRatingChange: (
    event: React.SyntheticEvent,
    value: number | null
  ) => void = (event, newValue) => {
    setReviewValue(newValue);
  };

  const reviews = result?.review;
  // console.log(reviews, "asd");

  const info = result.info_id;
  // console.log(info, "info asd");

  // const available = result.availableTime?.availables[0];
  // const available = result.availableTime?.availables[0];

  // const newData = days?.map((el) => {
  //   return { day: el, [el]: available[el] };
  // });

  // console.log(newData, "newDatanewDatanewData");

  // const newDataChecked = newData?.filter((available: {}) => {
  //   return available;
  // });

  // console.log(newDataChecked, "hahahah");

  // const [checkedDays, setCheckedDays] = useState<Record<string, boolean>>(
  //   Object.fromEntries(days.map((day) => [day, true]))
  // );

  // useEffect(() => {
  //   if (newData !== undefined) {
  //     // setCheckedDays(Object.fromEntries(days.map((day) => [day, true])));
  //   } else {
  //     // setCheckedDays(Object.fromEntries(days.map((day) => [day, false])));
  //   }
  // }, [newData, days]);

  // const handleGetDate = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   console.log(name, value);

  //   setAvailableDays((previous) => {
  //     if (name === "From") {
  //       return [...previous, { from: value }];
  //     } else if (name === "To") {
  //       return [...previous, { to: value }];
  //     } else {
  //       return [...previous, { weekday: value }];
  //     }
  //   });
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Chat = async () => {
    try {
      const { data } = await AxiosInstance.post("/createConversation", {
        senderId: loggedInUserData._id,
        recieverId: babysitterId,
      });
      push(`/chat?id=${data.roomId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-b m-auto dark:bg-[#31393F]   h-fit md:flex-row md:gap-[130px]  flex flex-col-reverse bg-[#F4FAFB]  justify-center py-10 px-2 ">
      <div className="mt-[30px] md:w-[60%] md:mt-0 ">
        <div className="flex border-b-[0.5px] flex-col gap-4 border-gray-600 pb-[40px]">
          <p className="text-[28px] text-gray-900 dark:text-white ">
            Миний тухай
          </p>
          <p className="overflow-wrap break-word">{result?.about}</p>
          <div className="flex gap-6 pt-4">
            <div className="flex md:gap-8 gap-3">
              <div className="flex items-center gap-1 text-[18px] ">
                <MdBabyChangingStation className="text-[#008291]" size={24} />
                <div>{info?.year_of_experience} жил</div>
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <FaTransgender className="text-[#008291]" size={24} />
                {result?.gender === "Эрэгтэй" ? (
                  <div>Эмэгтэй</div>
                ) : (
                  <div>Эмэгтэй</div>
                )}
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <MdLocationOn className="text-[#008291]" size={24} />
                {result?.address}
              </div>
              <div className="flex items-center gap-1 text-[18px]">
                <FaUserGraduate className="text-[#008291] ]" size={22} />
                {result?.education}
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="border-b-[0.5px] border-gray-600 py-10 md:flex  gap-10">
          <div>
            <h1 className="text-[23px] pb-5 ml-[20px]">Ур чадвар</h1>
            <div className=" rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
              {info?.skills?.map((el: string, index: number) => (
                <div
                  className="flex gap-2 bg-[#c9e8ec] shadow-md shadow-[#c5c5c5] w-fit rounded-xl px-4 py-2 text-gray-700 text-[16px]"
                  key={index}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[23px] pb-5 ml-[20px]">Зан чанар</h1>
            <div className=" rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
              {info?.character?.map((el: string, index: number) => (
                <div
                  className="flex gap-2 bg-[#c9e8ec] shadow-md shadow-[#c5c5c5] w-fit rounded-xl px-4 py-2 text-[16px] text-gray-700"
                  key={index}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 
        <div className="py-5 flex flex-col gap-5 ">
          <div className="text-gray-600 dark:text-white text-base font-[500]">
            Ажиллах боломжтой цаг
          </div>
          <Card className="flex flex-col gap-[30px] py-[20px] dark:bg-[#2b313a] dark:text-white ">
            {newData?.map((el, index) => (
              <div
                className="flex items-center w-[62%] justify-between md:h-[40px] h-[130px] pl-[20px]"
                key={index}
              >
                <div>
                  <FormControlLabel
                    control={
                      <CyanSwitch
                        // onChange={() => handleDayToggle(el.day)}
                        checked={checkedDays[el.day]}
                      />
                    }
                    className="dark:text-white"
                    label={el.day}
                  />
                </div>
                {checkedDays[el.day] ? (
                  <div className="flex md:gap-8 gap-2">
                    <TextField
                      id="outlined-basic"
                      label="From"
                      variant="outlined"
                      defaultValue={el[el.day].from}
                    />
                    <TextField
                      id="outlined-basic"
                      label="To"
                      variant="outlined"
                      defaultValue={el[el.day].to}
                    />
                  </div>
                ) : (
                  <div className="md:w-[70%] w-full bg-slate-50 dark:bg-gray-300 items-center flex rounded-2xl gap-4 p-4 ">
                    <NightlightRoundIcon className="text-[#389BA7] " />
                    <p className="dark:text-black text-slate-600">
                      Ажиллах боломжгүй
                    </p>
                  </div>
                )}
              </div>
            ))}
          </Card>
        </div> */}

        <div className="flex flex-wrap gap-8 border-t-[0.5px]  border-gray-600 py-10 ">
          {reviews.map((el: ReviewType, index: number) => (
            <div
              className="flex flex-col gap-4 bg-[#EDF7F8] w-[280px] dark:bg-[#434C54] rounded-2xl p-4 h-fit"
              key={el._id}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      className="rounded-full w-[40px] h-[40px]"
                      src={el.parent_id?.image}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </div>
                  <h1 className="text-[16px] text-gray-700 font-medium">
                    {el.parent_id?.name}
                  </h1>
                </div>
                <div className="text-[14px] text-gray-600 ">
                  {el.createdAt.split("T")[0]}
                </div>
              </div>
              <p className="text-gray-600">{el.description}</p>
            </div>
          ))}
        </div>
        {loggedInUserData.role === "BabySitter" ? (
          <div></div>
        ) : (
          <div className="flex flex-col items-center md:items-start">
            <div>
              <h1 className="font-medium">Сэтгэгдэл үлдээх</h1>
              {/* <div>
                <Rating
                  sx={{ color: "#59BEC9" }}
                  name="simple-controlled"
                  value={reviewValue}
                  onChange={handleRatingChange}
                />
              </div> */}
            </div>
            <div className=" w-[300px] flex items-center py-2 border-2 rounded-2xl px-2  ">
              <input
                className="w-[450px] py-[10px] bg-transparent"
                placeholder="Comment"
                type="text "
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
              <button
                onClick={sendComment}
                className="bg-[#389BA7] text-white rounded-xl py-[2px] px-4"
              >
                Илгээх
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" flex flex-col items-center h-fit md:p-4 rounded-2xl gap-10 bg-[#F6F9FA] shadow-xl dark:bg-[#4D565E]">
        <div className="">
          <Image
            className="rounded-full w-[200px] h-[200px]"
            src={result.image}
            height={200}
            width={200}
            alt="profile"
          />
        </div>
        <div className="text-[18px]">
          <div className="flex items-center justify-center gap-4 ">
            <h1 className="text-[26px]">{result?.name}</h1>
            {result?.verification && (
              <MdVerified className="text-[#008291]" size={25} />
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              {info?.rating && (
                <Rating
                  // sx={{ color: "#59BEC9" }}
                  name="read-only"
                  defaultValue={info?.rating}
                  value={info?.rating}
                  readOnly
                />
              )}
            </div>
          </div>
          <div className="flex gap-4 bg-[#edf7f8]  items-center justify-center rounded-2xl py-2 px-4 mt-[20px]">
            {info?.smoker === false && (
              <MdOutlineSmokeFree className="h-6 w-6 text-[#008291]" />
            )}
            {info?.car === true && <FaCar className="h-6 w-6 text-[#008291]" />}
            {info?.driver_license === true && (
              <FaAddressCard className="h-6 w-6 text-[#008291]" />
            )}
            {info?.has_children === true && (
              <FaChild className="h-6 w-6 text-[#008291]" />
            )}
          </div>
        </div>

        <div className="bg-[#edf7f8] dark:bg-[#434C54] w-fill flex flex-col gap-3 rounded-2xl px-2 py-4 md:sticky md:top-24 ">
          <h1 className="text-[20px] flex gap-1 items-center justify-center">
            <TbCurrencyTugrik />
            {info?.wage}/цагт
          </h1>
          {loggedInUserData.role === "BabySitter" ? (
            <div></div>
          ) : (
            <button
              onClick={handleOpen}
              className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10"
            >
              Холбогдох {}
            </button>
          )}
        </div>
        <Modal
          className=""
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="dark:bg-[#4D565E]" sx={style}>
            <Button onClick={handleClose} className="absolute right-0 top-2">
              x
            </Button>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 1, fontSize: "20px" }}
            >
              Холбогдох
            </Typography>

            <div className="flex flex-col gap-[20px]">
              {" "}
              <Typography className="flex gap-[5px]">
                {" "}
                <p className="font-bold">Утасны дугаар :</p>
                {loggedInUserData.phone}
              </Typography>
              <Button
                onClick={() => {
                  Chat();
                  handleClose;
                }}
              >
                Энэ хүнтэй чалчих
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
