"use client";

import { useData } from "@/context/userProvider";
import React, { useEffect } from "react";
import { EditParent } from "./EditParent";
import { EditBabysitProfile } from "../editBabySitProfile/EditBabysitProfile";
import { useRouter } from "next/navigation";

export const Profiles = () => {
  const { push } = useRouter();
  const { loggedInUserData } = useData();
  const { isLoggedIn } = useData();
  // console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      push("/");
    }
  }, [isLoggedIn]);

  const renderEditComponent = () => {
    if (loggedInUserData.role === "BabySitter") {
      return <EditBabysitProfile />;
    } else if (loggedInUserData.role === "Parent") {
      return <EditParent />;
    }
  };

  return renderEditComponent();
};
