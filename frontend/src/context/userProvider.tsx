"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";

export type UserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  image: string;
  verification: boolean
};

type DataContextType = {
  loading: boolean;
  isLoggedIn: boolean;
  loggedInUserData: UserData;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [loggedInUserData, setLoggedInUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    image: "",
    verification: false
  });

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (accessToken) {
      const getloggedUser = async () => {
        try {
          setLoading(true);
          const { data } = await AxiosInstance.get("/refresh", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          console.log("logged user", data);

          setIsLoggedIn(true);
          setLoggedInUserData(data);
          setLoading(false);
        } catch (error) {
          console.log("error from get logged in user");
        }
      };

      getloggedUser();
    } else {
      setIsLoggedIn(false);
      console.log("No");
    }
  }, [accessToken]);

  return (
    <DataContext.Provider
      value={{
        loading,
        isLoggedIn,
        loggedInUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
