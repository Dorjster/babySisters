import { FilterBabysitter } from "@/components/filter/FilterBabysitter";
import HomeProfile from "@/components/filter/rightCardBar/babysitter/HomeProfile";

export default function babysitter() {
  return (
    <div className="px-[120px] py-10 md:flex gap-10 h-screen">
      <FilterBabysitter />
      <HomeProfile />
    </div>
  );
}
