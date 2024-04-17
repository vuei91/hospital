import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomButton from "@/app/_components/BottomButton";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav title={"환자정보입력"} isBack />
      <div className="container">{children}</div>
      <BottomButton text={"등록"} />
    </>
  );
};

export default Layout;
