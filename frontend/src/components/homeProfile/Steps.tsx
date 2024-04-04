import Image from "next/image";
const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-[100px]  ">
      <h1 className="text-[25px] text-[#31393F] p-20">
        Хүүхэд асрагч эсвэл ажил хурдан олох
      </h1>
      <div className=" w-screen  justify-center items-center gap-10 md:flex    ">
        <div className=" relative rounded-2x  md:flex items-center p-4 md:mt-0  flex flex-col mt-[100px]">
          <div className="bg-[#EDF7F8] w-[120px] h-[120px] rounded-full overflow-hidden items-center snap-center justify-center flex border-2 border-white absolute -top-14 ">
            <Image src="/barry_waving.webp" height={60} width={60} alt="baby" />
          </div>
          <div className="bg-[#EDF7F8] rounded-2xl  max-w-[400px] min-w-[200px] h-[200px]flex items-center p-4 text-[#31393F] ">
            <div className="mt-8">
              <h1 className="text-[20px] items-center justify-center flex py-2">
                Хайх
              </h1>
              <p className="py-2 text-center flex">
                Өөрийн хэрэгцээнд тулгуурлан шүүж, нарийвчилсан профайлыг хянана
                уу.
              </p>
            </div>
          </div>
        </div>
        <div className=" relative rounded-2x  flex flex-col  items-center p-4 md:mt-0 snap-x md:flex  mt-[100px]">
          <div className="bg-[#EDF7F8] w-[120px] h-[120px] rounded-full overflow-hidden items-center snap-center justify-center flex border-2 border-white absolute -top-14 ">
            <Image src="/barry_waving.webp" height={60} width={60} alt="baby" />
          </div>
          <div className="bg-[#EDF7F8] rounded-2xl  max-w-[400px] min-w-[200px] h-[200px]flex items-center p-4 text-[#31393F] ">
            <div className="mt-8">
              <h1 className="text-[20px] items-center justify-center flex py-2">
                Холбох
              </h1>
              <p className="py-2 text-center flex">
                Мессеж илгээж, гишүүдийг дэлгэцэнд гаргаж, танилцуулах уулзалт
                хий.
              </p>
            </div>
          </div>
        </div>
        <div className=" relative rounded-2x  flex flex-col  items-center p-4 md:mt-0 snap-x md:flex  mt-[100px]">
          <div className="bg-[#EDF7F8] w-[120px] h-[120px] rounded-full overflow-hidden items-center snap-center justify-center flex border-2 border-white absolute -top-14 ">
            <Image src="/barry_waving.webp" height={60} width={60} alt="baby" />
          </div>
          <div className="bg-[#EDF7F8] rounded-2xl  max-w-[400px] min-w-[200px] h-[200px]flex items-center p-4 text-[#31393F] ">
            <div className="mt-8">
              <h1 className="text-[20px] items-center justify-center flex  py-2">
                Баталгаажуулалт
              </h1>
              <p className="py-2 text-center flex">
                Хүүхэд харах цаг захиалж, төлбөрөө төлж, зардлын баримтаа татаж
                аваарай.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Steps;
