import { FilterParent } from "@/components/filter/FilterParent";
import HomeProfile from "@/components/filter/rightCardBar/parent/HomeProfile";

export default function parent() {
  return (
    <div className="px-[120px] py-10 md:flex gap-10 h-screen">
      <FilterParent />
      <HomeProfile />
    </div>
  );
}
