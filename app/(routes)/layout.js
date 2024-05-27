import { Inter } from "next/font/google";
import "./globals.css";
import MobileLayout from "@/app/_components/MobileLayout";
import { MAP_CLIENT_ID } from "../_constants";
import LoginLayout from "@/app/_components/LoginLayout";
import Provider from "@/app/(routes)/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "요양시설 신청시스템",
  description: "쉽게 요양시설 검색하여 신청하기",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <LoginLayout>
            <MobileLayout>{children}</MobileLayout>
          </LoginLayout>
        </Provider>
      </body>
    </html>
  );
}
