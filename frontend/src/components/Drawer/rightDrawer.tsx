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

type Anchor = "right";
type navigationItem = {
  href: string;
  label: string;
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
            sx={{ color: "green", cursor: "default" }}
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
                    <div className="w-[100px]  h-[100px] white items-center rounded-full justify-center overflow-hidden ">
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
                    <div className="w-[100px]  h-[100px] white items-center rounded-full justify-center overflow-hidden ">
                      {loggedInUserData?.image ? (
                        <Image
                          src={loggedInUserData.image}
                          // className="w-[170px] h-[170px] mt-[25px] rounded-e-xl self-center justify-center items-center"
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
                        className="font-bold underline underline-offset-1 cursor-default"
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
                    className="cursor-default text-black"
                  >
                    <div className="bg-[#F7F9FA] p-3 rounded-[20px] flex items-center justify-center w-[300px] hover:bg-[#e3e7e8]">
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/" onClick={toggleDrawer(anchor, false)}>
                <p
                  onClick={removeToken}
                  className="flex items-center justify-center w-full p-10 font-bold text-[16px] cursor-default"
                >
                  Гарах
                </p>
              </Link>
            </Stack>
          </Drawer>
        </React.Fragment>
      ))}
    </Stack>
  );
}
