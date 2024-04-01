"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { relative } from "path";
import MenuIcon from "@mui/icons-material/Menu";
import { Bubblegum_Sans } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    href: "/Contact",
    label: "Зөвлөгөө",
  },
];

export default function AnchorTemporaryDrawer(props: any) {
  const { toggle } = props;
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
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Stack padding={""}>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ color: "green" }} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className="text-[#389BA7]" />
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
                  sx={{ marginLeft: "120px", fontSize: "20px" }}
                >
                  Хэрэглэгч
                </Typography>
              </Stack>
              <Stack alignItems={"center"} gap={"15px"} py={4} px={"25px"}>
                <div className="w-[150px]  h-[150px] white items-center rounded-full justify-center overflow-hidden ">
                  <Image
                    src={"/Negga.jpeg"}
                    height={200}
                    width={150}
                    alt="negga"
                  />
                </div>
                <p className="font-bold">My Name is Negga </p>
              </Stack>
              <div className="flex flex-col justify-center items-center gap-10 text-[16px] font-[400] text-gray-700   ">
                {navigationItems.map(({ href, label }, index) => (
                  <Link
                    href={href}
                    key={index}
                    className={`cursor-default ${
                      pathname === href ? "text-[#389BA7]" : "black"
                    }`}
                  >
                    <div className="bg-[#F7F9FA] p-3 rounded-[20px] flex items-center justify-center w-[300px] hover:bg-[#e3e7e8]">
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-center w-full p-10 font-bold text-[20px]">
                Гарах
              </div>
            </Stack>
          </Drawer>
        </React.Fragment>
      ))}
    </Stack>
  );
}
