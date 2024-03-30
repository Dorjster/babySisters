import React from "react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const AboutMe = () => {
  //   const [location, setLocation] = useState("");
  //   const [array, setArray] = useState([]);
  //   useEffect(() => {
  //     const gitFetcher = async () => {
  //       const url = `https://z4ryw4kny0.execute-api.ap-southeast-1.amazonaws.com/production/searchByAddress?address=${location}`;

  //       const result = await axios(url);
  //       setArray(result.data.data.slice(0, 5));

  //       // setArray(data.slice(0, 3));
  //     };
  //     gitFetcher();
  //   }, [location]);
  return (
    <div className="flex flex-col gap-4 mt-[45px]">
      <h3 className="text-2xl font-medium text-gray-700">Миний тухай</h3>
      <div className="flex flex-col gap-[45px] ">
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">
            Өөрийн нэр
          </p>
          <Input className="w-[100%] rounded-2xl border-zinc-200" type="text" />
        </div>
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">
            Өөрийнхөө тухай товч мэдээлэлийг бичнэ үү
          </p>
          <textarea className="w-[100%] h-[130px] rounded-2xl border-zinc-200 border-[1px] p-3 " />
        </div>
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">Хаяг</p>
          <Input className="w-[100%] rounded-2xl text-lg border-zinc-200" />
          {/* <div className="w-[100%]  bg-red-300">
            {array.map((datas, id) => {
              return (
                <div className="" key={id}>
                  {datas}
                </div>
              );
            })}
          </div> */}
          <p className="text-gray-300">
            Бид таны хаягийг бусдад харуулахгүй байх болно
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">
            Төрсөн өдөр
          </p>
          <Input
            className="w-[100%] rounded-2xl text-lg border-zinc-200 "
            type="date"
            value="aa"
          />

          <p className="text-gray-300">
            Бид таны төрсөн өдрийг бусдад харуулахгүй байх болно
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">
            Та ямар хэлээр ярьдаг вэ?
          </p>
          <Select>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 ">
              <SelectValue placeholder="Хэлээ сонгоно уу" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Монгол хэл">Монгол хэл</SelectItem>
                <SelectItem value="Англи хэл">Англи хэл</SelectItem>
                <SelectItem value="Япон хэл">Япон хэл</SelectItem>
                <SelectItem value="Орос хэл">Орос хэл</SelectItem>
                <SelectItem value="Хятад хэл">Хятад хэл</SelectItem>
                <SelectItem value="Герман хэл">Герман хэл</SelectItem>
                <SelectItem value="Франц хэл">Франц хэл</SelectItem>
                <SelectItem value="Солонгос хэл">Солонгос хэл</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">
            Таны боловсролын зэрэг?
          </p>
          <Select>
            <SelectTrigger className="w-[100%] border-zinc-200 rounded-2xl text-gray-500 ">
              <SelectValue placeholder="Боловсролын зэрэгээ сонгоно уу" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Бүрэн">Бүрэн</SelectItem>
                <SelectItem value="Бүрэн дунд">Бүрэн дунд</SelectItem>
                <SelectItem value="Бакалавр">Бакалавр</SelectItem>
                <SelectItem value="Магистр">Магистр</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-gray-600 text-lg font-[500] mb-[15px]">
            Өөрийгөө 3 үгээр тодорхойлно уу
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
