"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { ParentType } from "../../../../..";

import { MouseEvent } from "react";
import { useData } from "@/context/userProvider";
import { useParentFilter } from "@/context/parentProvider";
import { Box, Modal, Typography } from "@mui/material";
// import { Button } from "@mui/base";
import Button from "@mui/material/Button";

const ParentCard = () => {
  const { loggedInUserData, isLoggedIn } = useData();
  const [parentData, setParentData] = useState<ParentType[]>([]);
  const { parentFilter } = useParentFilter();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
    const fetchData = async (page: number) => {
      try {
        const {
          data: { parents, totalPages },
        } = await AxiosInstance.post<{
          parents: ParentType[];
          totalPages: number;
        }>("/allParents", {
          ...parentFilter,
          page,
          pageSize: 9, // Adjust page size as needed
        });

        const filteredData = parents?.filter(
          (parent) => parent._id !== loggedInUserData._id
        );

        setParentData(filteredData);
        setTotalPages(totalPages);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchData(currentPage);
  }, [loggedInUserData, parentFilter, currentPage]);

  const getIdHandle = async (event: MouseEvent<HTMLDivElement>) => {
    if (isLoggedIn === false) {
      handleOpen();
    } else {
      const { id: CardId } = event.currentTarget;

      const foundParent = parentData.find(({ _id }) => _id === CardId);
      console.log(foundParent);

      router.push(`/profileParent/${foundParent?._id}`);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-2 py-1 mr-2 rounded-md text-sm hover:bg-gray-200 ${
              currentPage === pageNumber ? "bg-gray-300 text-white" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className=" h-fit w-full mt-1 flex flex-wrap  pl-10  gap-8">
      {parentData?.map((parent) => (
        <div
          key={parent._id}
          onClick={getIdHandle}
          id={parent._id}
          className="cursor-pointer"
        >
          <Card data={parent} />
        </div>
      ))}
      {totalPages > 1 && renderPagination()}
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
            onClick={() => router.push("/login")}
            variant="contained"
          >
            Нэвтрэх
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ParentCard;
