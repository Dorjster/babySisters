import {Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue} from "@/components/ui";

export const Education = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Бакалавр" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Бүрэн">Бүрэн</SelectItem>
                    <SelectItem value="Бүрэн дунд">Бүрэн дунд</SelectItem>
                    <SelectItem value="Бакалавр">Бакалавр</SelectItem>
                    <SelectItem value="Магистр">Магистр</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}