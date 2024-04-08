"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { removeToken } from "@/utils/removeToken";
import { useData } from "@/context/userProvider";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { borderRadius, display } from "@mui/system";
import { AlignCenter } from "lucide-react";

type Anchor = "right";
type navigationItem = {
  href: string;
  label: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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

const navigationItems: navigationItem[] = [
  {
    href: "/",
    label: "Нүүр",
  },
  {
    href: "/babysitter",
    label: "Хүүхэд асрагч",
  },
  {
    href: "/parent",
    label: "Эцэг эх",
  },
  {
    href: "/how-it-works",
    label: "Ашиглах заавар",
  },
  {
    href: "/tips",
    label: "Зөвлөгөө",
  },
];

export default function AnchorTemporaryDrawer(props: any) {
  const { toggle } = props;
  const { loggedInUserData } = useData();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const letter = loggedInUserData.name.charAt(0);
  const [isTokenValid, setIsTokenValid] = React.useState("");

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsTokenValid(token);
    } else {
      setIsTokenValid("");
    }
  };

  return (
    <Stack padding={""}>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            sx={{ color: "green", cursor: "pointer" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon onClick={getToken} className="text-[#389BA7]" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Stack height={"100vw"} width={"430px"}>
              <Stack px={4} py="29px" direction={"row"} bgcolor={"#dcf2f5"}>
                <div onClick={toggleDrawer(anchor, false)}>
                  <ArrowBackIosIcon className="text-[#389BA7] justify-start" />
                </div>

                <Typography
                  className="text-[#323940]"
                  sx={{
                    marginLeft: "120px",
                    fontSize: "20px",
                    cursor: "default",
                  }}
                >
                  Хэрэглэгч
                </Typography>
              </Stack>
              <Stack alignItems={"center"} gap={"15px"} py={4} px={"25px"}>
                {isTokenValid === "" ? (
                  <div className="flex flex-col items-center gap-[25px]">
                    <div className="w-[100px] h-[100px] flex   justify-center overflow-hidden rounded-full ">
                      <Image
                        src={"/profile-avatar.png"}
                        height={200}
                        width={200}
                        alt="negga"
                      />{" "}
                    </div>
                    <Link href="/login">
                      <p
                        onClick={toggleDrawer(anchor, false)}
                        className="font-bold underline underline-offset-1 cursor-default"
                      >
                        Нэвтрэх
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-[25px]">
                    <div className="w-[100px]  h-[100px] flex  rounded-full justify-center overflow-hidden ">
                      {loggedInUserData?.image ? (
                        <Image
                          src={loggedInUserData.image}
                          alt=""
                          width={200}
                          height={200}
                        />
                      ) : (
                        <div className="w-[100px] h-[100px] rounded-xl bg-gray-300 text-white text-[60px] flex self-center justify-center items-center">
                          {letter}
                        </div>
                      )}
                    </div>
                    <Link href="/edit-profile">
                      <p
                        onClick={toggleDrawer(anchor, false)}
                        className="font-bold underline underline-offset-1 cursor-pointer"
                      >
                        Хувийн мэдээлэл
                      </p>
                    </Link>
                  </div>
                )}
              </Stack>
              <div className="flex flex-col justify-center items-center gap-10 text-[16px] font-[400] text-gray-700   ">
                {navigationItems.map(({ href, label }, index) => (
                  <Link
                    onClick={toggleDrawer(anchor, false)}
                    href={href}
                    key={index}
                    className="cursor-pointer text-black"
                  >
                    <div className="bg-[#F7F9FA] p-3 rounded-[20px] flex items-center justify-center w-[300px] hover:bg-[#e3e7e8]">
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
              <div>
                <p
                  onClick={handleOpen}
                  className="flex items-center justify-center w-full p-10 font-bold text-[16px] cursor-pointer"
                >
                  Гарах
                </p>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 1, fontSize: "20px" }}
                    >
                      Гарахдаа итгэлтэй байна уу?
                    </Typography>
                    <div>
                      {" "}
                      <Button
                        onClick={() => {
                          removeToken();
                          toggleDrawer(anchor, false);
                        }}
                      >
                        Тийм
                      </Button>
                      <Button onClick={handleClose}>Үгүй</Button>
                    </div>
                  </Box>
                </Modal>
              </div>
            </Stack>
          </Drawer>
        </React.Fragment>
      ))}
    </Stack>
  );
}
