import { FilterParent } from "@/components/filter/FilterParent";
import ParentCard from "@/components/filter/rightCardBar/parent/ParentCard";
import ParentDrawer from "@/components/Drawer/ParentDrawer";
export default function parent() {
  return (
    <div className="md:px-10 py-10 dark:bg-[#31393F] h-screen md:flex md:gap-10  ">
     
      <FilterParent />
      <ParentDrawer/>
      <ParentCard />
    </div>
  );
}
