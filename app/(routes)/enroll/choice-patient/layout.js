import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomButton from "@/app/_components/BottomButton";

const ChoicePatientLayout = ({ children }) => {
  return (
    <>
      <TopNav title={"신청하기"} isBack />
      <div className="container">{children}</div>
      <BottomButton text={"신청하기"} />
    </>
  );
};

export default ChoicePatientLayout;
