"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Input } from "@/components/ui/input";
import { ImSpinner3 } from "react-icons/im";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRepoData } from "@/context/RepoDataContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [repoOwner, setRepoOwner] = useState("");
  const [repoName, setRepoName] = useState("");
  const [loading, setLoading] = useState(false);
  const { setRepoData } = useRepoData();

  const router = useRouter();

  const fetchRepoData = async () => {
    if (!repoOwner || !repoName) {
      toast.error("Please enter both repo owner and name");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("/api/githubRepoData", {
        params: {
          repoOwner,
          repoName,
        },
      });
      if (
        response.data.errors &&
        response.data.errors[0]?.type === "NOT_FOUND"
      ) {
        toast.error("Repository not found");
        setLoading(false);
        return;
      }
      setRepoData(response.data);
      router.push("/dashboard");
      setRepoOwner("");
      setRepoName("");
      setLoading(false);
      toast.success("Repo data fetched successfully");
    } catch (error) {
      console.error("Error fetching repo data", error);
      toast.error("Error fetching repo data");
      setLoading(false);
    }
  };

  return (
    <AuroraBackground>
      {/* Main content with motion div */}
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
        {/* Header */}
        <header className="flex items-center justify-between p-4 cursor-pointer">
          <Link
            href="https://github.com/Faizan711/RepoView"
            target="_blank"
            className="cursor-pointer animate-bounce"
          >
            <FaGithub className="text-4xl dark:text-white" size={40} />
          </Link>
        </header>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Repo View
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Your GitHub Repo Analytics On The Go
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Input
              placeholder="Owner Username"
              type="text"
              onChange={(e) => setRepoOwner(e.target.value)}
              value={repoOwner}
            />
          </div>
          <div>
            <Input
              placeholder="Repo Name"
              type="text"
              onChange={(e) => setRepoName(e.target.value)}
              value={repoName}
            />
          </div>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-00 dark:to-zinc-00 to-neutral-600 block dark:bg-zinc-800 w-[150px] md:w-[300px] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition duration-300 text-center"
          type="submit"
          onClick={fetchRepoData}
        >
          {" "}
          {loading ? (
            <ImSpinner3 className="animate-spin mx-auto" />
          ) : (
            "Get Analytics"
          )}
        </button>
      </motion.div>
      {/* Footer */}
      <footer className="fixed bottom-0 w-full text-center py-4 bg-transparent dark:bg-transparent">
        <p className="text-sm dark:text-white">
          Made with <span className="animate-pulse">&#123;</span>
          <strong className="animate-pulse">TECH</strong>
          <span className="animate-pulse">&#125;</span> by Faizan
        </p>
      </footer>
    </AuroraBackground>
  );
}
