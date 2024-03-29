import { Checkbox } from "../ui";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";

export const Gender = () => {
  const genders = [
    {
      label: "Эмэгтэй",
      id: "female",
      icon: <CgGenderFemale />,
    },
    {
      label: "Эрэгтэй",
      id: "male",
      icon: <CgGenderMale />,
    },
  ];

  return (
    <>
      {genders.map((el, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox id={el.id} />
          <label
            htmlFor="terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {el.label}
          </label>
          {el.icon}
        </div>
      ))}
    </>
  );
};
