"use client"

import React, { createContext, useContext, useState } from 'react';


interface MyContextType {
  isParent: boolean;
  setIsParent: React.Dispatch<React.SetStateAction<boolean>>;
}


 export const ParentContext = createContext<MyContextType>({} as MyContextType)


 export const ParentProvider = ({ children }:any) => {
  const [isParent, setIsParent] = useState<boolean>(true);

  return (
    <ParentContext.Provider value={{ isParent, setIsParent }}>
      {children}
    </ParentContext.Provider>
  );
};
