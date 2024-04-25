"use client"
// import NotFound from "@/components/Icons/NotFound";
import RealHome from "@/components/home/realHome";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { currentUser, auth } from "@clerk/nextjs";

// env.local dotor bga production id url + /api \\
let url: string = process.env.NEXT_PUBLIC_PRODUCTION!;

// Export create account through google login. \\
export default function Home() {
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const result = await axios.get(url);

    

        const { data } = await axios.post(
          " deployed url + createbyclerk page ni link nemeerei ",
          {
            name: result.data?.user.name,
            email: result.data?.user.emailAddresses[0].emailAddress,
          }
        );

     
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllCategories();
  }, []);

  return (
    <div className="flex-col gap-10">
      <RealHome />
      {/* <NotFound/> */}
    </div>
  );
}
