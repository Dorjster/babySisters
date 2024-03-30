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
    <div className="w-[1200px] h-[300px] m-auto mt-1 ">
      <Card data={{ infoData, babysitterData }} />
    </div>
  )
}




