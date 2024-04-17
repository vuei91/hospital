"use client";
import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomButton from "@/app/_components/BottomButton";
import { Modal, Toast } from "antd-mobile";
import { useRouter } from "next/navigation";

const ChoicePatientLayout = ({ children }) => {
  const router = useRouter();
  const enroll = () => {
    Modal.show({
      content: "신청 하시겠습니까?",
      closeOnAction: true,
      actions: [
        {
          key: "Yes",
          text: "네",
          primary: true,
          onClick() {
            Toast.show({
              icon: "success",
              content: "신청완료",
              position: "bottom",
            });
            router.push("/");
          },
        },
        {
          key: "No",
          text: "아니오",
        },
      ],
    });
  };
  return (
    <>
      <TopNav title={"신청하기"} isBack />
      <div className="container">{children}</div>
      <BottomButton text={"신청하기"} onClick={enroll} />
    </>
  );
};

export default ChoicePatientLayout;
