"use client";
import BackButtonHeader from "@/app/(routes)/enroll/_components/BackButtonHeader";
import { DownOutlined } from "@ant-design/icons";
import { Button, Card, Dropdown, Flex, Menu, Space } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const list = [
  {
    title: "무지개 요양병원",
    dist: "27km",
    addr: "고양시 일산서구 덕이동",
    review: "126",
  },
  {
    title: "차연 요양병원",
    dist: "22km",
    addr: "고양시 일산동구 정발산동",
    review: "126",
  },
  {
    title: "일산현대요양병원",
    dist: "21km",
    addr: "고양시 일산동구 풍동",
    review: "126",
  },
  {
    title: "동원요양병원",
    dist: "22km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
  {
    title: "연세나을요양병원",
    dist: "21km",
    addr: "고양시 일산동구 장항동",
    review: "126",
  },
];

const Hospitals = () => {
  return (
    <Flex
      vertical
      style={{
        margin: 10,
        overflow: "scroll",
        flexGrow: 1,
        top: 48,
        position: "relative",
      }}
    >
      {list.map((item, key) => (
        <HospitalsCard
          key={key}
          title={item.title}
          dist={item.dist}
          addr={item.addr}
          review={item.review}
        />
      ))}
    </Flex>
  );
};

const HospitalsCard = ({ title, dist, addr, review }) => {
  const router = useRouter();
  return (
    <Card
      hoverable
      style={{ lineHeight: 1.6, marginBottom: 10 }}
      onClick={() => router.push("/application/part2")}
    >
      <strong style={{ fontSize: 16 }}>{title}</strong>
      <div style={{ fontSize: 12 }}>
        <strong>{dist}</strong>&nbsp;{addr}
      </div>
      <div style={{ fontSize: 12 }}>리뷰 {review}</div>
    </Card>
  );
};

export default Hospitals;
