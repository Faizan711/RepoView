"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [repoOwner, setRepoOwner] = useState("");
  const [repoName, setRepoName] = useState("");
  const [repoData, setRepoData] = useState(null);

  const fetchRepoData = async () => {
    try {
      const response = await axios.get("/api/githubRepoData", {
        params: {
          repoOwner,
          repoName,
        },
      });
      console.log(response.data);
      setRepoData(response.data.data.repository);
    } catch (error) {
      console.error("Error fetching repo data", error);
    }
  };

  return (
    // <div className="container">
    //   <h1 className="text-2xl font-bold">GitHub Repo Analytics</h1>

    //   <div className="my-4">
    //     <input
    //       type="text"
    //       value={repoOwner}
    //       onChange={(e) => setRepoOwner(e.target.value)}
    //       placeholder="Enter repo owner"
    //       className="border p-2"
    //     />
    //     <input
    //       type="text"
    //       value={repoName}
    //       onChange={(e) => setRepoName(e.target.value)}
    //       placeholder="Enter repo name"
    //       className="border p-2"
    //     />
    //     <button onClick={fetchRepoData} className="p-2 bg-blue-500 text-white">
    //       Fetch Repo Data
    //     </button>
    //   </div>

    //   {repoData && (
    //     <div className="repo-stats">
    //       <h2 className="text-xl font-bold">{repoName}</h2>
    //       <p>Stars: {repoData.stargazers.totalCount}</p>
    //       <p>Forks: {repoData.forks.totalCount}</p>
    //       <p>Open Issues: {repoData.issues.totalCount}</p>
    //       <p>Open Pull Requests: {repoData.pullRequests.totalCount}</p>
    //     </div>
    //   )}
    // </div>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Repo View
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Your GitHub Repo Analytics On The Go
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Input
              placeholder="Github Username"
              type="text"
              onChange={(e) => setRepoOwner(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Repo Name"
              type="text"
              onChange={(e) => setRepoName(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-00 dark:to-zinc-00 to-neutral-600 block dark:bg-zinc-800 w-[300px] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition duration-300"
          type="submit"
          onClick={fetchRepoData}
        >
          Get Analytics
        </button>
        <div>
          {repoData && (
            <div className="repo-stats">
              <h2 className="text-xl font-bold">{repoName}</h2>
              <p>Stars: {repoData.stargazers.totalCount}</p>
              <p>Forks: {repoData.forks.totalCount}</p>
              <p>Open Issues: {repoData.issues.totalCount}</p>
              <p>Open Pull Requests: {repoData.pullRequests.totalCount}</p>
            </div>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
