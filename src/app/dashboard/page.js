// "use client";
// import React from "react";
// import { useRepoData } from "@/context/RepoDataContext";
// import { motion } from "framer-motion";
// import {
//   FaStar,
//   FaCodeBranch,
//   FaExclamationCircle,
//   FaBalanceScale,
// } from "react-icons/fa";
// import { FaCodePullRequest } from "react-icons/fa6";

// import { CircularProgressbar } from "react-circular-progressbar";
// import { useRouter } from "next/navigation";
// import "react-circular-progressbar/dist/styles.css";

// const Dashboard = () => {
//   const { repoData } = useRepoData(); // Access repo data from context
//   console.log(repoData);
//   const {
//     stargazers,
//     forks,
//     issues,
//     pullRequests,
//     defaultBranchRef,
//     licenseInfo,
//     languages,
//     diskUsage,
//   } = repoData?.data?.data?.repository || {};
//   const router = useRouter();

//   if (!repoData) {
//     return (
//       <div className="bg-zinc-300 min-h-screen flex flex-col justify-center items-center">
//         <h1 className="text-xl mb-4">No Data Found!</h1>
//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-00 dark:to-zinc-00 to-neutral-600 block dark:bg-zinc-800 w-[100px] md:w-[150px] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition duration-300 text-center"
//           onClick={() => router.back()}
//         >
//           GO BACK
//         </button>
//       </div>
//     );
//   }

//   return (
//     // <div className="bg-zinc-300 min-h-screen p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//     //   {/* Small Card - Stargazers */}
//     //   <motion.div
//     //     initial={{ opacity: 0, scale: 0.9 }}
//     //     animate={{ opacity: 1, scale: 1 }}
//     //     transition={{ duration: 0.5 }}
//     //     className="bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-around"
//     //   >
//     //     <FaStar size={30} className="text-yellow-500" />
//     //     <div>
//     //       <h2 className="text-xl font-semibold">{stargazers?.totalCount}</h2>
//     //       <p className="text-gray-500">Stars</p>
//     //     </div>
//     //   </motion.div>

//     //   {/* Small Card - Forks */}
//     //   <motion.div
//     //     initial={{ opacity: 0, scale: 0.9 }}
//     //     animate={{ opacity: 1, scale: 1 }}
//     //     transition={{ duration: 0.5 }}
//     //     className="bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-around"
//     //   >
//     //     <FaCodeBranch size={30} className="text-green-500" />
//     //     <div>
//     //       <h2 className="text-xl font-semibold">{forks?.totalCount}</h2>
//     //       <p className="text-gray-500">Forks</p>
//     //     </div>
//     //   </motion.div>

//     //   {/* Small Card - Issues */}
//     //   <motion.div
//     //     initial={{ opacity: 0, scale: 0.9 }}
//     //     animate={{ opacity: 1, scale: 1 }}
//     //     transition={{ duration: 0.5 }}
//     //     className="bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-around"
//     //   >
//     //     <FaExclamationCircle size={30} className="text-red-500" />
//     //     <div>
//     //       <h2 className="text-xl font-semibold">{issues?.totalCount}</h2>
//     //       <p className="text-gray-500">Issues</p>
//     //     </div>
//     //   </motion.div>

//     //   {/* Circular Progress Bar for Disk Usage */}
//     //   <motion.div
//     //     initial={{ opacity: 0, scale: 0.9 }}
//     //     animate={{ opacity: 1, scale: 1 }}
//     //     transition={{ duration: 0.5 }}
//     //     className="bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-around"
//     //   >
//     //     <div style={{ width: 80, height: 80 }}>
//     //       <CircularProgressbar
//     //         value={diskUsage}
//     //         maxValue={100000}
//     //         text={`${diskUsage} KB`}
//     //       />
//     //     </div>
//     //   </motion.div>

//     //   {/* Big Card - Recent Commits */}
//     //   <motion.div
//     //     initial={{ opacity: 0, y: 20 }}
//     //     animate={{ opacity: 1, y: 0 }}
//     //     transition={{ duration: 0.5 }}
//     //     className="col-span-1 md:col-span-2 bg-slate-100 shadow-md rounded-lg p-6"
//     //   >
//     //     <h2 className="text-xl font-semibold mb-4">Recent Commits</h2>
//     //     <ul>
//     //       {defaultBranchRef?.target?.history?.edges.map((commit, index) => (
//     //         <li key={index} className="mb-2">
//     //           <p className="text-gray-700">
//     //             <span className="font-semibold">
//     //               {commit.node.author.user.login}
//     //             </span>{" "}
//     //             - {commit.node.message}
//     //           </p>
//     //           <p className="text-gray-400 text-sm">
//     //             {new Date(commit.node.committedDate).toLocaleDateString()}
//     //           </p>
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   </motion.div>

