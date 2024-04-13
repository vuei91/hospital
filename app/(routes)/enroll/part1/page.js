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
];

const ApplicationPart1 = () => {
  return (
    <Flex vertical style={{ height: "100%", overflow: "hidden" }}>
      <BackButtonHeader title={"신청하기(1/3)"} />
      <Flex vertical style={{ margin: 10, height: "100%" }}>
        <ApplicationPart1Nav />
        <Flex
          vertical
          style={{
            margin: "10px 0 50px 0",
            overflow: "scroll",
            flexGrow: 1,
          }}
        >
          {list.map((item, key) => (
            <ApplicationPart2Card
              key={key}
              title={item.title}
              dist={item.dist}
              addr={item.addr}
              review={item.review}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

const ApplicationPart1Nav = () => (
  <Flex align="center">
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={[
        { key: 1, label: "요양병원(8)" },
        { key: 2, label: "요양원(12)" },
      ]}
      style={{ flexGrow: 1, backgroundColor: "#F7F9FC", border: 0 }}
    />
    <Dropdown
      style={{ marginRight: 10 }}
      menu={{ items: [{ key: "1", label: "거리순" }], onClick: null }}
    >
      <Button>
        <Space>
          거리순
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Flex>
);

const ApplicationPart2Card = ({ title, dist, addr, review }) => {
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

export default ApplicationPart1;
