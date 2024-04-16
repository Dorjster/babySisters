"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for your filter data
export type StateType = {
  language: string[];
  education: string;
  character: string[];
  year_of_experience: number | number[];
  additional: string | string[];
  skills: string[];
  wage: string | string[];
  address: string;
  minWage: number;
  maxWage: number;
  verification: boolean;
};

// Define the type for your context
type FilterDataContextType = {
  filterData: StateType;
  setFilterData: React.Dispatch<React.SetStateAction<StateType>>;
};

// Create the context
const FilterDataContext = createContext<FilterDataContextType | undefined>(
  undefined
);

// Create the provider component
type FilterDataProviderProps = {
  children: ReactNode;
};

export const FilterDataProvider: React.FC<FilterDataProviderProps> = ({
  children,
}) => {
  const [filterData, setFilterData] = useState<StateType>({
    language: [],
    education: "",
    character: [],
    year_of_experience: 0,
    additional: [],
    skills: [],
    wage: [],
    address: "",
    minWage: 0,
    maxWage: 0,
    verification: false,
  });

  return (
    <FilterDataContext.Provider value={{ filterData, setFilterData }}>
      {children}
    </FilterDataContext.Provider>
  );
};

export const useFilterData = () => {
  const context = useContext(FilterDataContext);
  if (!context) {
    throw new Error("useFilterData must be used within a FilterDataProvider");
  }
  return context;
};
