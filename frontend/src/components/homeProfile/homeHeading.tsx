import Image from "next/image";
const HomeHeading = () => {
  return (
    <div>
      <div className="bg-[#c9e8ec] w-[2240px] h-[527px] relative -ml-[120px] -mt-[50px] overflow-hidden">
        <div className="  inset-x-0 bg- w-full h-10" />

        <svg
          className="relative z-10"
          width="100%"
          height="700px"
          viewBox="0 0 1280 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M276.5 70.5C182 63.5 69 34.5 0 0.5V158H1280V103C1103 154.5 965 169.5 812 131C761 116 678.5 78.5891 589.5 68.5C466 54.5 367.5 77.5 276.5 70.5Z"
            fill="white"
          ></path>
          <path
            d="M747 116C1016 217.683 1280 103.143 1280 103.143V70.2777C1031 146.778 890.5 130.278 814.5 113.778C756 99.7779 668 41.9238 522 50.9511C402 55.7778 345.5 76.5 272.5 70.1732C391.71 80.683 549.991 41.5298 747 116Z"
            fill="#FCCFDD"
          ></path>
        </svg>
        <div className="bg-[#EDF7F8] w-[400px] h-[400px]  rounded-full absolute right-[400px] top-[300px] "></div>
        <div className="bg-[#EDF7F8] w-[700px] h-[700px]  rounded-full absolute -right-[260px] top-[100px] "></div>
        <div className="w-[400px] h-[600px]  rounded-full absolute right-[310px] top-[310px] ">
          <Image src="/reading.png" width={250} height={250} alt="reading" />
        </div>
        <div className=" w-[700px] h-[700px]  rounded-full absolute -right-[430px] top-[20px] ">
          <Image src="/Woman2.png" width={250} height={250} alt="Woman" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeading;