"use client";

export const HomeSvg = ({
  color,
  bigColor,
}: {
  color: string;
  bigColor: string;
}) => {
  return (
    <>
      <svg
        className="relative z-20 w-full"
        viewBox="0 0 1280 159"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M276.5 70.5C182 63.5 69 34.5 0 0.5V158H1280V103C1103 154.5 965 169.5 812 131C761 116 678.5 78.5891 589.5 68.5C466 54.5 367.5 77.5 276.5 70.5Z"
          fill={bigColor}
          clipRule="evenodd"
        ></path>
        <path
          d="M747 116C1016 217.683 1280 103.143 1280 103.143V70.2777C1031 146.778 890.5 130.278 814.5 113.778C756 99.7779 668 41.9238 522 50.9511C402 55.7778 345.5 76.5 272.5 70.1732C391.71 80.683 549.991 41.5298 747 116Z"
          fill={color}
          clipRule="evenodd"
        ></path>
      </svg>
    </>
  );
};
