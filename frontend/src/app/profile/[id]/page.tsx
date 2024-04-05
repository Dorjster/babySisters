import React from "react";
import { BabysitterProfile } from "@/components/profile/BabysitterProfile";

import { AxiosInstance } from "@/utils/axiosInstance";

type All = {
  result: ProfileType[];
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getData = async () => {
    try {
      const { data } = await AxiosInstance.post("/get/babysitter", {
        id: id,
      });

      return data;
    } catch (error: any) {
      console.log(error);
    }
  };
  const result = await getData();
  //   if (!result) {
  //     throw new Error("data irsengui aldaa garlaa");
  //   }
  console.log(result, "res");

  return (
    <div>
      <BabysitterProfile result={result as ProfileType} />
    </div>
  );
};

export default page;
