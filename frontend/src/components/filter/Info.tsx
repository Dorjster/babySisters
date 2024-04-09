// import {
//   FaTransgender,
//   FaAddressCard,
//   FaBaby,
//   FaCar,
//   FaUserGraduate,
// } from "react-icons/fa";
// import { MdVerified, MdOutlineSmokeFree } from "react-icons/md";
// import { Checkbox } from "../ui";

// export const Info = () => {
//   const info = [
//     {
//       icon: <MdVerified />,
//       id: "verified",
//       text: "Баталгаажсан",
//     },
//     {
//       icon: <FaAddressCard />,
//       id: "driver",
//       text: "Жолооны үнэмлэхтэй",
//     },
//     {
//       icon: <FaCar />,
//       id: "hasCar",
//       text: "Машинтай",
//     },
//     {
//       icon: <FaBaby />,
//       id: "hasChildren",
//       text: "Хүүхэдтэй",
//     },
//     {
//       icon: <MdOutlineSmokeFree />,
//       id: "nonSmoker",
//       text: "Тамхи татдаггүй",
//     },
//   ];
//   return (
//     <>
//       {info.map((el, index) => (
//         <div key={index} className="flex gap-3">
//           <div className="flex items-center space-x-2">
//             <Checkbox className="rounded-[4px]" id={el.id} />
//           </div>
//           <div className="flex gap-2">
//             <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//               {el.text}
//             </p>
//             {el.icon}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme } from "@mui/system";
import { FaTransgender, FaAddressCard, FaBaby, FaCar } from "react-icons/fa";
import { MdVerified, MdOutlineSmokeFree } from "react-icons/md";

interface InfoProps {
  onChange: (value: string[]) => void;
}

export const Info: React.FC<InfoProps> = ({ onChange }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff5722",
      },
    },
  });

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
    {
      icon: <MdOutlineSmokeFree />,
      id: "nonSmoker",
      text: "Тамхи татдаггүй",
    },
  ];

  const [selectedInfo, setSelectedInfo] = React.useState<{
    [key: string]: boolean;
  }>({
    verified: false,
    driver: false,
    hasCar: false,
    hasChildren: false,
    nonSmoker: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedInfo({
      ...selectedInfo,
      [name]: checked,
    });

    const selectedValues = Object.keys(selectedInfo).filter(
      (key) => selectedInfo[key]
    );

    onChange(selectedValues);
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
                  checked={selectedInfo[item.id]}
                  onChange={handleChange}
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
