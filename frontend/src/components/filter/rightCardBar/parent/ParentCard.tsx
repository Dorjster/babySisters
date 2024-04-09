"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { ParentType } from "../../../../..";

import { MouseEvent } from "react";

const ParentCard = () => {
  const [parentData, setParentData] = useState<ParentType[]>([]);
  const router = useRouter();

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
  }, []);
  const getIdHandle = async (event: MouseEvent<HTMLDivElement>) => {
    const { id: CardId } = event.currentTarget;

    const foundParent = parentData.find(({ _id }) => _id === CardId);
    console.log(foundParent);

    router.push(`/profileParent/${foundParent?._id}`);
  };

  return (
    <div className=" h-fit w-full mt-1 flex  flex-wrap">
      {parentData.map((parent) => (
        <div
          key={parent._id}
          onClick={getIdHandle}
          id={parent._id}
          className="cursor-pointer"
        >
          <Card data={parent} />
        </div>
      ))}
    </div>
  );
};

export default ParentCard;
