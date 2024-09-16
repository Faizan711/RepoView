import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { RepoDataProvider } from "@/context/RepoDataContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RepoView",
  description: "Your personal Github Analytics Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RepoDataProvider>
          <Toaster position="top-center" reverseOrder={true} />
          {children}
        </RepoDataProvider>
      </body>
    </html>
  );
}
