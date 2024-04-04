"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import babysitter from "@/app/babysitter/page";

const ParentCard = () => {
  const [parentData, setParentData] = useState<ParentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.get<ParentType[]>(
          "/allParents"
        );
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
    <div className=" h-fit w-full mt-1 flex  flex-wrap">
      {parentData.map((parent) => (
        <Card
          key={parent._id}
          data={parent}
        />
      ))}
    </div>
  );
};

export default ParentCard;
