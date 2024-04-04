import Image from "next/image";
const Cards2 = () => {
  return (
    <div className=" md:flex-row md:gap-[50px] bg-white  w-screen flex flex-col  items-center justify-center w-screeen -mt-[10px] relative pt-10 ">
      <div className=" shadow-lg w-[400px]  h-[300px] rounded-2xl  flex flex-col items-center mt-[100px]  p-4">
        <div className="bg-white rounded-full w-[100px] object-fill overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/family.png" height={160} width={160} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px]">
          Lorem ipsum, dolor sit
        </h1>
        <p className="py-4 px-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in
          cupiditate consequuntur corrupti doloribus{" "}
        </p>
      </div>
      <div className=" shadow-lg w-[400px] h-[300px] rounded-2xl flex flex-col items-center p-4 mt-[100px]">
        <div className="bg-white rounded-full w-[100px] overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/Son.png " height={140} width={140} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px]">
          Lorem ipsum, dolor sit
        </h1>
        <p className="py-4 px-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in
          cupiditate consequuntur corrupti doloribus{" "}
        </p>
      </div>
      <div className=" shadow-lg w-[400px] h-[300px] rounded-2xl flex flex-col items-center  p-4 mt-[100px]">
        <div className="bg-white rounded-full w-[100px] overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/fmly.png " height={140} width={140} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px]">
          Lorem ipsum, dolor sit
        </h1>
        <p className="py-4 px-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in
          cupiditate consequuntur corrupti doloribus{" "}
        </p>
      </div>
    </div>
  );
};

export default Cards2;
