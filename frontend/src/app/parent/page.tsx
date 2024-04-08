import { FilterParent } from "@/components/filter/FilterParent";
import ParentCard from "@/components/filter/rightCardBar/parent/ParentCard";
export default function parent() {
  return (
    <div className="px-[100px] py-10 flex gap-10 mt-[100px] mb-[200px]">
      <FilterParent />
      <ParentCard />
    </div>
  );
}
