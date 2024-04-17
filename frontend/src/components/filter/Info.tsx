import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme } from "@mui/system";
import { FaTransgender, FaAddressCard, FaBaby, FaCar } from "react-icons/fa";
import { MdVerified, MdOutlineSmokeFree } from "react-icons/md";
import { useFilterData } from "@/context/filterProvider";

interface InfoProps {
  selectedItems: string[];
  onChange: (updatedData: {
    selectedItems: string[];
    additionalData: any;
  }) => void;
}

export const Info: React.FC<InfoProps> = ({ selectedItems, onChange }) => {
  const { filterData, setFilterData } = useFilterData();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff5722",
      },
    },
  });
  const [isVerifiedSelected, setIsVerifiedSelected] = React.useState(false);
  const info = [
    {
      icon: <MdVerified />,
      id: "verified",
      text: "Баталгаажсан",
    },
    {
      icon: <FaAddressCard />,
      id: "driver",
      text: "Жолооны үнэмлэхтэй",
    },
    {
      icon: <FaCar />,
      id: "hasCar",
      text: "Машинтай",
    },
    {
      icon: <FaBaby />,
      id: "hasChildren",
      text: "Хүүхэдтэй",
    },
    // {
    //   icon: <MdOutlineSmokeFree />,
    //   id: "nonSmoker",
    //   text: "Тамхи татдаггүй",
    // },
  ];

  const handleCheckboxChange = (id: string) => {
    if (id === "verified") {
      setIsVerifiedSelected(!isVerifiedSelected);
      setFilterData({ ...filterData, verification: !isVerifiedSelected });
    } else {
      const updatedSelectedItems = selectedItems.includes(id)
        ? selectedItems.filter((item) => item !== id)
        : [...selectedItems, id];
      onChange({
        selectedItems: updatedSelectedItems,
        additionalData: updatedSelectedItems,
      });
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          {info.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  // checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  name={item.id}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "#389BA7",
                      fontSize: "25px",
                      fontWeight: "100",
                    },
                  }}
                />
              }
              label={
                <div className="flex gap-2">
                  <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {item.text}
                  </p>
                  {item.icon}
                </div>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};
