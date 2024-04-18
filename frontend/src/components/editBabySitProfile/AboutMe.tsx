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
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useData } from "@/context/userProvider";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  RadioGroupIndicatorProps,
  RadioGroupItemProps,
  RadioGroupProps,
  RadioProps,
} from "@radix-ui/react-radio-group";
import { ProfileType } from "../../..";
import { stateType } from "./EditBabysitProfile";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  getData: stateType[] & any;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onGenderChange: (gen: string) => void;
};

interface UserVerifyData {
  verificationCode?: string;
}

// type GenderData = {
//   result: ProfileType[] & any;
//   babysitterId: string;
// };

interface GenderData {
  gender?: string;
}

export const AboutMe = (props: About) => {
  const { getData } = props;
  const { loggedInUserData } = useData();
  const { push } = useRouter();
  const { hamndleLoc, handleChange, onGenderChange } = props;
  const [toast1, setToast1] = useState("");
  const [error, setError] = useState();
  const [userData, setUserData] = useState<UserVerifyData>({
    verificationCode: "",
  });

  const notify = () => {
    toast(error, {
      position: "top-center",
      autoClose: 3000,
      closeButton: false,
    });
  };

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
      const { data } = await AxiosInstance.post("/verifyUser", {
        userId: loggedInUserData._id,
        verificationCode: userData.verificationCode,
      });

      // push("/edit-profile");
      setError(data);
      notify();

      window.location.reload();
      return data;
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  // const [genderData, setGenderData] = useState<GenderData | null>(null)({
  //   gender: false
  // });

  const [genderData, setGenderData] = useState<string>("");

  // const handleClick = () => {
  //   setGenderData()
  // }

  return (
    <div className="flex flex-col gap-4 mt-[45px]">
      <h3 className="text-2xl font-medium text-gray-700 dark:text-white">
        Миний тухай
      </h3>
      <div className="flex flex-col gap-[45px] ">
        {loggedInUserData?.verification === true ? (
          <div>
            <p className="text-gray-600 text-base font-[500]  dark:text-white mb-[15px] ">
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

            <div className="flex gap-4 items-center">
              <input
                name="verificationCode"
                onChange={handleVerifyChange}
                className="w-[120px] border-[1px] h-[40px] p-2 dark:text-white  rounded-2xl text-gray-800 border-zinc-200"
                type="text"
                placeholder="Нууц үг"
              />
              <button
                className="w-[60px] h-[40px] rounded-xl bg-[#60ADB7] text-white"
                onClick={handleVerifyUser}
              >
                <AdsClickIcon />
              </button>
              <ToastContainer />
            </div>

            {/* {error && (
              <p className="text-[12px] text-red-500  font-sans-serif dark:text-white">
                {error}
              </p>
            )} */}

            <p className="text-gray-300 dark:text-white">
              Таны имэйл хаяг руу илгээсэн нууц үгийг хийснээр таны хаяг
              баталгаажих болно.
            </p>
          </div>
        )}

        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
            Өөрийнхөө тухай товч мэдээллийг бичнэ үү
          </p>
          <textarea
            name="about"
            onChange={handleChange}
            className="w-[100%] h-[130px] rounded-2xl border-zinc-200 dark:text-white border-[1px] p-3 "
          />
        </div>
        <div>
          <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
            Хаяг
          </p>
          <Select onValueChange={hamndleLoc}>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 dark:text-white ">
              <SelectValue
                placeholder={getData.address}
                defaultValue="Улаанбаатар"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="dark:text-black">
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
          <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
            Төрсөн өдөр
          </p>
          <Input
            name="birthdate"
            onChange={handleChange}
            className="w-[100%] rounded-2xl text-gray-500 text-lg border-zinc-200 dark:text-white "
            type="date"
          />
        </div>

        <div>
          <div className="text-gray-600 text-base font-[500] mb-[15px]">
            Хүйс
          </div>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                onClick={() => onGenderChange("Эрэгтэй")}
              />
              <Label htmlFor="r2" className="text-gray-500 text-lg">
                Эрэгтэй
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="compact"
                id="r3"
                onClick={() => onGenderChange("Эмэгтэй")}
              />
              <Label htmlFor="r3" className="text-gray-500 text-lg">
                Эмэгтэй
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
