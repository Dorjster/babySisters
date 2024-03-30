"use client"

import React from 'react'
import Card from './Card'
import axios from 'axios';


export const GetAllData = async () => {

  try {
    const { infoData } = await axios.get<ProfileType[], any>("http://localhost:8000/info");
    const { babysitterData } = await axios.get<ProfileType[], any>("http://localhost:8000//user/babysitter");
    //   const { data } = await axios.get<ProfileType[]>("http://localhost:8000/review");

    return { infoData, babysitterData };
  } catch (error: any) {
    console.log(error.message);
  }
};




export default async function HomeProfile() {
  const infoData: any = await GetAllData();
  const babysitterData: any = await GetAllData();

  return (
    <div className="w-[1200px] h-fit m-auto mt-1 flex flex-col gap-10 border">
      <Card data={{ infoData, babysitterData }} />

      <button className="w-[300px] h-[40px] bg-[#389BA7] rounded-3xl text-white m-auto">See all Babysitters</button>
    </div>
  )
}




