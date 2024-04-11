"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@mui/system";
import { AboutMe } from "./AboutMe";
import { Languages } from "./Languages";
import { Character } from "./ Character";
import { Experience } from "./Experience";
import { AddInformation } from "./AddInformation";
import { Skill } from "./Skill";
import { Condition } from "./Condition";
import { General } from "./General";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { ScheduleBaby } from "./ScheduleBaby";
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";
import { Button } from "../ui";
import { StepButton } from "@mui/material";
import { useData } from "@/context/userProvider";

type stateType = {
  image: string;
  about: string;
  location: string;
  birthdate: string;
  languages: string[];
  education: string;
  character: string[];
  experience: string;
  additional: string[];
  skills: string[];
  wage: string;
  schedule: Schedule;
  verificationCode: string;
};

type Schedule = {
  [day: string]: string[];
};

const getPresignedURL = async () => {
  const { data } = await AxiosInstance.get("/upload-image-into-r2");

  return data as { uploadUrl: string; accessUrls: string };
};

export const EditBabysitProfile = () => {
  const { loggedInUserData } = useData();
  const [image, setImage] = useState<FileList | null>(null);
  const [accessUrl, setAccessUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [userdata, setUserdata] = useState<stateType>({
    image: "",
    about: "",
    location: "Улаанбаатар",
    birthdate: "",
    languages: [],
    education: "",
    character: [],
    experience: "",
    additional: [],
    skills: [],
    wage: "",
    schedule: {},
    verificationCode: ""
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
  const handleEdu = (label: string) => {
    setUserdata({ ...userdata, education: label });
    console.log(label);
  };
  const handleExp = (label: string) => {
    setUserdata({ ...userdata, experience: label });
    console.log(label);
  };

  const handleSki = (value: string) => {
    setUserdata((prevUserData) => {
      const isSkillExist = prevUserData.skills.includes(value);
      let updatedSkills;

      if (isSkillExist) {
        updatedSkills = prevUserData.skills.filter((skill) => skill !== value);
      } else {
        updatedSkills = [...prevUserData.skills, value];
      }

      return {
        ...prevUserData,
        skills: updatedSkills,
      };
    });
  };
  const handleLan = (value: string) => {
    setUserdata((prevUserData) => {
      const isLanExist = prevUserData.languages.includes(value);
      let updatedLan;

      if (isLanExist) {
        updatedLan = prevUserData.languages.filter((lan) => lan !== value);
      } else {
        updatedLan = [...prevUserData.languages, value];
      }

      return {
        ...prevUserData,
        languages: updatedLan,
      };
    });
  };
  const handleChar = (value: string) => {
    setUserdata((prevUserData) => {
      const isCharExist = prevUserData.character.includes(value);
      let updatedChar;

      if (isCharExist) {
        updatedChar = prevUserData.character.filter((char) => char !== value);
      } else {
        updatedChar = [...prevUserData.character, value];
      }

      return {
        ...prevUserData,
        character: updatedChar,
      };
    });
  };
  const handleAdd = (value: string) => {
    setUserdata((prevUserData) => {
      const isAddExist = prevUserData.additional.includes(value);
      let updatedAdd;

      if (isAddExist) {
        updatedAdd = prevUserData.additional.filter((add) => add !== value);
      } else {
        updatedAdd = [...prevUserData.additional, value];
      }

      return {
        ...prevUserData,
        additional: updatedAdd,
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
      const response = await AxiosInstance.post("/babysitter", {
        id: loggedInUserData._id,
        email: loggedInUserData.email,
        address: userdata.location,
        about: userdata.about,
        image: userdata.image,
        driver_license: userdata.additional.includes("Жолооны үнэмлэхтэй"),
        has_children: userdata.additional.includes("Хүүхэдтэй"),
        car: userdata.additional.includes("Машинтай"),
        smoker: userdata.additional.includes("Тамхи татдаг"),
        education: userdata.education,
        language: userdata.languages,
        skills: userdata.skills,
        year_of_experience: userdata.experience,
        character: userdata.character,
        available_time: userdata.schedule,
        wage: userdata.wage,
      });

      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <Container
      sx={{
        marginTop: "60px",
        marginBottom: "100px",
      }}
    >
      <div
        className="flex gap-[300px] p-[80px]
      "
      >
        <div className="w-[300px]  object-fit flex flex-col items-center  gap-3 mb-[50px]">
          {image && (
            <Image
              src={image ? URL.createObjectURL(image[0]) : ""}
              alt=""
              width={300}
              height={200}
              className="w-[300px] h-[200px] border-[2px]"
            />
          )}
          {!image && (
            <div
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "#c9e8ec",
                border: "1px solid #389BA7",
              }}
            />
          )}

          <input
            type="file"
            onChange={handleChangeImg}
            className="text-[#389BA7]"
          />
          <Button
            onClick={uploadImage}
            className="bg-[#389BA7] text-[#fff] w-full"
          >
            {loading ? "Loading" : "Submit"}{" "}
          </Button>
        </div>
        <General />
      </div>

      <hr />
      <div className="flex flex-col gap-[45px] mb-[80px]">
        <AboutMe
          handleChange={handleChange}
          hamndleLoc={handleLocationChange}
        />
        <Languages handleLan={handleLan} handleEdu={handleEdu} />
        <Character handleChar={handleChar} />
      </div>
      <hr />
      <div className="mt-[50px] flex flex-col gap-[45px] mb-[70px]">
        <Experience handleExp={handleExp} />
        <AddInformation handleAdd={handleAdd} />
        <Skill handleSki={handleSki} />
      </div>
      <hr />
      <div className="mt-[50px] flex flex-col gap-[45px] mb-[50px]">
        <Condition handleChange={handleChange} />
      </div>
      <ScheduleBaby handleClick={click} />
      <button
        onClick={handleUpdate}
        className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]"
      >
        Хадгалах
      </button>
    </Container>
  );
};
