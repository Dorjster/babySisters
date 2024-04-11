"use client";

import { useEffect, useState } from "react";
import { connect } from "socket.io-client";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";

const socket = connect("http://localhost:8000");

export const Chat = () => {
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const joinRoom = () => {
        socket.emit("join_con", room);
    };

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);

    console.log(messageReceived);

    return (
        <div className="flex gap-20 px-[100px] pt-[50px]">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 w-[300px] py-2 border rounded-xl px-2">
                    <div>
                        <FiSearch className="text-[25px] text-slate-500" />{" "}
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none w-full"
                    />
                </div>
                <div className="flex justify-between gap-[20px] bg-slate-50 p-2 rounded-2xl">
                    <div className="flex gap-4">
                        <div className="w-[50px] h-[50px] rounded-[50%] relative overflow-hidden">
                            <Image
                                src="/profile.png"
                                fill
                                alt="Photo"
                                sizes="30px"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        <div>
                            <h1 className=" text-[15px] text-slate-90 font-medium">
                                Aiszu
                            </h1>
                            <p className="text-slate-600">
                                sainuu gesimuu aii heldeeee!!!
                            </p>
                        </div>
                    </div>
                    <div className="text-slate-500">1 min</div>
                </div>
                <div className="flex justify-between gap-[20px] bg-slate-50 p-2 rounded-2xl">
                    <div className="flex gap-4">
                        <div className="w-[50px] h-[50px] rounded-[50%] relative overflow-hidden">
                            <Image
                                src="/profile.png"
                                fill
                                alt="Photo"
                                sizes="30px"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        <div>
                            <h1 className=" text-[15px] text-slate-90 font-medium">
                                Aiszu
                            </h1>
                            <p className="text-slate-600">
                                sainuu gesimuu aii heldeeee!!!
                            </p>
                        </div>
                    </div>
                    <div className="text-slate-500">1 min</div>
                </div>
                <div className="flex justify-between gap-[20px] bg-slate-50 p-2 rounded-2xl">
                    <div className="flex gap-4">
                        <div className="w-[50px] h-[50px] rounded-[50%] relative overflow-hidden">
                            <Image
                                src="/profile.png"
                                fill
                                alt="Photo"
                                sizes="30px"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        <div>
                            <h1 className=" text-[15px] text-slate-90 font-medium">
                                Aiszu
                            </h1>
                            <p className="text-slate-600">
                                sainuu gesimuu aii heldeeee!!!
                            </p>
                        </div>
                    </div>
                    <div className="text-slate-500">1 min</div>
                </div>
            </div>

            <div className="flex flex-col gap-10 justify-between h-screen">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 xjustify-center pt-10">
                        <div className="w-[70px] h-[70px] rounded-[50%] relative overflow-hidden">
                            <Image
                                src="/profile.png"
                                fill
                                alt="Photo"
                                sizes="50px"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        <div className="">
                            <h1 className="font-medium">Aiszu</h1>
                            <div className="text-[14px] text-slate-600">
                                Online
                            </div>
                        </div>
                    </div>
                    <div>
                        ene chat hesiig backend yah iih tgeed map scroll baahan
                        ym hiih bolhoor uchriin old hiiisen deer baihaa hugshuun
                        enng bol shuud urchinlduu gehdee daraana dhiad uuruur
                        hiih ajil garh ym bnaa Nam Uu Naa
                    </div>
                </div>

                <div className="border-t-[1px] border-slate-200 flex justify-between py-4 sticky bottom-1 ">
                    <div>
                        <input
                            type="text"
                            placeholder="whrite your messege.."
                            className="text-slate-700 outline-none"
                        />
                    </div>
                    <div className="flex items-center justify-center rounded-full p-2 bg-blue-500">
                        <IoIosSend className="text-white text-[26px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
