import Image from "next/image";
import { Filter } from "@/components/filter/Filter";
import HomeProfile from "@/components/homeProfile/HomeProfile";

export default function Home() {
  return (
    <div className="px-[200px] py-10 flex">
      <Filter/>
      <HomeProfile/>
    </div>
  );
}
