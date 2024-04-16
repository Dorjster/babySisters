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

export const CheckedSchedule = (props: any) => {
    
    const {scheduleProps} = props;

    const getValue = () => {
        console.log(scheduleProps);
    }


    
    
    
    
    
    return (
        <div>
    
        <p className="text-gray-600 text-base font-[500] mb-[15px] dark:text-white">
            Ажиллах боломжтой цаг
        </p>
        <Table className="w-[900px] h-[250px]">
            <TableHeader>
            <TableRow  >
                <TableHead className="text-gray-700 dark:text-white">Цаг/Гариг</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Даваа</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Мягмар</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Лхагва</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Пүрэв</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Баасан</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Бямба</TableHead>
                <TableHead className="text-gray-700 dark:text-white" >Ням</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow id="1">
                <TableCell>Өглөө</TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Даваа", "Өглөө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Мягмар", "Өглөө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Лхагва", "Өглөө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Пүрэв", "Өглөө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Баасан", "Өглөө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Бямба", "Өглөө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Ням", "Өглөө")}
                />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="">Өдөр</TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Даваа", "Өдөр")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Мягмар", "Өдөр")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Лхагва", "Өдөр")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Пүрэв", "Өдөр")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Баасан", "Өдөр")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Бямба", "Өдөр")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Ням", "Өдөр")}
                />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="">Орой</TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Даваа", "Орой")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Мягмар", "Орой")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Лхагва", "Орой")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Пүрэв", "Орой")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Баасан", "Орой")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Бямба", "Орой")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Ням", "Орой")}
                />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="">Шөнө</TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Даваа", "Шөнө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Мягмар", "Шөнө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Лхагва", "Шөнө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Пүрэв", "Шөнө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Баасан", "Шөнө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Бямба", "Шөнө")}
                />
                </TableCell>
                <TableCell>
                <Checkbox
                    className="rounded-[4px]"
                //   onClick={() => click("Ням", "Шөнө")}
                />
                </TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </div>
    );
};
      
