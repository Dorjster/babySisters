"use client";
import React, { ChangeEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";
interface UserData {
  email: string;
  name: string;
  password: string;
  phone: string;
  Repassword: string;
}
export const Signup = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    name: "",
    password: "",
    phone: "",
    Repassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };
  const handleCreateParent = async () => {
    try {
      const emptyFields = Object.entries(userdata).filter(
        ([key, value]) => !value.trim()
      );
      if (emptyFields.length > 0) {
        setError("Please fill in all fields");
      } else {
        if (userdata.password !== userdata.Repassword) {
          setError("Passwords do not match");
        }
        const { data } = await AxiosInstance.post<string>(
          "/parent/signup",
          userdata
        );

        console.log(data);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const handleCreateNanny = async () => {
    try {
      const emptyFields = Object.entries(userdata).filter(
        ([key, value]) => !value.trim()
      );
      if (emptyFields.length > 0) {
        setError("Please fill in all fields");
      } else {
        if (userdata.password !== userdata.Repassword) {
          setError("Passwords do not match");
        }
        const { data } = await AxiosInstance.post<string>("/signup", userdata);

        console.log(data);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div>
      {page === 1 && (
        <div className="flex ">
          <Button
            onClick={() => {
              setPage(2);
            }}
          >
            sign as a parent
          </Button>
          <Button
            onClick={() => {
              setPage(3);
            }}
          >
            sign as a nanny
          </Button>
        </div>
      )}
      {page === 2 && (
        <Card className="w-[800px] h-fit divide-y-2 ">
          <CardHeader className="">
            <CardTitle className="text-center text-[30px] font-[500]">
              Welcome to Babysits
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[30px] flex flex-col gap-[50px] ">
            <Label htmlFor="email" className="text-[25px]">
              sign up as a parent
            </Label>
            <Input
              name="name"
              type="name"
              placeholder="Name"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="phone"
              type="phone"
              placeholder="Phone"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="password"
              type="password"
              placeholder="Password"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="Repassword"
              type="Repassword"
              placeholder="Re - Password"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />{" "}
            <Button
              onClick={handleCreateParent}
              variant="outline"
              className="bg-[#0077b6] w-full text-white text-[20px] font-[300] h-[60px] rounded-[25px] "
            >
              Continue
            </Button>
            {error && (
              <p className=" text-center text-red-500 font-sans-serif ">
                {error}
              </p>
            )}
          </CardContent>
        </Card>
      )}
      {page === 3 && (
        <Card className="w-[800px] h-fit divide-y-2">
          <CardHeader className="">
            <CardTitle className="text-center text-[30px] font-[500]">
              Welcome to Babysits
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[30px] flex flex-col gap-[30px] ">
            <Label htmlFor="email" className="text-[25px]">
              sign up as a parent
            </Label>
            <Input
              name="name"
              type="name"
              placeholder="Name"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="phone"
              type="phone"
              placeholder="Phone"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="password"
              type="password"
              placeholder="Password"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Input
              required
              name="Repassword"
              type="Repassword"
              placeholder="Re - Password"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Button
              onClick={handleCreateNanny}
              variant="outline"
              className="bg-[#389BA7] w-full text-white text-[20px] font-[300] h-[60px] rounded-[25px] "
            >
              Continue
            </Button>{" "}
            {error && (
              <p className=" text-center text-red-500 font-sans-serif ">
                {error}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
