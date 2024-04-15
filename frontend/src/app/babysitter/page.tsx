import { FilterBabysitter } from "@/components/filter/FilterBabysitter";
import HomeProfile from "@/components/filter/rightCardBar/babysitter/BabysitterCard";
import SitDrawer from "@/components/Drawer/sitDrawer";


export default function babysitter() {
  return (
    <div className="md:px-[120px] py-10 md:flex-row md:gap-10 dark:bg-[#31393F] h-fill flex flex-col ">
      

      <FilterBabysitter />
      <SitDrawer/>
      <HomeProfile />
    </div>
  );
}
