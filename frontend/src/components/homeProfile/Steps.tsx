import Image from "next/image";
const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-[25px] text-[#31393F] p-20">
        Хүүхэд асрагч эсвэл ажил хурдан олох
      </h1>
      <div className="flex gap-10">
        <div className=" relative flex flex-col justify-center h-[300px] items-center">
          <div className="bg-[#EDF7F8] w-[120px] h-[120px] rounded-full overflow-hidden items-center justify-center flex border-2 border-white absolute -top-4 ">
            <Image src="/barry_waving.webp" height={60} width={60} alt="baby" />
          </div>
          <div className="bg-[#EDF7F8] rounded-2xl w-[400px] h-[200px] flex items-center p-4 text-[#31393F] ">
            <div className="mt-8">
              <h1 className="text-[20px]  py-2">Lorem ipsum dolor sit</h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                fugiat eos nostrum soluta! Facilis unde molestiae id{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" relative flex flex-col text-[#31393F] justify-center h-[300px] items-center">
          <div className="bg-[#EDF7F8] w-[120px] h-[120px] rounded-full overflow-hidden items-center justify-center flex border-2 border-white absolute -top-4 ">
            <Image src="/barry_waving.webp" height={60} width={60} alt="baby" />
          </div>
          <div className="bg-[#EDF7F8] rounded-2xl w-[400px] h-[200px] flex items-center p-4 ">
            <div className="mt-8">
              <h1 className="text-[20px] py-2">Lorem ipsum dolor sit</h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                fugiat eos nostrum soluta! Facilis unde molestiae id{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" relative flex flex-col text-[#31393F] justify-center h-[300px] items-center">
          <div className="bg-[#EDF7F8] w-[120px] h-[120px] rounded-full overflow-hidden items-center justify-center flex border-2 border-white absolute -top-4 ">
            <Image src="/barry_waving.webp" height={60} width={60} alt="baby" />
          </div>
          <div className="bg-[#EDF7F8] rounded-2xl w-[400px] h-[200px] flex items-center p-4 ">
            <div className="mt-8">
              <h1 className="text-[20px] py-2">Lorem ipsum dolor sit</h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                fugiat eos nostrum soluta! Facilis unde molestiae id{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Steps;
