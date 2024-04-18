"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import { ProfileType } from "../../../../..";
import { useRouter } from "next/navigation";
import { useFilterData } from "@/context/filterProvider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Pointer } from "lucide-react";
import Image from "next/image";

const HomeProfile: React.FC = () => {
  const [babysitterData, setBabysitterData] = useState<ProfileType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { filterData } = useFilterData();
  const { push } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.post<{
          filteredBabysitters: ProfileType[];
          totalPages: number;
        }>("/allBabysitters", { ...filterData, page: currentPage });
        setBabysitterData(data.filteredBabysitters);
        setTotalPages(data.totalPages);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, [filterData, currentPage]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const getIdHandle = (CardId: string) => {
    push(`/profile/${CardId}`);
  };

  return (
    <div className="h-fit w-screen gap-10 flex flex-wrap">
      {babysitterData.length === 0 ? (
        <div className=" flex flex-col items-center w-full justify-center">
          {/* <p className="text-[30px] text-[#389BA7]">Илэрц олдсонгүй</p> */}
          <Image src="/not.png" width={600} height={600} alt="" />
        </div>
      ) : (
        <>
          {babysitterData.map((babysitter) => (
            <div
              key={babysitter._id}
              onClick={() => getIdHandle(babysitter._id)}
              className="cursor-pointer"
            >
              <Card
                key={babysitter._id}
                data={babysitter}
                wage={babysitter.info_id.wage}
                rating={babysitter.info_id.rating}
                about={babysitter.about || ""}
                language={babysitter.info_id.language}
                driver={babysitter.info_id.driver_license}
                car={babysitter.info_id.car}
                smoker={babysitter.info_id.smoker}
                exp={babysitter.info_id.year_of_experience}
              />
            </div>
          ))}
        </>
      )}
      {totalPages > 1 && (
        <Pagination className="absolute bottom-[230px] right-[20px] ">
          <PaginationContent>
            <PaginationItem className="cursor-pointer ">
              <PaginationPrevious
                style={{
                  cursor: "pointer",
                  color: "#389BA7",
                  fontSize: "22px",
                }}
                className={currentPage === 1 ? "disabled" : ""}
                onClick={() => handlePagination(currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  style={{
                    cursor: "pointer",
                    color: "#389BA7",
                    fontSize: "22px",
                  }}
                  isActive={currentPage === index + 1}
                  onClick={() => handlePagination(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                style={{
                  cursor: "pointer",
                  color: "#389BA7",
                  fontSize: "22px",
                }}
                className={currentPage === totalPages ? "disabled " : ""}
                onClick={() => handlePagination(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default HomeProfile;
