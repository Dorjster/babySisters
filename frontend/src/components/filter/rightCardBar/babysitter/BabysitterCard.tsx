"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import babysitter from "@/app/babysitter/page";
import { decodeToken } from "@/utils/decodeToken";
import Link from "next/link";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
const HomeProfile: React.FC = () => {
  const [babysitterData, setBabysitterData] = useState<ProfileType[]>([]);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.get<ProfileType[]>(
          "/allBabysitters"
        );
        console.log(data);

        setBabysitterData(data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();

    // const getUserId = async () => {
    //     try {
    //         if (token) {
    //             const { data } = await AxiosInstance.post("/getUserId", {
    //                 token: token,
    //             });
    //             setToken(token);
    //             setUserId(data);
    //         }
    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // };

    // getUserId();

    // const getRole = async () => {
    //     try {
    //         const { data } = await AxiosInstance.post("/get/babysitter", {
    //             id: userId,
    //         });

    //         setRole(data);
    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // };

    // getRole();
  }, []);

  const getIdHandle = async (event: MouseEvent<HTMLDivElement>) => {
    const { id: CardId } = event.currentTarget;

    const foundBabysit = babysitterData.find(({ _id }) => _id === CardId);

    router.push(`/profile/${foundBabysit?._id}`);
  };

  return (
    <div className=" h-fit w-screen  flex  flex-wrap">
      {babysitterData.map((babysitter) => (
        <div key={babysitter._id} onClick={getIdHandle} id={babysitter._id}>
          <Card
            key={babysitter._id}
            data={babysitter}
            wage={babysitter.info_id.wage}
            rating={babysitter.info_id.rating}
            about={babysitter.about || ""}
            driver={babysitter.info_id.driver_license}
            car={babysitter.info_id.car}
            smoker={babysitter.info_id.smoker}
            exp={babysitter.info_id.year_of_experience}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeProfile;
