"use client";
import { useState } from "react";
import axios from "axios";

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
      setRepoData(response.data.data.repository);
    } catch (error) {
      console.error("Error fetching repo data", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">GitHub Repo Analytics</h1>

      <div className="my-4">
        <input
          type="text"
          value={repoOwner}
          onChange={(e) => setRepoOwner(e.target.value)}
          placeholder="Enter repo owner"
          className="border p-2"
        />
        <input
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          placeholder="Enter repo name"
          className="border p-2"
        />
        <button onClick={fetchRepoData} className="p-2 bg-blue-500 text-white">
          Fetch Repo Data
        </button>
      </div>

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
  );
}
