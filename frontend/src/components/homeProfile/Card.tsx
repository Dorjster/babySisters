"use client"

import React from 'react'
import { Rating, Box, Typography } from '@mui/material';


type IntrinsicAttributes = any;

type Datas = {
  data: ProfileType[] & IntrinsicAttributes;
};

export default function Card(props: Datas) {
  const [value, setValue] = React.useState<number | null>(2);
  const {data} = props
  
  return (
  <div>
    {/* {data?.slice(0).map((el: ProfileType, index: number) => ( */}
      <div className="w-[400px] h-[220px] flex rounded-2xl overflow-hidden shadow-lg">
        <div className="w-[230px] h-full flex flex-col justify-between">
          <img src="/profile.jpeg" className="w-[230px] h-[180px] rounded-e-xl"/>

          <Box
            sx={{
              marginLeft:"30px",
              '& > legend': { mt: 2 },
              
            }}
          >
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </div>

        <div className="w-[150px] h-[150px] ml-4">
            <div className="text-lg font-semibold mb-5">Name</div>
            <div className="w-full h-[120px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, placeat?</div>
          </div>
      </div>
    {/* ))} */}
  </div>)
  
}
