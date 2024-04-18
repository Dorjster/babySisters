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
import { Rating } from "@mui/material";
import { CheckedSchedule } from "./CheckedSchedule";
import { ParentType, ProfileType } from "../../..";
import React from "react";
import { useData } from "@/context/userProvider";
import { Description } from "@radix-ui/react-toast";
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
  available_time: string[];
  number_of_children: string[];
  age_of_children: string[];
  verification: boolean;
  availableTime: string[];
  image: string;
};

type Review = {
  parent_id: string;
};

export const BabysitterProfile = (props: All) => {
  const { result, babysitterId } = props;
  const { loggedInUserData } = useData();
  const [comment, setComment] = useState("");
  const [reviewValue, setReviewValue] = useState<number | null>(null);
  const [parentId, setParentId] = useState<Review>({
    parent_id: "",
  });
  console.log(result, "result");

  const [parent, setParent] = useState<State>({
    _id: "",
    role: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    available_time: [],
    number_of_children: [],
    age_of_children: [],
    verification: false,
    availableTime: [],
    image: "",
  });

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
  console.log(info, "info asd");

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
        <div className="py-24">
          <CheckedSchedule />
        </div>
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
        <div className="flex flex-col items-center md:items-start gap-3">
          <h1 className="font-medium">Сэтгэгдэл үлдээх</h1>

          <div className=" w-[300px] flex items-center py-2 border-2 rounded-2xl px-2 border-slate-300">
            <input
              className=" w-[450px] outline-none "
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
          <button className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10">
            Холбогдох {}
          </button>
        </div>
      </div>
    </div>
  );
};
