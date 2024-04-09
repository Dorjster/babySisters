import { FilterParent } from "@/components/filter/FilterParent";
import ParentCard from "@/components/filter/rightCardBar/parent/ParentCard";
export default function parent() {
  return (
    <div className="md:px-[100px] py-10 flex gap-10 ">
      <FilterParent />
      <ParentCard />
    </div>
  );
}
