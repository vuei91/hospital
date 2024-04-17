"use client";
import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomTwoButton from "@/app/_components/BottomTwoButton";
import { Avatar, Flex, Menu } from "antd";

const HospitalLayout = ({ children }) => {
  return (
    <>
      <TopNav title={"신청하기"} isBack />
      <div style={{ position: "relative", top: 46 }}>
        <HospitalInfo />
        <DiagnosisMenu />
      </div>
      <div className="hospital-container">{children}</div>
      <BottomTwoButton text1={"추천하기"} text2={"예약문의"} />
    </>
  );
};

const HospitalInfo = () => (
  <Flex align="center">
    <Avatar
      style={{ backgroundColor: "white", margin: "10px 20px 10px 10px" }}
      size="large"
      icon={"🏥"}
    />
    <div style={{ lineHeight: 1.6 }}>
      <strong style={{ fontSize: 16 }}>무지개요양병원</strong>
      <div style={{ fontSize: 12, color: "#777777" }}>
        고양시 일산동구 덕이동
      </div>
    </div>
  </Flex>
);

const DiagnosisMenu = () => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{
      backgroundColor: "#F7F9FC",
      height: 40,
    }}
    items={[
      {
        key: 1,
        label: "진료시간",
        style: { flexGrow: 1, textAlign: "center" },
      },
      {
        key: 2,
        label: "진료정보",
        style: { flexGrow: 1, textAlign: "center" },
      },
      {
        key: 3,
        label: "병원위치",
        style: { flexGrow: 1, textAlign: "center" },
      },
    ]}
  ></Menu>
);

export default HospitalLayout;