//     //   {/* License Info */}
//     //   <motion.div
//     //     initial={{ opacity: 0, scale: 0.9 }}
//     //     animate={{ opacity: 1, scale: 1 }}
//     //     transition={{ duration: 0.5 }}
//     //     className="bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-around"
//     //   >
//     //     <FaBalanceScale size={30} className="text-blue-500" />
//     //     <div>
//     //       <h2 className="text-xl font-semibold">{licenseInfo?.name}</h2>
//     //       <p className="text-gray-500">License</p>
//     //     </div>
//     //   </motion.div>

//     //   {/* Center Big Grid - Language Distribution (Bar Chart) */}
//     //   <motion.div
//     //     initial={{ opacity: 0, y: 40 }}
//     //     animate={{ opacity: 1, y: 0 }}
//     //     transition={{ duration: 0.8 }}
//     //     className="col-span-1 md:col-span-3 bg-slate-100 shadow-md rounded-lg p-6"
//     //   >
//     //     <h2 className="text-xl font-semibold mb-4">Language Distribution</h2>
//     //     <div className="grid grid-cols-3 gap-4">
//     //       {languages?.edges.map((lang, index) => (
//     //         <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
//     //           <p className="font-semibold text-lg">{lang.node.name}</p>
//     //           <p className="text-gray-500">
//     //             {Math.round((lang.size / diskUsage) * 100)}%
//     //           </p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </motion.div>
//     // </div>
//     <div className="bg-zinc-300 min-h-screen p-8 grid grid-cols-4 gap-4">
//       {/* Section 3 - Language Distribution (Bar Chart) */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="col-span-2 row-span-2 bg-slate-100 shadow-md rounded-lg p-6"
//       >
//         <h2 className="text-xl font-semibold mb-4">Languages Used</h2>
//         <div className="grid grid-cols-3 gap-4">
//           {languages?.edges.map((lang, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
//               <p className="font-semibold text-md">{lang.node.name}</p>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Section 8 - Stars */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
//       >
//         <FaStar size={30} className="text-yellow-500" />
//         <div>
//           <h2 className="text-xl font-semibold">{stargazers?.totalCount}</h2>
//           <p className="text-gray-500">Stars</p>
//         </div>
//       </motion.div>

//       {/* Section 7 - Issues */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
//       >
//         <FaExclamationCircle size={30} className="text-red-500" />
//         <div>
//           <h2 className="text-xl font-semibold">{issues?.totalCount}</h2>
//           <p className="text-gray-500">Issues</p>
//         </div>
//       </motion.div>

//       {/* Section 4 - License */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
//       >
//         <FaBalanceScale size={30} className="text-blue-500" />
//         <div>
//           <h2 className="text-xl font-semibold">{licenseInfo?.name}</h2>
//           <p className="text-gray-500">License</p>
//         </div>
//       </motion.div>

//       {/* Section 5 - Pull Requests */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center text-center justify-center gap-4"
//       >
//         <FaCodePullRequest size={30} className="text-gray-500" />
//         <div>
//           <h2 className="text-xl font-semibold">{pullRequests?.totalCount}</h2>
//           <p className="text-gray-500">Pull Requests</p>
//         </div>
//       </motion.div>

//       {/* Section 2 - Activity Graph */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="col-span-2 row-span-1 bg-slate-100 shadow-md rounded-lg p-6"
//       >
//         <h2 className="text-xl font-semibold mb-4">Activity</h2>
//         {/* Add your activity graph here */}
//       </motion.div>

//       {/* Section 5 - Circular Disk Usage */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-around"
//       >
//         <div style={{ width: 80, height: 80 }}>
//           <CircularProgressbar
//             value={diskUsage}
//             maxValue={100000}
//             text={`${diskUsage} KB`}
//           />
//         </div>
//       </motion.div>

//       {/* Section 6 - Forks */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
//       >
//         <FaCodeBranch size={30} className="text-green-500" />
//         <div>
//           <h2 className="text-xl font-semibold">{forks?.totalCount}</h2>
//           <p className="text-gray-500">Forks</p>
//         </div>
//       </motion.div>

