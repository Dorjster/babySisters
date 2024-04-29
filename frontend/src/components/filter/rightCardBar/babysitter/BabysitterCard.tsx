"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import { ProfileType } from "../../../../..";
import { useRouter } from "next/navigation";
import { useFilterData } from "@/context/filterProvider";
import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
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
import { useData } from "@/context/userProvider";

const HomeProfile: React.FC = () => {
  const { loggedInUserData, isLoggedIn } = useData();
  const [babysitterData, setBabysitterData] = useState<ProfileType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { filterData } = useFilterData();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.post<{
          filteredBabysitters: ProfileType[];
          totalPages: number;
        }>("/allBabysitters", { ...filterData, page: currentPage });
        const filteredData = data.filteredBabysitters.filter(
          (babysitter) => babysitter._id !== loggedInUserData._id
        );
        setBabysitterData(filteredData);
        setTotalPages(data.totalPages);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, [filterData, currentPage, loggedInUserData]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const getIdHandle = (CardId: string) => {
    if (!isLoggedIn) {
      handleOpen(); // Open the modal if the user is not logged in
    } else {
      push(`/profile/${CardId}`);
    }
  };

  return (
    <div className="h-fit w-screen gap-10 flex flex-wrap">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          {/* Choose your preferred progress indicator */}
          {/* <LinearProgress color="primary" /> */}
          <CircularProgress
            color="primary"
            className="absolute flex justify-center  top-[50%] left-[50%] "
          />
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
                has_children={babysitter.info_id.has_children}
                car={babysitter.info_id.car}
                // smoker={babysitter.info_id.smoker}
                exp={babysitter.info_id.year_of_experience}
              />
            </div>
          ))}
        </>
      )}
      {totalPages > 1 && (
        <Pagination className="absolute bottom-[200px] right-[20px]">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem className="cursor-pointer">
                <PaginationPrevious
                  style={{
                    cursor: "pointer",
                    color: "#389BA7",
                    fontSize: "22px",
                  }}
                  onClick={() => handlePagination(currentPage - 1)}
                />
              </PaginationItem>
            )}
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
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  style={{
                    cursor: "pointer",
                    color: "#389BA7",
                    fontSize: "22px",
                  }}
                  onClick={() => handlePagination(currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
      <Modal
        className=""
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title" className="text-lg font-bold mb-4">
            Та бүртгэлгүй байна.
          </h2>
          <p id="modal-modal-description" className="mb-4">
            Та хэрэглэгчдийн мэдээллийг харахыг хүсвэл бүртгүүлэх эсвэл
            нэвтэрсэн байх ёстой.
          </p>
          <Button
            className="bg-[#389BA7]"
            onClick={() => push("/login")}
            variant="contained"
          >
            Нэвтрэх
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default HomeProfile;
