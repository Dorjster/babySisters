"use client";
import React, { ChangeEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
interface UserData {
  email: string;
  name: string;
  password: string;
  phone: string;
  rePassword: string;
}
export const Signup = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    name: "",
    password: "",
    phone: "",
    rePassword: "",
  });
  const { push } = useRouter();
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
        setError("Бүх талбарыг бөглөнө үү");
      } else {
        if (userdata.password !== userdata.rePassword) {
          setError("Нууц үг тохирохгүй байна");
        }
        const { data } = await AxiosInstance.post<string>(
          "/parent/signup",
          userdata
        );

        console.log(data);
        push("/login");
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
        setError("Бүх талбарыг бөглөнө үү");
      } else {
        if (userdata.password !== userdata.rePassword) {
          setError("Нууц үг тохирохгүй байна");
        }
        const { data } = await AxiosInstance.post<string>("/signup", userdata);

        console.log(data);
        push("/login");
      }
    } catch (error: any) {
      console.error(error.message);
      setError(error.response.data);
    }
  };
  return (
    <div>
      {page === 1 && (
        <div className="flex p-20 items-center justify-center h-[550px] gap-8">
          <Button
            className="border-[1px] border-[#c9e8ec] rounded-[20px] px-6 py-6 hover:bg-[#c9e8ec]"
            onClick={() => {
              setPage(2);
            }}
          >
            Эцэг эхээр бүртгүүлэх
          </Button>
          <Button
            className="  rounded-[20px] px-6 py-6 border-[1px] border-[#c9e8ec] hover:bg-[#c9e8ec]"
            onClick={() => {
              setPage(3);
            }}
          >
            Хүүхэд асрагчаар бүртгүүлэх
          </Button>
        </div>
      )}
      {page === 2 && (
        <div className="flex items-center justify-center py-10">
          <Card className="w-[550px] h-fit divide-y-2  ">
            <CardHeader className="">
              <CardTitle className="text-center text-[30px] font-[500]">
                Babysits-д тавтай морил
              </CardTitle>
            </CardHeader>
            <CardContent className="p-[30px] flex flex-col gap-[50px] ">
              <Label htmlFor="email" className="text-[22px] self-center">
                Эцэг эхээр бүртгүүлэх
              </Label>
              <Input
                name="name"
                type="name"
                placeholder="Нэр"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="email"
                type="email"
                placeholder="И-мэйл"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="phone"
                type="phone"
                placeholder="Утас"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="password"
                type="password"
                placeholder="Нууц үг"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="rePassword"
                type="password"
                placeholder="Нууц үг давтах"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />{" "}
              <Button
                onClick={handleCreateParent}
                variant="outline"
                className="bg-[#389BA7] w-full text-white text-[20px] font-[300] h-[60px] rounded-[25px] hover:border-[#389BA7] "
              >
                Үргэлжлүүлэх
              </Button>
              {error && (
                <p className=" text-center text-red-500 font-sans-serif ">
                  {error}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
      {page === 3 && (
        <div className="flex items-center justify-center py-10">
          <Card className="w-[550px] h-fit divide-y-2">
            <CardHeader className="">
              <CardTitle className="text-center text-[30px] font-[500]">
                Babysits-д тавтай морил
              </CardTitle>
            </CardHeader>
            <CardContent className="p-[30px] flex flex-col gap-[30px] ">
              <Label htmlFor="email" className="text-[25px]">
                Хүүхэд асрагчаар бүртгүүлэх
              </Label>
              <Input
                name="name"
                type="name"
                placeholder="Нэр"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="email"
                type="email"
                placeholder="И-мэйл"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="phone"
                type="phone"
                placeholder="Утас"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="password"
                type="password"
                placeholder="Нууц үг"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Input
                required
                name="rePassword"
                type="rePassword"
                placeholder="Нууц үг давтах"
                className="h-[60px] rounded-[25px] border-1px"
                onChange={handleChange}
              />
              <Button
                onClick={handleCreateNanny}
                variant="outline"
                className="bg-[#389BA7] w-full text-white text-[20px] font-[300] h-[60px] rounded-[25px] hover:bg-[#008291] hover:text-white hover:border-none "
              >
                Үргэлжлүүлэх
              </Button>{" "}
              {error && (
                <p className=" text-center text-red-500 font-sans-serif ">
                  {error}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
