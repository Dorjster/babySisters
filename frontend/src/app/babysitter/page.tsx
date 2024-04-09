import { FilterBabysitter } from "@/components/filter/FilterBabysitter";
import HomeProfile from "@/components/filter/rightCardBar/babysitter/BabysitterCard";

export default function babysitter() {
  return (
    <div className="px-[100px] py-10 md:flex gap-10 h-screen mt-[100px] mb-[200px]">
      <FilterBabysitter />
      <HomeProfile />
    </div>
  );
}
