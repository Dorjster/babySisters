"use client";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { TbCurrencyTugrik } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import {
    FaAddressCard,
    FaCar,
    FaTransgender,
    FaUserGraduate,
    FaChild,
} from "react-icons/fa";
import { GiStoneCrafting } from "react-icons/gi";
import { ScheduleBaby } from "../editBabySitProfile/ScheduleBaby";
import { LuShare } from "react-icons/lu";
import {
    MdLocationOn,
    MdVerified,
    MdOutlineSmokeFree,
    MdBabyChangingStation,
} from "react-icons/md";
import Image from "next/image";
import { Rating } from "@mui/material";
import babysitter from "@/app/babysitter/page";
import { CheckedSchedule } from "./CheckedSchedule";


export const BabysitterProfile = () => {
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState<ProfileType | undefined>(undefined);

    useEffect(() => {
        const token: string | null = localStorage.getItem("token"); 

        const getUserId = async () => {
            try {
                if (token) {
                    const { data } = await AxiosInstance.post("/getUserId", {
                        token: token,
                    });
                    setToken(token);
                    setUserId(data);
                }
            } catch (error: any) {
                console.log(error);
            }
        };

        getUserId();

        const getData = async () => {
            try {
                const { data } = await AxiosInstance.post("/get/babysitter", {
                    id: userId,
                });

                setUserData(data);
            } catch (error: any) {
                console.log(error);
            }
        };

        getData();

        // const userId = getUserData();
        // console.log("11", userId);
    });

    return (
        <div className="bg-gradient-to-b from-[#c9e8ec] to-white h-fit flex justify-start py-32 px-[400px]">
            <div className="w-[60%]">
                <div className="flex border-b-[1px] flex-col gap-4 border-black pb-[40px]">
                    <p className="text-[28px] ">Миний тухай</p>
                    <p className="overflow-wrap break-word">
                        {userData?.about}
                    </p>
                    <div className="flex gap-6 pt-4">
                        <div className="flex gap-8">
                            <div className="flex items-center gap-1 text-[20px] ">
                                <MdBabyChangingStation
                                    className="text-[#008291]"
                                    size={24}
                                />
                                <div>
                                    {userData?.info_id.year_of_experience} жил
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[20px]">
                                <FaTransgender
                                    className="text-[#008291]"
                                    size={24}
                                />
                                {userData?.gender === true ? (
                                    <div>Эмэгтэй</div>
                                ) : (
                                    <div>Эрэгтэй</div>
                                )}
                            </div>
                            <div className="flex items-center gap-1 text-[20px]">
                                <MdLocationOn
                                    className="text-[#008291]"
                                    size={24}
                                />
                                {userData?.address}
                            </div>
                            <div className="flex items-center gap-1 text-[20px]">
                                <FaUserGraduate
                                    className="text-[#008291]"
                                    size={24}
                                />
                                {userData?.info_id.education}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="border-b-[1px] border-black py-10 flex gap-10">
                    <div>
                        <h1 className="text-[25px] pb-5">Ур чадвар</h1>
                        <div className="bg-[#edf7f8] rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
                            {userData?.info_id.skills?.map((el, index) => (
                                <div className="flex gap-2 bg-[#c9e8ec] shadow-md shadow-[#c5c5c5] w-fit rounded-xl px-4 py-2 text-black" key={index}>
                                   {el}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[25px] pb-5">Зан чанар</h1>
                        <div className="bg-[#edf7f8] rounded-2xl px-8 py-4 flex w-[400px] gap-[30px] text-[18px] flex-wrap">
                            {userData?.info_id.character?.map((el, index) => (
                                <div className="flex gap-2 bg-[#c9e8ec] shadow-md shadow-[#c5c5c5] w-fit rounded-xl px-4 py-2 text-black" key={index}>
                                   {el}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-24">
                    <CheckedSchedule />
                </div>
                <div className="flex flex-wrap gap-8 border-t-[1px] border-black py-10">
                    <div className="flex flex-col gap-4 bg-[#c9e8ec] w-[380px] rounded-2xl p-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 ">
                                <div className="flex items-center justify-center">
                                    <Image
                                        className="rounded-full"
                                        src="/Mother.avif"
                                        height={50}
                                        width={50}
                                        alt="photo"
                                    />
                                </div>
                                <h1 className="text-[20px]">my name is</h1>
                            </div>
                            <Rating
                                // sx={{ color: "#59BEC9" }}
                                name="read-only"
                                // value=""
                                readOnly
                            />
                        </div>
                        <p>comments:sdfsdfsdfsdfsdfsdf</p>
                            <div>Feb,13,2023</div>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#c9e8ec] w-[380px] rounded-2xl p-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 ">
                                <div className="flex items-center justify-center">
                                    <Image
                                        className="rounded-full"
                                        src="/Mother.avif"
                                        height={50}
                                        width={50}
                                        alt="photo"
                                    />
                                </div>
                                <h1 className="text-[20px]">my name is</h1>
                            </div>
                            <Rating
                                // sx={{ color: "#59BEC9" }}
                                name="read-only"
                                // value=""
                                readOnly
                            />
                        </div>
                        <p>comments:sdfsdfsdfsdfsdfsdf</p>
                            <div>Feb,13,2023</div>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#c9e8ec] w-[380px] rounded-2xl p-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 ">
                                <div className="flex items-center justify-center">
                                    <Image
                                        className="rounded-full"
                                        src="/Mother.avif"
                                        height={50}
                                        width={50}
                                        alt="photo"
                                    />
                                </div>
                                <h1 className="text-[20px]">my name is</h1>
                            </div>
                            <Rating
                                // sx={{ color: "#59BEC9" }}
                                name="read-only"
                                // value=""
                                readOnly
                            />
                        </div>
                        <p>comments:sdfsdfsdfsdfsdfsdf</p>
                            <div>Feb,13,2023</div>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#c9e8ec] w-[380px] rounded-2xl p-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 ">
                                <div className="flex items-center justify-center">
                                    <Image
                                        className="rounded-full"
                                        src="/Mother.avif"
                                        height={50}
                                        width={50}
                                        alt="photo"
                                    />
                                </div>
                                <h1 className="text-[20px]">my name is</h1>
                            </div>
                            <Rating
                                // sx={{ color: "#59BEC9" }}
                                name="read-only"
                                // value=""
                                readOnly
                            />
                        </div>
                        <p>comments:sdfsdfsdfsdfsdfsdf</p>

                        <div>Feb,13,2023</div>

                    </div>
                </div>
                <div className="flex flex-col ">
                    <div>
                        <h1 className="font-medium">Сэтгэгдэл үлдээх</h1>
                        <div>
                            <Rating
                                sx={{ color: "#59BEC9" }}
                                name="read-only"
                                // value=""
                                readOnly
                            />
                        </div>
                    </div>
                    <div className=" w-[530px] flex items-center py-2 border-2 rounded-2xl px-2 border-slate-400">
                        <input
                            className=" w-[450px] outline-none "
                            placeholder="Comment"
                            type="text "
                        />
                        <button className="bg-[#c9e8ec] text-black rounded-xl py-[2px] px-4">
                            Илгээх
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[40%] flex flex-col items-center  gap-10">
                <div className="">
                    <Image
                        className="rounded-full"
                        src="/Mother.avif"
                        height={200}
                        width={300}
                        alt="profile"
                    />
                </div>
                <div className="text-[18px]">
                    <div className="flex items-center justify-center gap-4 ">
                        <h1 className="text-[26px]">{userData?.name}</h1>
                        {userData?.verification && (
                            <MdVerified className="text-[#008291]" size={25} />
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            {userData?.info_id.rating && (
                                <Rating
                                    // sx={{ color: "#59BEC9" }}
                                    name="read-only"
                                    defaultValue={userData.info_id.rating}
                                    readOnly
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex gap-4 bg-[#edf7f8] items-center justify-center rounded-2xl py-2 px-4 mt-[20px]">
                        {userData?.info_id.smoker === false && (
                            <MdOutlineSmokeFree className="h-6 w-6 text-[#008291]" />
                        )}
                        {userData?.info_id.car === true && (
                            <FaCar className="h-6 w-6 text-[#008291]" />
                        )}
                        {userData?.info_id.driver_license === true && (
                            <FaAddressCard className="h-6 w-6 text-[#008291]" />
                        )}
                        {userData?.info_id.has_children === true && (
                            <FaChild className="h-6 w-6 text-[#008291]" />
                        )}
                    </div>
                </div>

                <div className="bg-[#edf7f8] w-fill flex flex-col gap-3 rounded-2xl px-2 py-4 sticky top-24 ">
                    <h1 className="text-[20px] flex gap-1 items-center justify-center">
                        <TbCurrencyTugrik />
                        {userData?.info_id.wage}/цагт
                    </h1>
                    <button className="text-white bg-[#008291] rounded-[20px] w-[200px] px-6 py-1 mx-10">
                        Холбогдох {}
                    </button>
                </div>
            </div>
        </div>
    );
};
