import { FaTransgender, FaAddressCard, FaBaby, FaCar, FaUserGraduate } from "react-icons/fa";
import { MdVerified, MdOutlineSmokeFree } from "react-icons/md";
import { Checkbox } from "../ui";


export const Info = () => {

    const info = [
        {
            icon: <MdVerified />,
            id: "verified",
            text: "Баталгаажсан"
        },
        {
            icon: <FaAddressCard />,
            id: "driver",
            text: "Жолооны үнэмлэхтэй"
        },
        {
            icon: <FaCar />,
            id: "hasCar",
            text: "Машинтай"
        },
        {
            icon: <FaBaby />,
            id: "hasChildren",
            text: "Хүүхэдтэй"
        },
        {
            icon: <MdOutlineSmokeFree />,
            id: "nonSmoker",
            text: "Тамхи татдаггүй"
        }
    ]
    return (
        <>
        {info.map((el, index) => (

            <div key={index} className="flex gap-3">
                <div className="flex items-center space-x-2">
                    <Checkbox id={el.id} />
                </div>
                <div className="flex gap-2">
                    <p className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{el.text}</p>
                    {el.icon}
                    
                </div>
            </div>
        ))}
           
        </>

    )
}