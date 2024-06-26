"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AxiosInstance } from "@/utils/axiosInstance";
import Link from "next/link";
import { useData } from "@/context/userProvider";
interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const { isLoggedIn } = useData();

  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };
  const handleChangeWithGoogle = () => {
    push("/sign-in");
  };
  useEffect(() => {
    if (isLoggedIn) {
      push("/");
    }
  }, [isLoggedIn, push]);
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
      const { data } = await AxiosInstance.post<string>("/login", {
        email: userdata.email,
        password: userdata.password,
      });

      console.log(data);
      localStorage.setItem("token", data);

      // push("/edit-profile");
      // window.location.reload();

      window.location.href = "/edit-profile";
      return data;
    } catch (error: any) {
      setError(error.response.data);
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center py-14  mb-[350px] h-screen dark:bg-[#31393F]">
      <Card className="w-[450px] h-fit divide-y-2 ">
        <CardHeader className="">
          <CardTitle className="text-center text-[26px] font-[500]">
            Babysits-д тавтай морил
          </CardTitle>
        </CardHeader>
        <CardContent className="p-[30px] flex flex-col gap-[30px] items-center h-fit">
          <Label className="text-[20px]">Нэвтрэх</Label>
          <Input
            required
            name="email"
            type="email"
            placeholder="И-мэйл"
            className="h-[50px] rounded-[20px] border-1px"
            onChange={handleChange}
          />
          <Input
            required
            name="password"
            type="password"
            placeholder="Нууц үг"
            className="h-[50px] rounded-[20px] border-1px"
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
            className="bg-[#389ba7] w-full text-white text-[18px] font-[300] h-[50px] rounded-[25px] hover:bg-[#008291] hover:text-white hover:border-none "
          >
            Үргэлжлүүлэх
          </Button>
          {/* <Button
            onClick={handleChangeWithGoogle}
            variant="outline"
            className="bg-[#389ba7] w-full text-white text-[18px] font-[300] h-[50px] rounded-[25px] hover:bg-[#008291] hover:text-white hover:border-none "
          >
            Continue with Google
          </Button> */}
          {error && (
            <p className="text-center text-red-500 font-sans-serif pt-[-5x]">
              {error}
            </p>
          )}
          <div className="  flex justify-center gap-[10px] text-[black] mt-[10px]">
            <p className="dark:text-white">Шинэ хэрэглэгч үүсгэх?</p>
            <button
              onClick={() => {
                push("/signup");
              }}
              className="font-semibold dark:text-slate-400"
            >
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
