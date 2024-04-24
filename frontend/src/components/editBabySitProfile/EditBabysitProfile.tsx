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
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";
import { Button } from "../ui";
import { StepButton } from "@mui/material";
import { useData } from "@/context/userProvider";
import { error } from "console";
import { get } from "http";
import { TimeBabySit } from "./TimeBabySit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import babysitter from "@/app/babysitter/page";
import { Monda } from "next/font/google";
import { Dayjs } from "dayjs";

export type stateType = {
  image: string;
  about: string;
  address: string;
  birthdate: string;
  language: string[];
  education: string;
  character: string[];
  experience: string;
  additional: string[];
  skills: string[];
  wage: number;
  // schedule: Schedule;
  verificationCode: string;
  gender: string;

  // [day: string]: {
  //   togle: boolean;
  //   from: {
  //     clock: string;
  //     AM: string;
  //     PM: string;
  //   };
  //   to: {
  //     clock: string;
  //     AM: string;
  //     PM: string;
  //   };
  // };

  monday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
  tuesday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
  wednesday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
  thursday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
  friday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
  saturday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
  sunday: {
    togle: boolean;
    from: {
      clock: string;
      AM: string;
      PM: string;
    };
    to: {
      clock: string;
      AM: string;
      PM: string;
    };
  };
};

type DayObject = {
  togle: boolean;
  from: {
    clock: string;
    AM: string;
    PM: string;
  };
  to: {
    clock: string;
    AM: string;
    PM: string;
  };
};

// type Schedule = {
//   [day: string]: string[];
// };

type Sitter = {
  image: string;
  about: string;
  address: string;
  birthdate: string;
  language: string[];
  education: string;
  character: string[];
  experience: string;
  additional: string[];
  skills: string[];
  wage: number;
  schedule: object;
  verificationCode: string;
  info_id: string[];
};

const getPresignedURL = async () => {
  const { data } = await AxiosInstance.get("/upload-image-into-r2");

  return data as { uploadUrl: string; accessUrls: string };
};

