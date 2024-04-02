import Image from "next/image";
const Cards2 = () => {
  return (
    <div className="py-10 flex items-center justify-center gap-8">
      <div className=" shadow-lg w-[400px] h-[300px] rounded-2xl flex flex-col items-center p-4">
        <div className="bg-white rounded-full w-[100px] overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/family.png " height={140} width={140} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px]">
          Lorem ipsum, dolor sit
        </h1>
        <p className="py-4 px-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in
          cupiditate consequuntur corrupti doloribus{" "}
        </p>
      </div>
      <div className=" shadow-lg w-[400px] h-[300px] rounded-2xl flex flex-col items-center p-4">
        <div className="bg-white rounded-full w-[100px] overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/mother.png " height={140} width={140} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px]">
          Lorem ipsum, dolor sit
        </h1>
        <p className="py-4 px-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in
          cupiditate consequuntur corrupti doloribus{" "}
        </p>
      </div>
      <div className=" shadow-lg w-[400px] h-[300px] rounded-2xl flex flex-col items-center p-4">
        <div className="bg-white rounded-full w-[100px] overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/Family2.gif " height={140} width={140} alt="Photo" />
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