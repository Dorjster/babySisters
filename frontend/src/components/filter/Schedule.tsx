import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Checkbox,
} from "@/components/ui";
import { Button } from "@mui/base";
import { ChangeEvent, MouseEvent, useState } from "react";

export const Schedule = () => {
  //  const [time,setTime]=useState([])

  //   let available_time :any= [];

  //   const click = ( day: string, time: string) => {

  //     const object = {
  //       day: day,
  //       time: time
  //     };
  //     available_time.push(object)
  //     setTime(available_time)
  //   }

  // console.log(time);

  const [time, setTime] = useState<any[]>([]);

  const click = (day: string, timeValue: string) => {
    const updatedTime = [...time, { day, time: timeValue }];

    setTime(updatedTime);
  };

  console.log(time);

  return (
    <Table className="w-[600px]">
      <TableCaption>Боломжтой цаг</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Цаг/Гариг</TableHead>
          <TableHead>Даваа</TableHead>
          <TableHead>Мягмар</TableHead>
          <TableHead>Лхагва</TableHead>
          <TableHead>Пүрэв</TableHead>
          <TableHead>Баасан</TableHead>
          <TableHead>Бямба</TableHead>
          <TableHead>Ням</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow id="1">
          <TableCell>Өглөө</TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Даваа", "Өглөө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Мягмар", "Өглөө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Лхагва", "Өглөө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Пүрэв", "Өглөө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Баасан", "Өглөө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Бямба", "Өглөө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Ням", "Өглөө")} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="">Өдөр</TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Даваа", "Өдөр")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Мягмар", "Өдөр")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Лхагва", "Өдөр")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Пүрэв", "Өдөр")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Баасан", "Өдөр")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Бямба", "Өдөр")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Ням", "Өдөр")} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="">Орой</TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Даваа", "Орой")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Мягмар", "Орой")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Лхагва", "Орой")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Пүрэв", "Орой")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Баасан", "Орой")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Бямба", "Орой")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Ням", "Орой")} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="">Шөнө</TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Даваа", "Шөнө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Мягмар", "Шөнө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Лхагва", "Шөнө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Пүрэв", "Шөнө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Баасан", "Шөнө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Бямба", "Шөнө")} />
          </TableCell>
          <TableCell>
            <Checkbox onClick={() => click("Ням", "Шөнө")} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
