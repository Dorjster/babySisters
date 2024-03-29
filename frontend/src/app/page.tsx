import Image from "next/image";
import { Filter } from "@/components/filter/Filter";

export default function Home() {
  return (
    <div className="px-[200px] py-10">
      <Filter/>
    </div>
  );
}
