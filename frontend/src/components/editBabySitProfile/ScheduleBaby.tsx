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
type ScheduleProps = {
  handleClick: (day: string, time: string) => void;
};
export const ScheduleBaby = (props: ScheduleProps) => {
  const { handleClick } = props;
  // const [time, setTime] = useState<any[]>([]);

  // const click = (day: string, timeValue: string) => {
  //   const updatedTime = [...time, { day, time: timeValue }];

  //   setTime(updatedTime);
  // };

  // console.log(time);

  return (
    <div>
      {" "}
      <p className="text-gray-600 text-base font-[500] mb-[15px]">
        Ажиллах боломжтой цаг
      </p>
      <Table className="w-[900px] h-[250px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-700">Цаг/Гариг</TableHead>
            <TableHead className="text-gray-700">Даваа</TableHead>
            <TableHead className="text-gray-700">Мягмар</TableHead>
            <TableHead className="text-gray-700">Лхагва</TableHead>
            <TableHead className="text-gray-700">Пүрэв</TableHead>
            <TableHead className="text-gray-700">Баасан</TableHead>
            <TableHead className="text-gray-700">Бямба</TableHead>
            <TableHead className="text-gray-700">Ням</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow id="1">
            <TableCell>Өглөө</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Даваа", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Мягмар", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Лхагва", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Пүрэв", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Баасан", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Бямба", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Ням", "Өглөө")}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="">Өдөр</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Даваа", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Мягмар", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Лхагва", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Пүрэв", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Баасан", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Бямба", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Ням", "Өдөр")}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="">Орой</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Даваа", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Мягмар", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Лхагва", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Пүрэв", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Баасан", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Бямба", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Ням", "Орой")}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="">Шөнө</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Даваа", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Мягмар", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Лхагва", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Пүрэв", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Баасан", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Бямба", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => handleClick("Ням", "Шөнө")}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
