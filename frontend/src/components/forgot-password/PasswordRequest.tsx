import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type Email = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordRequest = (props: Email) => {
  const { handleChange } = props;
  return (
    <div className="flex flex-col gap-[15px] mt-[20px]">
      <div>
        <CardTitle className="font-medium text-2xl">Forgot password?</CardTitle>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-normal text-base text-gray-600">
            Таны имэйл хаяг руу нэг удаагийн сэргээх код илгээх болно.
          </p>
          <Input
            name="email"
            placeholder="Имэйл"
            className="rounded-2xl h-[48px]  text-base font-normal"
            onChange={handleChange}
          ></Input>

          {/* <hr />
          <div className="flex justify-center gap-[10px]">
            <p>Don't have an account?</p>
            <button className="font-semibold"> Sign up</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