export const EditBabysitProfile = () => {
  // const { hamndleLoc, handleChange, onGenderChange } = props;
  const { loggedInUserData } = useData();
  const [image, setImage] = useState<FileList | null>(null);
  const [accessUrl, setAccessUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState<Sitter>({
    image: "",
    about: "",
    address: "",
    birthdate: "",
    language: [],
    education: "",
    character: [],
    experience: "",
    additional: [],
    skills: [],
    wage: 0,
    schedule: {},
    verificationCode: "",
    info_id: [],
  });

  const [userdata, setUserdata] = useState<stateType>({
    image: "",
    about: "",
    address: "Улаанбаатар",
    birthdate: "",
    language: [],
    education: "Бүрэн дунд",
    character: [],
    experience: "",
    additional: [],
    skills: [],
    wage: 0,
    // schedule: {},
    verificationCode: "",
    gender: "Эрэгтэй",
    monday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
    tuesday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
    wednesday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
    thursday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
    friday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
    saturday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
    sunday: {
      togle: true,
      from: {
        clock: "",
        AM: "",
        PM: "",
      },
      to: {
        clock: "",
        AM: "",
        PM: "",
      },
    },
  });

  type DayOfWeek =
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";

  const handleDayTimeChange = (
    day: DayOfWeek,
    from: Dayjs | null,
    to: Dayjs | null
  ) => {
    setUserdata((prevUserData) => ({
      ...prevUserData,
      [day]: {
        ...prevUserData[day],
        from: from ? from.format("HH:mm") : "",
        to: to ? to.format("HH:mm") : "",
      },
    }));
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const { data } = await AxiosInstance.post("/get/babysitter", {
          id: loggedInUserData._id,
        });
        // console.log(data, "get babySitter Data");

        setGetData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [loggedInUserData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  console.log(userdata);

  const handleLocationChange = (label: string) => {
    setUserdata({ ...userdata, address: label });
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
      const isLanExist = prevUserData.language.includes(value);
      let updatedLan;

      if (isLanExist) {
        updatedLan = prevUserData.language.filter((lan) => lan !== value);
      } else {
        updatedLan = [...prevUserData.language, value];
      }

      return {
        ...prevUserData,
        language: updatedLan,
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
  const handleGenderChange = (gen: string) => {
    setUserdata({ ...userdata, gender: gen });
  };

  const handleUpdate = async () => {
    try {
      const response = await AxiosInstance.post("/babysitter", {
        id: loggedInUserData._id,
        email: loggedInUserData.email,
        address: userdata.address,
        about: userdata.about,
        image: userdata.image,
        driver_license: userdata.additional.includes("Жолооны үнэмлэхтэй"),
        has_children: userdata.additional.includes("Хүүхэдтэй"),
        car: userdata.additional.includes("Машинтай"),
        smoker: userdata.additional.includes("Тамхи татдаг"),
        education: userdata.education,
        language: userdata.language,
        skills: userdata.skills,
        year_of_experience: userdata.experience,
        character: userdata.character,
        // available_time: userdata.schedule,
        wage: userdata.wage,
        gender: userdata.gender,
        monday: {
          togle: userdata.monday.togle,
          from: {
            clock: userdata.monday.from.clock,
            AM: userdata.monday.from.AM,
            PM: userdata.monday.from.PM,
          },
          to: {
            clock: userdata.monday.to.clock,
            AM: userdata.monday.to.AM,
            PM: userdata.monday.to.PM,
          },
        },
        tuesday: {
          togle: userdata.tuesday.togle,
          from: {
            clock: userdata.tuesday.from.clock,
            AM: userdata.tuesday.from.AM,
            PM: userdata.tuesday.from.PM,
          },
          to: {
            clock: userdata.tuesday.to.clock,
            AM: userdata.tuesday.to.AM,
            PM: userdata.tuesday.to.PM,
          },
        },
        wednesday: {
          togle: userdata.wednesday.togle,
          from: {
            clock: userdata.wednesday.from.clock,
            AM: userdata.wednesday.from.AM,
            PM: userdata.wednesday.from.PM,
          },
          to: {
            clock: userdata.wednesday.to.clock,
            AM: userdata.wednesday.to.AM,
            PM: userdata.wednesday.to.PM,
          },
        },
        thursday: {
          togle: userdata.thursday.togle,
          from: {
            clock: userdata.thursday.from.clock,
            AM: userdata.thursday.from.AM,
            PM: userdata.thursday.from.PM,
          },
          to: {
            clock: userdata.thursday.to.clock,
            AM: userdata.thursday.to.AM,
            PM: userdata.thursday.to.PM,
          },
        },
        friday: {
          togle: userdata.friday.togle,
          from: {
            clock: userdata.friday.from.clock,
            AM: userdata.friday.from.AM,
            PM: userdata.friday.from.PM,
          },
          to: {
            clock: userdata.friday.to.clock,
            AM: userdata.friday.to.AM,
            PM: userdata.friday.to.PM,
          },
        },
        saturday: {
          togle: userdata.saturday.togle,
          from: {
            clock: userdata.saturday.from.clock,
            AM: userdata.saturday.from.AM,
            PM: userdata.saturday.from.PM,
          },
          to: {
            clock: userdata.saturday.to.clock,
            AM: userdata.saturday.to.AM,
            PM: userdata.saturday.to.PM,
          },
        },
        sunday: {
          togle: userdata.sunday.togle,
          from: {
            clock: userdata.sunday.from.clock,
            AM: userdata.sunday.from.AM,
            PM: userdata.sunday.from.PM,
          },
          to: {
            clock: userdata.sunday.to.clock,
            AM: userdata.sunday.to.AM,
            PM: userdata.sunday.to.PM,
          },
        },
      });
      notify();
      window.location.href = "/";
      console.log("User updated successfully:", response.data);
    } catch (error: any) {
      console.error("Error updating user:", error.message);
    }
  };

  const notify = () => {
    toast("Амжилттай хадгалагдлаа!", {
      position: "top-right",
      autoClose: 2000,
      // hideProgressBar: true,
      closeButton: false,
      className: "mt-[80px] ",
    });
  };

  return (
    <div className=" dark:bg-[#31393F] py-10">
      <Container>
        <div>
          <div
            className=" md:flex-row flex flex-col justify-between md:pr-60
    "
          >
            <div className="w-[220px]  object-fit flex flex-col items-center  gap-3 mb-[50px]">
              {getData?.image && (
                <Image
                  src={image ? URL.createObjectURL(image[0]) : getData?.image}
                  alt=""
                  width={220}
                  height={200}
                  className="w-[220px] h-[200px] border-[5px]"
                />
              )}
              {!getData?.image && (
                <div
                  style={{
                    width: "220px",
                    height: "200px",
                    backgroundColor: "#c9e8ec",
                    border: "1px solid #389BA7 ",
                    borderRadius: "5px",
                  }}
                />
              )}

              <input
                type="file"
                onChange={handleChangeImg}
                className="text-[#389BA7] text-[14px] ml-[50px]"
              />
              <Button
                onClick={uploadImage}
                className="bg-[#389BA7] text-[#fff] rounded-[5px] w-full"
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
              onGenderChange={handleGenderChange}
              getData={getData}
            />
            <Languages
              handleLan={handleLan}
              handleEdu={handleEdu}
              getData={getData}
            />
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
          <TimeBabySit handleDayTimeChange={handleDayTimeChange} />
          <button
            onClick={handleUpdate}
            className="w-[100%] bg-[#389BA7] text-white rounded-3xl font-[400] text-[20px] mt-[65px] h-[40px]"
          >
            Хадгалах
          </button>
        </div>
        <ToastContainer className="toast" />
      </Container>
    </div>
  );
};
