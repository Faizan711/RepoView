import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { RepoDataProvider } from "@/context/RepoDataContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "RepoView",
  description: "Your personal Github Analytics Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <RepoDataProvider>
          <Toaster position="top-center" reverseOrder={true} />
          {children}
        </RepoDataProvider>
      </body>
    </html>
  );
}
