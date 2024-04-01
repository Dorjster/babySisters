import { FilterParent } from "@/components/filter/FilterParent";

export default function parent() {
  return (
    <div className="px-[120px] py-10 flex gap-10">
      <FilterParent/>
      <div className="h-[1000px] bg-red-600">

      </div>
    </div>
  );
}