import React, { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { AxiosInstance } from "@/utils/axiosInstance";
import { useData } from "@/context/userProvider";
import VerifiedIcon from '@mui/icons-material/Verified';


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

  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

interface UserVerifyData {
  verificationCode?: string;
}
export const AboutMe = (props: About) => {
  const { loggedInUserData}= useData()
  const { hamndleLoc, handleChange } = props;

  const [error, setError] = useState()
  const [userData, setUserData] = useState<UserVerifyData>({
    verificationCode: ""
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
        userId:loggedInUserData._id,
        verificationCode: userData.verificationCode
        
      });

      window.location.href = "/edit-profile";
  
      return data;
    } catch (error: any) {
      setError(error.response.data);
    }
  };


  return (
    <div className="flex flex-col gap-4 mt-[45px]">
      <h3 className="text-2xl font-medium text-gray-700">Миний тухай</h3>
      <div className="flex flex-col gap-[45px] ">

        

        {loggedInUserData?.verification === true ?
          <div>
              <p className="text-gray-600 text-base font-[500] mb-[15px]">
                Баталгаажуулах хэсэг
              </p>
             
             <div className="text-[#60ADB7] flex gap-1">
              <div className="text-[16px] font-semibold">Баталгаажсан</div>
              <VerifiedIcon />
          </div>

          </div>
        
          :
          <div>
             <p className="text-gray-600 text-base font-[500] mb-[15px]">
            Баталгаажуулах хэсэг
          </p>
        

          <div className="flex gap-4 items-center">
            <input
              name="verificationCode"
              onChange={handleVerifyChange}
              className="w-[120px] border-[1px] h-[40px] p-2  rounded-2xl text-gray-800 border-zinc-200"
              type="text"
              placeholder="Нууц үг"
            />
            <button className="w-[60px] h-[40px] rounded-xl bg-[#60ADB7] text-white" onClick={handleVerifyUser}><AdsClickIcon/></button>
          </div>

          {error && (
            <p className="text-[12px] text-red-500  font-sans-serif">
              {error}
            </p>
          )}

          <p className="text-gray-300">
            Таны имэйл хаяг руу илгээсэн нууц үгийг хийснээр таны хаяг баталгаажих болно.
          </p>
        </div>}

     
        
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">
            Өөрийнхөө тухай товч мэдээллийг бичнэ үү
          </p>
          <textarea
            name="about"
            onChange={handleChange}
            className="w-[100%] h-[130px] rounded-2xl border-zinc-200 border-[1px] p-3 "
          />
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">Хаяг</p>
          <Select onValueChange={hamndleLoc}>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 ">
              <SelectValue
                placeholder="Улаанбаатар"
                defaultValue="Улаанбаатар"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {locations.map((el, index) => (
                  <SelectItem key={index} value={el.label}>
                    {el.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px]">
            Төрсөн өдөр
          </p>
          <Input
            name="birthdate"
            onChange={handleChange}
            className="w-[100%] rounded-2xl text-gray-500 text-lg border-zinc-200 "
            type="date"
          />
        </div>
      </div>
    </div>
  );
};
