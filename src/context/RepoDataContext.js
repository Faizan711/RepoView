// context/RepoDataContext.js
"use client";
import { createContext, useState, useContext } from "react";

const RepoDataContext = createContext(null);

export const useRepoData = () => {
  return useContext(RepoDataContext);
};

export const RepoDataProvider = ({ children }) => {
  const [repoData, setRepoData] = useState(null);

  return (
    <RepoDataContext.Provider value={{ repoData, setRepoData }}>
      {children}
    </RepoDataContext.Provider>
  );
};
