import { useFilterData } from "@/context/filterProvider";
import { Checkbox } from "../ui";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Gender = () => {
  const { filterData, setFilterData } = useFilterData();

  return (
    // <>
    //   {genders.map((el, index) => (
    //     <div
    //       onClick={() => {
    //         handleGen(el.label);
    //       }}
    //       key={index}
    //       className="flex items-center space-x-2"
    //     >
    //       <Checkbox className="rounded-[4px]" id={el.id} />
    //       <label
    //         htmlFor="terms"
    //         className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //       >
    //         {el.label}
    //       </label>
    //       {el.icon}
    //     </div>
    //   ))}
    // </>

    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2 text-[#389BA7]">
        <RadioGroupItem
          value="comfortable"
          id="r2"
          onClick={() => setFilterData({ ...filterData, gender: "Эрэгтэй" })}
        />
        <Label htmlFor="r2" className="text-gray-500 text-lg">
          Эрэгтэй
        </Label>
      </div>
      <div className="flex items-center space-x-2 text-[#389BA7]">
        <RadioGroupItem
          value="compact"
          id="r3"
          onClick={() => setFilterData({ ...filterData, gender: "Эмэгтэй" })}
        />
        <Label htmlFor="r3" className="text-gray-500 text-lg">
          Эмэгтэй
        </Label>
      </div>
    </RadioGroup>
  );
};
