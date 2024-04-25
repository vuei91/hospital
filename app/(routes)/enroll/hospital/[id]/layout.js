"use client";
import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomTwoButton from "@/app/_components/BottomTwoButton";
import { Avatar, Flex, Menu } from "antd";
import { useParams, useRouter } from "next/navigation";
import useHospitalQuery from "@/app/_hooks/useHospitalQuery";

const HospitalLayout = ({ children }) => {
  const router = useRouter();
  const move = () => {
    router.push("/enroll/choice-patient");
  };
  return (
    <>
      <TopNav title={"신청하기"} isBack />
      <div style={{ position: "relative", top: 46 }}>
        <HospitalInfo />
        <DiagnosisMenu />
      </div>
      <div className="hospital-container">{children}</div>
      <BottomTwoButton
        text1={"추천하기"}
        text2={"예약문의"}
        onClickText2={move}
      />
    </>
  );
};

const HospitalInfo = () => {
  const params = useParams();
  const { resp, isSuccess } = useHospitalQuery(params.id);
  if (!isSuccess) return null;
  const hospital = resp.data;
  return (
    <Flex align="center">
      <Avatar
        style={{ backgroundColor: "white", margin: "10px 20px 10px 10px" }}
        size="large"
        icon={"🏥"}
      />
      <div style={{ lineHeight: 1.6 }}>
        <strong style={{ fontSize: 16 }}>{hospital.name}</strong>
        <div style={{ fontSize: 12, color: "#777777" }}>{hospital.address}</div>
      </div>
    </Flex>
  );
};

const DiagnosisMenu = () => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{
      backgroundColor: "#F7F9FC",
      height: 40,
      zIndex: 2,
    }}
    items={[
      {
        key: 1,
        label: "진료시간",
        style: { flexGrow: 1, textAlign: "center" },
        onClick: () => {
          const info = document.querySelector(
            "div.hospital-container > div:nth-child(1)",
          );
          document.querySelector(".hospital-container").scrollTo(0, 0);
        },
      },
      {
        key: 2,
        label: "진료정보",
        style: { flexGrow: 1, textAlign: "center" },
        onClick: () => {
          const info = document.querySelector(
            "div.hospital-container > div:nth-child(1)",
          );
          document
            .querySelector(".hospital-container")
            .scrollTo(0, info.scrollHeight);
        },
      },
      {
        key: 3,
        label: "병원위치",
        style: { flexGrow: 1, textAlign: "center" },
        onClick: () => {
          const info = document.querySelector(
            "div.hospital-container > div:nth-child(1)",
          );
          const info2 = document.querySelector(
            "div.hospital-container > div:nth-child(2)",
          );
          document
            .querySelector(".hospital-container")
            .scrollTo(0, info.scrollHeight + info2.scrollHeight);
        },
      },
    ]}
  ></Menu>
);

export default HospitalLayout;
