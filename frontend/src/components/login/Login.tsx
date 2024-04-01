"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AxiosInstance } from "@/utils/axiosInstance";
import Link from "next/link";
interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    password: ""
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };


  const handleLogin2 = async () => {
    try {
      // if (userdata.email === "" || userdata.password === "") {
      //   setError("И-майл эсвэл нууц үг хоосон байна.");
      // }

      const {data} = await AxiosInstance.post("/login", {
          email: userdata.email,
          password: userdata.password,
        }
      )
      if (data === "Нэвтрэхээсээ өмнө бүртгүүлнэ үү") {
        setError("Нэвтрэхээсээ өмнө бүртгүүлнэ үү");
      } else if (data === "Нууц үгээ эсвэл и-мэйл хаягаа шалгаад дахин оролдоно уу") {
        setError("Нууц үгээ эсвэл и-мэйл хаягаа шалгаад дахин оролдоно уу");
      }

      localStorage.setItem("token", data);

      setError("");
      push("/");

    } catch (error: any) {
      console.log(error.message);
      
  
    }
  };
  return (
    <div className="flex items-center justify-center py-14">

      <Card className="w-[550px] h-[570px] divide-y-2 ">
        <CardHeader className="">
          <CardTitle className="text-center text-[30px] font-[500]">
            Babysits-д тавтай морил
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[30px] flex flex-col gap-[30px] items-center ">
          <Label className="text-[20px]">Нэвтрэх</Label>
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
            name="password"
            type="password"
            placeholder="Нууц үг"
            className="h-[60px] rounded-[25px] border-1px"
            onChange={handleChange}
          />
          <Button
            className="mt-[-35px]"
            onClick={() => {
              push("/password-request");
            }}
          >
            Нууц үг мартсан?
          </Button>
          
            <Button
              onClick={handleLogin2}
              variant="outline"
              className="bg-[#389ba7] w-full text-white text-[20px] font-[300] h-[60px] rounded-[25px] hover:bg-[#008291] hover:text-white hover:border-none "
              >
              Үргэлжлүүлэх
            </Button>
          
          {error && (
            <p className="text-center text-red-500 font-sans-serif  mt-[-35px]">
              {error}
            </p>
          )}
          <div className="  flex justify-center gap-[10px] text-[black] mt-[10px]">
            <p>Шинэ хэрэглэгч үүсгэх?</p>
            <button
              onClick={() => {
                push("/signup");
              }}
              className="font-semibold"
            >
              {" "}
              Бүртгүүлэх
            </button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};
