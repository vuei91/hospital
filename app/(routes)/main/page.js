"use client";
import React from "react";
import { Card, Flex } from "antd";
import HomeCard from "@/app/(routes)/main/_component/HomeCard";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <Flex vertical style={{ width: "90%", margin: "auto" }}>
      <HomeCard
        style={{
          margin: "10px 5px 0 0",
        }}
        image="🏥"
        title="요양시설 신청하기"
        desc="가까운 집 주변찾기"
        url="/application/part1"
      />
      <Flex style={{ flexGrow: 1 }}>
        <HomeCard
          style={{ margin: "10px 5px 0 0" }}
          image="🙋🏻‍♀️"
          title="요양사 부르기"
          desc="친절한 요양사를 찾아요"
        />
        <HomeCard
          style={{ margin: "10px 0 0 5px" }}
          image="💭"
          title="상담신청하기"
          desc="전문가에게 상담해주세요"
        />
      </Flex>
      <Card
        style={{ margin: "20px 0", flexGrow: 1, alignContent: "center" }}
        onClick={logout}
      >
        <p>광고란</p>
      </Card>
      <HomeCard
        image="📺"
        title="광고 문의"
        desc="병원 및 판매용품 문의해 주세요"
        style={{ margin: "10px 0 0 5px" }}
      />
      <HomeCard
        style={{ marginTop: 10 }}
        image="💸"
        title="상품판매"
        desc="장애 용품 등을 판매하고 있어요"
      />
      <div style={{ height: 20 }} />
    </Flex>
  );
};

export default Main;
