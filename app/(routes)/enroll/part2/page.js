"use client";
import BackButtonHeader from "@/app/(routes)/enroll/_components/BackButtonHeader";
import { Avatar, Button, Flex, Menu, Table } from "antd";
import React, { useEffect } from "react";

const columns = [
  {
    title: "요일",
    dataIndex: "week",
    key: "week",
    align: "center",
  },
  {
    title: "시간",
    dataIndex: "time",
    key: "time",
    align: "center",
  },
];
const data = [
  {
    key: "1",
    week: "일요일",
    time: "휴무",
  },
  {
    key: "2",
    week: "월요일",
    time: "09:00-18:30",
  },
  {
    key: "3",
    week: "화요일",
    time: "09:00-18:30",
  },
  {
    key: "4",
    week: "수요일",
    time: "09:00-20:30 (야간진료)",
  },
  {
    key: "5",
    week: "목요일",
    time: "09:00-20:30 (야간진료)",
  },
  {
    key: "6",
    week: "금요일",
    time: "09:00-18:30",
  },
  {
    key: "7",
    week: "토요일",
    time: "09:00-14:30 (휴게시간 없음)",
  },
  {
    key: "8",
    week: "공휴일",
    time: "휴무",
  },
];
const ApplicationPart2 = () => {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <BackButtonHeader title={"신청하기(2/3)"} />
      <HospitalInfo />
      <DiagnosisMenu />
      <div style={{ height: "calc(100% - 220px)", overflow: "scroll" }}>
        <DiagnosisTime />
        <DiagnosisInfo />
        <HospitalPlace />
      </div>
      <ButtonSpace />
    </div>
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

const DiagnosisTime = () => (
  <div style={{ margin: 20 }}>
    <strong style={{ fontSize: 16 }}>진료시간</strong>
    <div style={{ margin: 10 }}></div>
    <div>
      <Flex>
        <div
          style={{
            padding: "8px 16px 8px 16px",
            borderRadius: 999,
            background: "#FFEADB",
            color: "#FF8400",
          }}
        >
          진료예정
        </div>
        <div style={{ marginLeft: 10 }}>
          <div>
            <strong style={{ fontSize: 16 }}>금요일 09:00 - 18:30</strong>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#777777" }}>
              점심시간 12:00-13:00
            </div>
          </div>
        </div>
      </Flex>
    </div>
    <div style={{ marginTop: 10 }}>
      <Table columns={columns} dataSource={data} pagination={false}></Table>
    </div>
  </div>
);

const DiagnosisInfo = () => (
  <div style={{ backgroundColor: "white" }}>
    <div>
      <InfoCard title={"의사정보"} total="2명">
        <Info name="강호동" />
        <Info name="유재석" />
      </InfoCard>
      <InfoCard title={"진료과목"} total="1개">
        <Info name="노인 및 요양" />
      </InfoCard>
      <InfoCard title={"의료장비"} total="2개">
        <Info name="초음파영상 진단기" />
        <Info name="고밀도 검사기" />
      </InfoCard>
    </div>
  </div>
);

const HospitalPlace = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv);
    console.log(map);
  }, []);
  return (
    <div style={{ margin: 20 }}>
      <strong style={{ fontSize: 16 }}>병원위치</strong>
      <Flex align="center" style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 12, flexGrow: 1 }}>
          경기도 고양시 일산동구 일산로 243 도헌프라자
        </div>
        <Button>복사</Button>
      </Flex>
      <div
        id="map"
        style={{
          width: "80%",
          height: 300,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></div>
      <div style={{ lineHeight: 1.6, margin: "20px 0" }}>
        <strong style={{ fontSize: 16 }}>주차정보</strong>
        <div style={{ fontSize: 12, color: "#777777" }}>주차가능(유료)</div>
      </div>
    </div>
  );
};

const Info = ({ name }) => {
  return (
    <span
      style={{
        padding: "2px 10px 2px 10px",
        backgroundColor: "#F6F6F6",
        fontSize: 12,
        margin: 5,
        borderRadius: 20,
      }}
    >
      {name}
    </span>
  );
};

const InfoCard = ({ title, total, children }) => (
  <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
    <Flex>
      <strong style={{ flexGrow: 1, fontSize: 14 }}>{title}</strong>
      <div style={{ color: "#777777", marginRight: 10, fontSize: 12 }}>
        총 {total}
      </div>
    </Flex>
    <div style={{ marginTop: 10 }}>{children}</div>
  </div>
);

const ButtonSpace = () => (
  <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
    <Flex
      style={{
        width: "100%",
        maxWidth: 480,
        height: 70,
        backgroundColor: "white",
      }}
    >
      <Button
        block
        style={{ flexGrow: 1, margin: "10px 5px 10px 10px", height: 40 }}
      >
        추천하기
      </Button>
      <Button
        type="primary"
        block
        style={{ flexGrow: 1, margin: "10px 10px 10px 5px", height: 40 }}
      >
        예약문의
      </Button>
    </Flex>
  </div>
);

export default ApplicationPart2;
