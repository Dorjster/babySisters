"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { ParentType } from "../../../../..";

import { MouseEvent } from "react";
import { useData } from "@/context/userProvider";

const ParentCard = () => {
  const { loggedInUserData } = useData();
  const [parentData, setParentData] = useState<ParentType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.get<ParentType[]>("/allParents");
        console.log(data, "full");

        const filteredData = data.filter(
          (parent) => parent._id !== loggedInUserData._id
        );
        console.log(filteredData, "asd");

        setParentData(filteredData);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, [loggedInUserData]);
  const getIdHandle = async (event: MouseEvent<HTMLDivElement>) => {
    const { id: CardId } = event.currentTarget;

    const foundParent = parentData.find(({ _id }) => _id === CardId);
    console.log(foundParent);

    router.push(`/profileParent/${foundParent?._id}`);
  };

  return (
    <div className=" h-fit w-full mt-1 flex flex-wrap  pl-10  gap-8">
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
