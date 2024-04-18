import { FilterBabysitter } from "@/components/filter/FilterBabysitter";
import HomeProfile from "@/components/filter/rightCardBar/babysitter/BabysitterCard";
import SitDrawer from "@/components/Drawer/sitDrawer";

export default function babysitter() {
  return (
    <div className="relative md:overflow-hidden  bg-[#F2FAFA]  ">
      <div className="py-10 md:flex-row md:gap-10  dark:bg-[#31393F] h-screen flex flex-col relative z-10 px-5 gap-4  md:px-20 ">
        <FilterBabysitter />
        <SitDrawer />
        <HomeProfile />
      </div>
      <div className="w-[2000px] bg-white hidden md:flex h-[1600px] absolute -top-6 z-0 -left-[700px] rounded-full"></div>
  
    </div>
  );
}
