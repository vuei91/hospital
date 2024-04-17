"use client";
import React from "react";
import { Steps } from "antd-mobile";
import { useRouter } from "next/navigation";
import { RightOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { StepTag } from "@/app/(routes)/history/_components/Tags";

const HistoryDetail = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <>
      <FirstInfo />
      <SecondInfo />
      <ThirdInfo />
    </>
  );
};

const FirstInfo = () => {
  return (
    <Flex
      vertical
      justify={"center"}
      style={{
        width: "100%",
        backgroundColor: "white",
        borderTop: "1px solid #DFE2E4",
        borderBottom: "1px solid #DFE2E4",
        height: 108,
      }}
    >
      <Flex justify="space-between" style={{ padding: "0 20px 10px 20px" }}>
        <div style={{ fontSize: 16 }}>신청인</div>
        <strong style={{ fontSize: 16 }}>김무제</strong>
      </Flex>
      <Flex justify="space-between" style={{ padding: "10px 20px 0 20px" }}>
        <div style={{ fontSize: 16 }}>환자명</div>
        <strong style={{ fontSize: 16 }}>김요양</strong>
      </Flex>
    </Flex>
  );
};

const SecondInfo = () => {
  return (
    <Flex vertical justify={"center"} style={{ width: "100%", height: 120 }}>
      <div style={{ padding: 20 }}>
        <strong
          style={{
            fontSize: 16,
            marginLeft: 5,
            marginBottom: 5,
            lineHeight: 2,
          }}
        >
          자세한 정보
        </strong>
        <Button block size={"large"}>
          진행현황 한눈에 보기
        </Button>
      </div>
    </Flex>
  );
};

const ThirdInfo = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderTop: "1px solid #DFE2E4",
        borderBottom: "1px solid #DFE2E4",
      }}
    >
      <div style={{ padding: 20 }}>
        <NumberDesign number={1} />
        <strong style={{ fontSize: 16, lineHeight: 2 }}>무지개 요양병원</strong>
        <div style={{ fontSize: 14, color: "#717375" }}>
          경기도 고양시 덕약구 원당로59번길 23
        </div>
        <div style={{ paddingTop: 10 }}>
          <StepTag text={"2단계"} />
        </div>
      </div>
      <div>
        <Steps current={1}>
          <Steps.Step title="1단계" />
          <Steps.Step title="2단계" />
          <Steps.Step title="3단계" />
          <Steps.Step title="4단계" />
        </Steps>
      </div>
      <Flex
        vertical
        justify={"center"}
        style={{
          height: 108,
        }}
      >
        <Flex justify="space-between" style={{ padding: "0 20px 10px 20px" }}>
          <div style={{ color: "#717375", fontSize: 16 }}>진행현황</div>
          <strong style={{ fontSize: 16 }}>대기중</strong>
        </Flex>
        <Flex justify="space-between" style={{ padding: "10px 20px 0 20px" }}>
          <div style={{ color: "#717375", fontSize: 16 }}>병원정보</div>
          <div>
            <strong style={{ fontSize: 16 }}>자세히보기</strong>
            &nbsp;
            <RightOutlined size={14} color={"#717375"} />
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

const NumberDesign = ({ number }) => (
  <span
    style={{
      border: "1px solid #DFE2E4",
      borderRadius: 5,
      fontSize: 14,
      padding: "2px 7px",
      marginRight: 5,
    }}
  >
    {number}
  </span>
);

export default HistoryDetail;
