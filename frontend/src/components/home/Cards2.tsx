import Image from "next/image";
const Cards2 = () => {
  return (
    <div className=" md:flex-row md:gap-[50px] bg-white dark:bg-[#31393F]   w-screen flex flex-col  items-center justify-center w-screeen -mt-[10px] relative pt-10 ">
      <div className=" shadow-lg w-[420px] h-fill rounded-2xl  flex flex-col items-center mt-[100px]  p-4">
        <div className="bg-white rounded-full w-[100px] object-fill overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/family.png" height={160} width={160} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px] dark:text-white ">
          Танд юу хамгийн сайн болохыг та мэднэ - бид үүнийг илүү хялбар болгож
          байна
        </h1>
        <p className="py-4 px-1 ">
          Та найдвартай хүүхэд асрагч эсвэл хүүхэд асрах ажил хайж байгаа
          эсэхээс үл хамааран Babysits нь хүүхэд асрах шийдвэр гаргахад аль
          болох хялбар тусалдаг.
        </p>
      </div>
      <div className=" shadow-lg w-[420px] h-fill rounded-2xl  flex flex-col items-center mt-[100px]  p-4">
        <div className="bg-white rounded-full w-[100px] object-fill overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/Son.png" height={160} width={160} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px] dark:text-white ">
          Бид таны аюулгүй байдалд санаа тавьдаг
        </h1>
        <p className="py-4 px-1">
          Иргэний үнэмлэхний баталгаажуулалт, хяналт шалгалт, гэмт хэргийн
          шалгалт, аюулгүй мессеж, төлбөр тооцооны тусламжтайгаар та болон таны
          гэр бүлийн аюулгүй байдлыг хангах нь бидний нэн тэргүүний зорилт юм.
        </p>
      </div>
      <div className=" shadow-lg w-[420px] h-fill rounded-2xl  flex flex-col items-center mt-[100px]  p-4">
        <div className="bg-white rounded-full w-[100px] object-fill overflow-hidden h-[100px] flex items-center justify-center">
          <Image src="/Mother.avif" height={160} width={160} alt="Photo" />
        </div>
        <h1 className="py-2 px-1 text-[#31393F] text-[20px] dark:text-white ">
          Санаа зоволт бага - сэтгэлийн амар амгалан
        </h1>
        <p className="py-4 px-1">
          Ил тод профайл, тустай хэрэгслүүд болон манай найдвартай тусламжийн
          баг нь хүүхэд асрахтай холбоотой стрессийг арилгаж, сэтгэлийн амар
          амгаланг өгнө!
        </p>
      </div>
    </div>
  );
};

export default Cards2;
