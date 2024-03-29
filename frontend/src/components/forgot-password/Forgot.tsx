"use client";

import React, { ChangeEvent } from "react";
import { PasswordRequest } from "@/components/forgot-password/PasswordRequest";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NewCode } from "@/components/forgot-password/NewCode";
import { ChangePassword } from "@/components/forgot-password/ChangePassword";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";

type PasswordReset = {
  otp: string;
  email: string;
  password: string;
  rePassword: string;
};

export const Forgot = () => {
  const [userData, setUserData] = useState<Partial<PasswordReset>>({});
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const { push } = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const ChangeComponent = async () => {
    if (step === 0) {
      try {
        const result = await AxiosInstance.post("/forgot", {
          email: userData.email,
        });
        console.log(result);

        if (result.data === "Email not found") {
          setError("Хэрэглэгч олдсонгүй");
          setStep(0);
          return;
        }
        setError("");
        setStep(step + 1);
      } catch (error: any) {
        return error.message;
      }
    } else if (step === 1) {
      const { data } = await AxiosInstance.post("/codeChecker", {
        email: userData.email,
        OTP: userData.otp,
      });
      if (data === "Нууц код зөв байна") {
        setError("");
        setStep(step + 1);
      } else {
        setError("Нууц код буруу байна");
      }
    } else if (step === 2) {
      const { data } = await AxiosInstance.post("/changePassword", {
        email: userData.email,
        password: userData.password,
      });
      if (userData.password !== userData.rePassword) {
        setError("Нууц үг таарахгүй байна");
      } else {
        setError("");

        push("/login");
      }
    }
  };

  return (
    <Card className="w-[606px] h-[fit-content] m-auto mt-[100px]">
      <CardContent className="flex flex-col gap-[15px]">
        <div>
          {step === 0 && <PasswordRequest handleChange={handleChange} />}
          {step === 1 && <NewCode handleChange={handleChange} />}
          {step === 2 && <ChangePassword handleChange={handleChange} />}

          <Button
            onClick={ChangeComponent}
            className="bg-[#389BA7] w-full rounded-3xl h-[48px] mt-[20px] font-normal text-xl text-white"
          >
            Continue
          </Button>
          <div className="flex justify-center">
            {error && <div className="text-red-500 mt-[10px]">{error}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
