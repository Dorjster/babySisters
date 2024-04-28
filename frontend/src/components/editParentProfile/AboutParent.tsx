"use client";

import React, { ChangeEvent, MouseEvent, useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MenuItem } from "@mui/base";
import { Button } from "../ui";
import { useData } from "@/context/userProvider";
import VerifiedIcon from "@mui/icons-material/Verified";
import { AxiosInstance } from "@/utils/axiosInstance";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const locations = [
  { label: "Улаанбаатар" },
  { label: "Архангай" },
  { label: "Баян-Өлгий" },
  { label: "Баянхонгор" },
  { label: "Булган" },
  { label: "Говь-Алтай" },
  { label: "Говьсүмбэр" },
  { label: "Дархан-Уул" },
  { label: "Дорноговь" },
  { label: "Дорнод" },
  { label: "Дундговь" },
  { label: "Завхан" },
  { label: "Орхон" },
  { label: "Өвөрхангай" },
  { label: "Өмнөговь" },
  { label: "Сүхбаатар" },
  { label: "Сэлэнгэ" },
  { label: "Төв" },
  { label: "Увс" },
  { label: "Ховд" },
  { label: "Хөвсгөл" },
];

type About = {
  hamndleLoc: (label: string) => void;
  handlechild: (value: string) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

interface UserVerifyData {
  verificationCode?: string;
}
export const AboutParent = (props: About) => {
  const { hamndleLoc, handlechild, handleChange } = props;
  const { loggedInUserData } = useData();
  const { push } = useRouter();

  const [error, setError] = useState();
  const [userData, setUserData] = useState<UserVerifyData>({
    verificationCode: "",
  });

  const handleVerifyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData, "userdata");
  };

  const handleVerifyUser = async () => {
    try {
      const { data } = await AxiosInstance.post<UserVerifyData>("/verifyUser", {
        userId: loggedInUserData._id,
        verificationCode: userData.verificationCode,
      });

      // push("/edit-profile")

      toast.success("Амжилттай баталгаажлаа!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      window.location.replace("/edit-profile");

      return data;
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-[45px]">
      <h3 className="text-2xl font-medium text-gray-700 dark:text-white">
        Миний тухай
      </h3>
      <div className="flex flex-col gap-[45px] ">
        {loggedInUserData?.verification === true ? (
          <div>
            <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
              Баталгаажуулах хэсэг
            </p>

            <div className="text-[#60ADB7] flex gap-1">
              <div className="text-[16px] font-semibold dark:text-white">
                Баталгаажсан
              </div>
              <VerifiedIcon />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
              Баталгаажуулах хэсэг
            </p>

            <div className="flex gap-4 items-center ">
              <input
                name="verificationCode"
                onChange={handleVerifyChange}
                className="w-[160px] border-[1px] h-[40px] p-2  rounded-xl text-gray-800 dark:text-white border-zinc-200 dark:bg-white"
                type="text"
                placeholder="Нууц үг"
              />
              <button
                className="w-[60px] h-[40px] dark:text-white text-white items-center justify-center"
                onClick={handleVerifyUser}
              >
                <MdFileDownloadDone className="h-[40px] w-[40px]" />
              </button>
              <ToastContainer />

              {error && (
                <p className="text-[12px] text-red-500  font-sans-serif ">
                  {error}
                </p>
              )}
            </div>

            <p className="text-gray-300 pt-2">
              Таны имэйл хаяг руу илгээсэн нууц үгийг хийснээр таны хаяг
              баталгаажих болно.
            </p>
          </div>
        )}

        <div>
          <p className="text-gray-600 text-base font-[500] dark:text-white  mb-[15px]">
            Гэр бүлийнхээ талаар товч мэдээллийг бичнэ үү
          </p>
          <textarea
            name="about"
            onChange={handleChange}
            className="w-[100%] h-[130px] rounded-2xl border-zinc-200 border-[1px] dark:text-white p-3 bg-white"
          />
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
            Хаяг
          </p>
          <Select onValueChange={hamndleLoc}>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 dark:text-white ">
              <SelectValue
                placeholder="Улаанбаатар"
                defaultValue="Улаанбаатар"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {locations.map((el, index) => (
                  <SelectItem
                    className="dark:text-black"
                    key={index}
                    value={el.label}
                  >
                    {el.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
            Хүүхдийн тоо
          </p>
          <Select onValueChange={handlechild}>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl dark:text-white text-gray-500 ">
              <SelectValue placeholder="1" defaultValue="1" />
            </SelectTrigger>
            <SelectContent className="dark:text-black">
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="4-ээс олон">4-ээс олон</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
