"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

const ParentFilterContext = createContext<ParentFilterContextType | undefined>(
  undefined
);

export type ParentStateType = {
  address: string;

  minWage: number;
  maxWage: number;
  verification: boolean;
};

// Define the type for the parent filter context
type ParentFilterContextType = {
  parentFilter: ParentStateType;
  setParentFilter: React.Dispatch<React.SetStateAction<ParentStateType>>;
};

// Create a provider component for the parent filter context
type ParentFilterProviderProps = {
  children: ReactNode;
};

export const ParentFilterProvider: React.FC<ParentFilterProviderProps> = ({
  children,
}) => {
  const [parentFilter, setParentFilter] = useState<ParentStateType>({
    address: "",

    minWage: 0,
    maxWage: 0,
    verification: false,
  });

  return (
    <ParentFilterContext.Provider value={{ parentFilter, setParentFilter }}>
      {children}
    </ParentFilterContext.Provider>
  );
};

// Create a hook to use the parent filter context
export const useParentFilter = () => {
  const context = useContext(ParentFilterContext);
  if (!context) {
    throw new Error(
      "useParentFilter must be used within a ParentFilterProvider"
    );
  }
  return context;
};
