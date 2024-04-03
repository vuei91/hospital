import { Inter } from "next/font/google";
import "./globals.css";
import MobileLayout from "@/components/MobileLayout";
import LoginLayout from "@/components/LoginLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "요양시설 신청시스템",
  description: "쉽게 요양시설 검색하여 신청하기",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=v78r0xpip1"
        ></script>
      </head>
      <body className={inter.className}>
        <LoginLayout>
          <MobileLayout>{children}</MobileLayout>
        </LoginLayout>
      </body>
    </html>
  );
}
