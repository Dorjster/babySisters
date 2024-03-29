import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type OTP = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const NewCode = (props: OTP) => {
  const { handleChange } = props;
  return (
    <div className="flex flex-col gap-[15px] mt-[20px]">
      <div>
        <CardTitle className="font-medium text-2xl">Нууц код оруулах</CardTitle>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-normal text-base text-gray-600">
            Та имэйлээр ирсэн нууц кодыг оруулна уу!
          </p>
          <Input
            name="otp"
            placeholder="Нууц код оруулах"
            className="rounded-2xl h-[48px]  text-base font-normal"
            onChange={handleChange}
          ></Input>
        </div>
      </div>
    </div>
  );
};
