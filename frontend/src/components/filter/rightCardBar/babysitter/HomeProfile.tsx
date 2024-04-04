"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import babysitter from "@/app/babysitter/page";

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
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
    console.log(babysitterData);
  }, []);

  return (
    <div className=" h-fit w-screen  flex  flex-wrap">
      {babysitterData.map((babysitter) => (
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
      ))}
    </div>
  );
};

export default HomeProfile;
