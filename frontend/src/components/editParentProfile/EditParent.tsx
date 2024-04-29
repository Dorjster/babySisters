"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { GeneralParent } from "./GeneralParent";
import { AboutParent } from "./AboutParent";
import { AgeChildren } from "./AgeChildren";
import { Wage } from "./Wage";
import { Schedule } from "./Schedule";
import { useData } from "@/context/userProvider";
import { AxiosInstance } from "@/utils/axiosInstance";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui";
type stateType = {
  image: string;
  register: string;
  about: string;
  location: string;
  child: string;
  childAge: string[];
  wage: string;
  schedule: Schedule;
};

type Schedule = {
  [day: string]: string[];
};
const getPresignedURL = async () => {
  const { data } = await AxiosInstance.get("/upload-image-into-r2");

  return data as { uploadUrl: string; accessUrls: string };
};
export const EditParent = () => {
  const { loggedInUserData } = useData();
  const [image, setImage] = useState<FileList | null>(null);
  const [accessUrl, setAccessUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState<stateType>({
    image: "",
    register: "",
    about: "",
    location: "Улаанбаатар",
    child: "",
    childAge: [],
    wage: "",
    schedule: {},
  });

  const click = (day: string, timeValue: string) => {
    setUserdata((prevUserData) => {
      const { schedule } = prevUserData;
      const existingTimes = schedule[day] || [];

      let updatedTimes;
      if (existingTimes.includes(timeValue)) {
        updatedTimes = existingTimes.filter((time) => time !== timeValue);
      } else {
        updatedTimes = [...existingTimes, timeValue];
      }

      const updatedSchedule = {
        ...schedule,
      };

      if (updatedTimes.length > 0) {
        updatedSchedule[day] = updatedTimes;
      } else {
        delete updatedSchedule[day];
      }

      return {
        ...prevUserData,
        schedule: updatedSchedule,
      };
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  console.log(userdata);
  const handleLocationChange = (label: string) => {
    setUserdata({ ...userdata, location: label });
    console.log(label);
  };
  const handleSelect = (value: string) => {
    setUserdata({ ...userdata, child: value });
  };
  const handleCount = (value: string) => {
    setUserdata((prevUserData) => {
      const isAddExist = prevUserData.childAge.includes(value);
      let updatedAdd;

      if (isAddExist) {
        updatedAdd = prevUserData.childAge.filter((add) => add !== value);
      } else {
        updatedAdd = [...prevUserData.childAge, value];
      }

      return {
        ...prevUserData,
        childAge: updatedAdd,
      };
    });
  };
  const handleChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files);
  };

  useEffect(() => {
    if (accessUrl) {
      setUserdata((prevUserData) => ({
        ...prevUserData,
        image: accessUrl,
      }));
    }
  }, [accessUrl]);

  const uploadImage = async () => {
    if (image) {
      setLoading(true);
      const img = image[0] as File;

      const { uploadUrl, accessUrls } = await getPresignedURL();

      await axios.put(uploadUrl, img, {
        headers: {
          "Content-Type": img.type,
        },
      });

      setAccessUrl(accessUrls);

      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await AxiosInstance.post("/parentUpdate", {
        id: loggedInUserData._id,
        email: loggedInUserData.email,
        address: userdata.location,
        job_description: userdata.about,
        image: userdata.image,
        number_of_children: userdata.childAge.length,
        age_of_children: userdata.childAge,
        available_time: userdata.schedule,
        wage: userdata.wage,
      });
      notify();
      window.location.href = "/";
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const notify = () => {
    toast("Амжилттай хадгалагдлаа", {
      position: "top-right",
      autoClose: 2000,
      // hideProgressBar: true,
      closeButton: false,
      className: "mt-[80px] ",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center md:py-20 py-8 px-6 dark:bg-[#31363F]">
      <div>
        <div
          className="md:flex-row md:flex md:justify-between 
      "
        >
          <div className="w-[220px]  object-fit flex flex-col items-center  gap-3 mb-[50px]">
            {image && (
              <Image
                src={image ? URL.createObjectURL(image[0]) : ""}
                alt=""
                width={220}
                height={200}
                className="w-[220px] h-[200px] border-[5px] "
              />
            )}
            {!image && (
              <div
                style={{
                  width: "220px",
                  height: "200px",
                  backgroundColor: "#c9e8ec",
                  border: "1px solid #389BA7",
                  borderRadius: "5px",
                }}
              />
            )}

            <input
              type="file"
              onChange={handleChangeImg}
              className="text-[#389BA7] text-[14px] ml-[50px]"
            />
            <button
              onClick={uploadImage}
              className="bg-[#389BA7] px-2 py-1 hover:bg-white hover:text-[#389BA7]  text-[#fff] rounded-[5px] w-full"
            >
              {loading ? "Loading" : "Submit"}{" "}
            </button>
          </div>
          <GeneralParent />
        </div>

        <hr />
        <div className="flex flex-col gap-[45px] mb-[60px]">
          <AboutParent
            hamndleLoc={handleLocationChange}
            handlechild={handleSelect}
            handleChange={handleChange}
          />
          <AgeChildren handleCount={handleCount} />
        </div>
        <hr />

        <div className="mt-[50px] flex flex-col mb-[50px] gap-[45px]">
          <Wage handleChange={handleChange} />
        </div>
        {/* <Schedule handleClick={click} /> */}

        <button
          onClick={handleUpdate}
          className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]"
        >
          Хадгалах
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
