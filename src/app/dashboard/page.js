"use client";
import { useRepoData } from "@/context/RepoDataContext";
import React from "react";

const Dashboard = () => {
  const { repoData } = useRepoData(); // Access repo data from context

  if (!repoData) {
    return <div>No data available</div>;
  }

  return <div className="bg-zinc-300 min-h-screen">Dashboard</div>;
};

export default Dashboard;
