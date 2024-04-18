import { FilterParent } from "@/components/filter/FilterParent";
import ParentCard from "@/components/filter/rightCardBar/parent/ParentCard";
import ParentDrawer from "@/components/Drawer/ParentDrawer";
export default function parent() {
  return (
    <div className="relative md:overflow-hidden   ">
      <div className="md:px-40 py-10 dark:bg-[#31393F] h-screen md:flex-row md:gap-8 p-4 flex flex-col relative z-10 ">
        <FilterParent />
        <ParentDrawer />
        <ParentCard />
      </div>
      <div  className="w-[2000px] bg-[#F2FAFA] h-[1600px] absolute hidden md:flex -top-6 z-0 md:-left-[700px] rounded-full"></div>
    </div>
  );
}
