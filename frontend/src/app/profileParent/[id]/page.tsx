import { ParentProfile } from "@/components/profile/ParentProfile";
import { AxiosInstance } from "@/utils/axiosInstance";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getData = async () => {
    try {
      const { data } = await AxiosInstance.post("/get/parent", {
        id: id,
      });
      return data;
    } catch (error: any) {
      console.log(error);
    }
  };

  const result = await getData();
  console.log(result, "parent result");

  if (!result) {
    throw new Error("data irsengui aldaa garlaa");
  }
  return (
    <div>
      <ParentProfile result={result} />
    </div>
  );
};

export default page;
