import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type Password = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ChangePassword = (props: Password) => {
  const { handleChange } = props;
  return (
    <div className="flex flex-col gap-[15px] mt-[20px]">
      <div>
        <CardTitle className="font-medium text-2xl">Нууц үг шинэчлэх</CardTitle>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-normal text-base text-gray-600">
            Шинэ нууц үг үүсгэнэ үү!
          </p>
          <Input
            name="password"
            placeholder="Шинэ нууц үг "
            type="password"
            className="rounded-2xl h-[48px]  text-base font-normal"
            onChange={handleChange}
          ></Input>
          <Input
            name="rePassword"
            placeholder="Шинэ нууц үг давтах"
            type="password"
            className="rounded-2xl h-[48px]  text-base font-normal"
            onChange={handleChange}
          ></Input>
        </div>
      </div>
    </div>
  );
};
