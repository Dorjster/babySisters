// "use client";
// import NotFound from "@/components/Icons/NotFound";
import RealHome from "@/components/home/realHome";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
// import { currentUser, auth } from "@clerk/nextjs";
import { AxiosInstance } from "@/utils/axiosInstance";
import Head from "next/head";

// env.local dotor bga production id url + /api \\
// let url: string = process.env.NEXT_PUBLIC_PRODUCTION!;

export default function Home() {
  // useEffect(() => {
  //   const getAllCategories = async () => {
  //     try {
  //       const result = await AxiosInstance.get(url);

  //       const { data } = await AxiosInstance.post("/signupBabysitterbyClerk", {
  //         name: result.data?.user.name,
  //         email: result.data?.user.emailAddresses[0].emailAddress,
  //       });

  //       if (typeof window !== "undefined") {
  //         localStorage.setItem("token", data);
  //       }
  //     } catch (err) {
  //       console.log(err, "asd");
  //     }
  //   };
  //   getAllCategories();
  // }, []);

  return (
    <div className="flex-col gap-10">
      <RealHome />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NotFound/> */}
    </div>
  );
}
