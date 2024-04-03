"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";

const HomeProfile = () => {
  const [babysitterData, setBabysitterData] = useState<ProfileType[]>([]);
  const [infoData, setInfoData] = useState<ProfileType[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.get<ProfileType[]>(
          "/allBabysitters"
        );
        console.log(data);

        setBabysitterData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div className=" h-fit w-full mt-1 flex justify-between ml-[50px] flex-wrap">
      {babysitterData.map((babysitter) => (
        <Card key={babysitter._id} data={babysitter} />
      ))}
      {/* <button className="w-[300px] h-[40px] bg-[#389BA7] rounded-3xl text-white m-auto">
        See all Babysitters
      </button> */}
    </div>
  );
};

export default HomeProfile;
