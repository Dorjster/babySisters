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

export const ScheduleBaby = () => {

  const [time, setTime] = useState<any[]>([]);

  const click = (day: string, timeValue: string) => {
    const updatedTime = [...time, { day, time: timeValue }];

    setTime(updatedTime);
  };


  return (
    <div>

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
                onClick={() => click("Даваа", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Мягмар", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Лхагва", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Пүрэв", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Баасан", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Бямба", "Өглөө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Ням", "Өглөө")}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="">Өдөр</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Даваа", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Мягмар", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Лхагва", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Пүрэв", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Баасан", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Бямба", "Өдөр")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Ням", "Өдөр")}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="">Орой</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Даваа", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Мягмар", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Лхагва", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Пүрэв", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Баасан", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Бямба", "Орой")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Ням", "Орой")}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="">Шөнө</TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Даваа", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Мягмар", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Лхагва", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Пүрэв", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Баасан", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Бямба", "Шөнө")}
              />
            </TableCell>
            <TableCell>
              <Checkbox
                className="rounded-[4px]"
                onClick={() => click("Ням", "Шөнө")}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
