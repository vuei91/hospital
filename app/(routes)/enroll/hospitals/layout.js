"use client";
import React from "react";
import TopNav from "@/app/_components/TopNav";
import { Flex, Menu, Select } from "antd";
import useHospitalQuery from "@/app/_hooks/useHospitalQuery";

const HospitalsLayout = ({ children }) => {
  return (
    <>
      <TopNav title={"신청하기"} isBack />
      <HospitalsNav />
      <div className="container none_bottom">{children}</div>
    </>
  );
};

const HospitalsNav = () => {
  const { data: resp } = useHospitalQuery(localStorage.getItem("token"));
  return (
    <div
      style={{
        position: "fixed",
        maxWidth: 470,
        top: 46,
        zIndex: 2,
        width: "98%",
        backgroundColor: "#F7F9FC",
      }}
    >
      <Flex align="center" justify="space-between">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: 1, label: `요양병원(${resp?.data?.length || 0})` },
            { key: 2, label: "요양원(12)" },
          ]}
          style={{
            flexGrow: 1,
            backgroundColor: "#F7F9FC",
            border: 0,
          }}
        />
        <Select
          defaultValue="distance"
          style={{ width: 120, marginTop: 5 }}
          options={[
            { value: "distance", label: "거리순" },
            { value: "review", label: "리뷰많은순" },
          ]}
        />
      </Flex>
    </div>
  );
};

export default HospitalsLayout;
