"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";

const HomeProfile = () => {
  const [parentData, setParentData] = useState<ParentType[]>([]);
  //   const [infoData, setInfoData] = useState<ParentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.get<ParentType[]>("/allParents");
        console.log(data);

        setParentData(data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
    console.log(parentData);
  }, []);

  return (
    <div className=" h-fit w-screen flex flex-wrap">
      {parentData.map((parent) => (
        <Card
          key={parent._id}
          data={parent}
          //   wage={parent.wage}
          //   //   rating={parent.rating}
          //   about={parent.job_description || ""}
        />
      ))}
    </div>
  );
};

export default HomeProfile;
