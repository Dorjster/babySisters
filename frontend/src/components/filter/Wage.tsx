import { Checkbox } from "../ui";



export const Wage = () => {

    const range = [
        {
            min: 5000,
            max: 10000
        },
        {
            min: 10000,
            max: 15000
        },
        {
            min: 15000,
            max: 20000
        },
        {
            min: 20000,
            max: 25000
        },
        {
            min: 25000,
            max: 30000
        }
    ]


    return (
        <>
            {range.map((el, index) => (
                <div key={index} className="flex gap-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox />
                        <label
                            htmlFor="terms"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >{el.min}-с {el.max}</label>
                    </div>

                </div>
            ))}
        </>
    )
}