//       {/* Section 0 - Recent Commits */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="col-span-4 row-span-2 bg-slate-100 shadow-md rounded-lg p-6"
//       >
//         <h2 className="text-xl font-semibold mb-4">Recent Commits</h2>
//         <ul>
//           {defaultBranchRef?.target?.history?.edges.map((commit, index) => (
//             <li key={index} className="mb-2">
//               <p className="text-gray-700">
//                 <span className="font-semibold">
//                   {commit.node.author.user.login}
//                 </span>{" "}
//                 - {commit.node.message}
//               </p>
//               <p className="text-gray-400 text-sm">
//                 {new Date(commit.node.committedDate).toLocaleDateString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";
import React from "react";
import { useRepoData } from "@/context/RepoDataContext";
import { motion } from "framer-motion";
import {
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
  FaBalanceScale,
} from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"; // Import recharts components
import { useRouter } from "next/navigation";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const { repoData } = useRepoData(); // Access repo data from context
  console.log(repoData);
  const {
    stargazers,
    forks,
    issues,
    pullRequests,
    defaultBranchRef,
    licenseInfo,
    languages,
    diskUsage,
  } = repoData?.data?.data?.repository || {};
  const router = useRouter();

  if (!repoData) {
    return (
      <div className="bg-zinc-300 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl mb-4">No Data Found!</h1>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-00 dark:to-zinc-00 to-neutral-600 block dark:bg-zinc-800 w-[100px] md:w-[150px] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition duration-300 text-center"
          onClick={() => router.back()}
        >
          GO BACK
        </button>
      </div>
    );
  }

  // Sample Data for Activity Graph (convert your commit history data here)
  const commitsData =
    defaultBranchRef?.target?.history?.edges.map((commit) => ({
      date: new Date(commit.node.committedDate).toLocaleDateString(),
      commits: 1, // If you have multiple commits for a day, you can aggregate them
    })) || [];

  return (
    <div className="bg-zinc-300 min-h-screen p-8 grid grid-cols-4 gap-4">
      {/* Section 1 - Go to Repo */}

      {/* Section 3 - Language Distribution (Bar Chart) */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-span-2 row-span-2 bg-gradient-to-r from-pink-500 to-orange-500 shadow-md rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Languages Used</h2>
        <div className="grid grid-cols-3 gap-4">
          {languages?.edges.map((lang, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="font-semibold text-md">{lang.node.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 8 - Stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 row-span-1 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
      >
        <FaStar size={30} className="text-yellow-500" />
        <div>
          <h2 className="text-xl font-semibold">{stargazers?.totalCount}</h2>
          <p className="text-gray-500">Stars</p>
        </div>
      </motion.div>

      {/* Section 7 - Issues */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
      >
        <FaExclamationCircle size={30} className="text-red-500" />
        <div>
          <h2 className="text-xl font-semibold">{issues?.totalCount}</h2>
          <p className="text-gray-500">Issues</p>
        </div>
      </motion.div>

      {/* Section 4 - License */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 row-span-1 bg-slate-100 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
      >
        <FaBalanceScale size={30} className="text-blue-500" />
        <div>
          <h2 className="text-xl font-semibold">{licenseInfo?.name}</h2>
          <p className="text-gray-500">License</p>
        </div>
      </motion.div>

      {/* Section 5 - Pull Requests */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="col-span-1 row-span-1 bg-gradient-to-r from-blue-400 to-teal-500  shadow-md rounded-lg p-4 flex items-center text-center justify-center gap-4"
      >
        <FaCodePullRequest size={30} className="text-gray-500" />
        <div>
          <h2 className="text-xl font-semibold">{pullRequests?.totalCount}</h2>
          <p className="text-gray-500">Pull Requests</p>
        </div>
      </motion.div>

      {/* Section 2 - Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="col-span-2 row-span-1 bg-white shadow-md rounded-lg p-6"
      >
        <h2 className="text-xl text-center font-semibold mb-4">Activity</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={commitsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="commits" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Section 5 - Circular Disk Usage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 row-span-1 bg-blue-100 shadow-md rounded-lg p-4 flex items-center justify-around"
      >
        <div style={{ width: 100, height: 80 }}>
          <CircularProgressbar
            value={diskUsage / 1024} // Convert KB to MB
            maxValue={100000 / 1024} // Convert maxValue to MB as well
            text={`${(diskUsage / 1024).toFixed(2)} MB`} // Display in MB with 2 decimal places
            styles={buildStyles({
              textSize: "14px",
              strokeLinecap: "butt",
            })}
          />
        </div>
      </motion.div>

      {/* Section 6 - Forks */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 row-span-1 bg-gradient-to-r from-yellow-200 to-pink-200 shadow-md rounded-lg p-4 flex items-center justify-center gap-4"
      >
        <FaCodeBranch size={30} className="text-green-500" />
        <div>
          <h2 className="text-xl font-semibold">{forks?.totalCount}</h2>
          <p className="text-gray-500">Forks</p>
        </div>
      </motion.div>

      {/* Section 0 - Recent Commits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 row-span-2 bg-slate-100 shadow-md rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Recent Commits</h2>
        <ul>
          {defaultBranchRef?.target?.history?.edges.map((commit, index) => (
            <li key={index} className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">
                  {commit.node.author.user.login}
                </span>{" "}
                - {commit.node.message}
              </p>
              <p className="text-gray-400 text-sm">
                {new Date(commit.node.committedDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Dashboard;
