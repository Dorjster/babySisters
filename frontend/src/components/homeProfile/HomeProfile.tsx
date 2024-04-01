// import React from "react";
// import { Card } from "./Card";
// import axios from "axios";
// import Home from "@/app/page";
// import { AxiosInstance } from "@/utils/axiosInstance";

// // export const GetAllData = async () => {
// //   try {
// //     const { infoData } = await axios.get<ProfileType[], any>(
// //       "http://localhost:8000/info"
// //     );
// //     const { babysitterData } = await AxiosInstance.get<ProfileType[], any>(
// //       "/allBabysitters"
// //     );

// //     //   const { data } = await axios.get<ProfileType[]>("http://localhost:8000/review");

// //     return { infoData, babysitterData };
// //   } catch (error: any) {
// //     console.log(error.message);
// //   }
// // };

// export const AllBaby = async () => {
//   try {
//     const { data } = await AxiosInstance.get<ProfileType[]>("/allBabysitters");
//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//     // console.log("asd");
//   }
// };

// const HomeProfile = async () => {
//   // const infoData: any = await GetAllData();
//   // const babysitterData = await AllBaby();

//   return (
//     <div className="w-[1200px] h-fit m-auto mt-1 flex flex-col gap-10 border">
//       <Card />

//       <button className="w-[300px] h-[40px] bg-[#389BA7] rounded-3xl text-white m-auto">
//         See all Babysitters
//       </button>
//     </div>
//   );
// };

// export default HomeProfile;
"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";
import Home from "@/app/page";
import { AxiosInstance } from "@/utils/axiosInstance";

const HomeProfile = () => {
  const [babysitterData, setBabysitterData] = useState<ProfileType[]>([]);

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
