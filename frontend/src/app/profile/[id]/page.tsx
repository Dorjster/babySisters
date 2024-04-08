import React from "react";
import { BabysitterProfile } from "@/components/profile/BabysitterProfile";

import { AxiosInstance } from "@/utils/axiosInstance";

type All = {
  result: ProfileType[];
};

const page = async ({ params }: { params: { id: string } }) => {
  console.log("params:", params); // Log params object
  const { id } = params;
  console.log(id);

  const getData = async () => {
    try {
      const { data } = await AxiosInstance.post("/get/babysitter", {
        id: id,
      });
      console.log("data", data);

      return data;
    } catch (error: any) {
      console.log(error);
    }
  };
  const result = await getData();
  if (!result) {
    throw new Error("data irsengui aldaa garlaa");
  }

  return (
    <div>
      <BabysitterProfile result={result} />
    </div>
  );
};

export default page;
