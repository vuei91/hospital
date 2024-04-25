"use client";
import { Card, Flex } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "@/app/_constants";
import useHospitalsQuery from "@/app/_hooks/useHospitalsQuery";

const hospitals = [
  {
    title: "무지개 요양병원",
    dist: "27km",
    addr: "고양시 일산서구 덕이동",
    review: "126",
    url: "/enroll/hospital",
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
  const router = useRouter();
  const { resp, isSuccess } = useHospitalsQuery();
  if (!isSuccess) return null;
  const hospitals = resp.data;
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
      {hospitals.map((item, key) => (
        <HospitalsCard
          key={key}
          title={item.name}
          dist={"27km"}
          addr={item.address}
          review={"12"}
          url={"/enroll/hospital/" + item.id}
        />
      ))}
    </Flex>
  );
};

const HospitalsCard = ({ title, dist, addr, review, url }) => {
  const router = useRouter();
  return (
    <Card
      hoverable
      style={{ lineHeight: 1.6, marginBottom: 10 }}
      onClick={() => router.push(url)}
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
