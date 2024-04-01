"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AxiosInstance } from "@/utils/axiosInstance";
interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };

  // const handleLogin = async () => {
  //   try {
  //     const { data } = await AxiosInstance.post("/loginFirst", {
  //       email: userdata.email,
  //     });
  //     if (data === "user not found") {
  //       setError("User not found");
  //       return;
  //     }
  //     console.log(data);

  //     setName(data?.name);

  //     setPage(2);
  //     return data;
  //   } catch (error: any) {
  //     console.error(error.message);
  //   }
  // };

  const handleLogin2 = async () => {
    try {
      // if (userdata.email === "" || userdata.password === "") {
      //   setError("И-майл эсвэл нууц үг хоосон байна.");
      // }

      const { data } = await AxiosInstance.post<string>("/login", {
        email: userdata.email,
        password: userdata.password,
      });

      if (data === "Нэвтрэхээсээ өмнө бүртгүүлнэ үү") {
        setError("Нэвтрэхээсээ өмнө бүртгүүлнэ үү");
      }
      if (data === "Нууц үгээ эсвэл майл ээ шалгаад дахин оролдоно уу") {
        setError("Нууц үгээ эсвэл майл ээ шалгаад дахин оролдоно уу");
      }
      console.log(data);

      return data;
    } catch (error: any) {
      console.error(error.message);
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
            <p className="text-center text-red-500 font-sans-serif mb-[-20px] absolute top-[615px]">
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
      {/* // )} */}
      {/* {page === 2 && (
        <Card className="w-[800px] h-[430px] divide-y-2 ">
          <CardHeader className="">
            <CardTitle className="text-center text-[20px] font-[300] gap-2">
              <Label>Тавтай морил, </Label>
              {name}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[30px] flex flex-col gap-[50px] ">
            <Input
              required
              name="password"
              type="password"
              placeholder="Нууц үг"
              className="h-[60px] rounded-[25px] border-1px"
              onChange={handleChange}
            />
            <Button
              onClick={handleLogin2}
              variant="outline"
              className="bg-[#389ba7] w-full text-white text-[20px] font-[300] h-[60px] rounded-[25px] "
            >
              Үргэлжлүүлэх
            </Button>{" "}
            {error && (
              <p className="text-center text-red-500 font-sans-serif mt-[-35px]">
                {error}
              </p>
            )}
            <Button
              className="mt-[-35px]"
              onClick={() => {
                push("/password-request");
              }}
            >
              Нууц үг мартсан?
            </Button>
          </CardContent>
        </Card>
      )} */}
    </div>
  );
};
