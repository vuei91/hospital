"use client";
import React from "react";
import { Flex, Input } from "antd";
import patientInfoStore from "@/app/_service/patientInfoStore";

const RegisterPatient = () => {
  const { setName, setPhone, setGrade } = patientInfoStore((state) => state);
  return (
    <Flex vertical justify="center" align="center">
      <Input
        placeholder="환자의 이름을 입력해주세요"
        allowClear
        style={{
          width: "95%",
          marginTop: 50,
          height: 48,
          backgroundColor: "#F7F7FA",
        }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="연락 가능한 휴대폰 번호를 입력해 주세요."
        allowClear
        style={{
          width: "95%",
          marginTop: 15,
          height: 48,
          backgroundColor: "#F7F7FA",
        }}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <Input
        placeholder="장애 등급을 표기해 주세요."
        allowClear
        style={{
          width: "95%",
          marginTop: 15,
          height: 48,
          backgroundColor: "#F7F7FA",
        }}
        onChange={(e) => {
          setGrade(e.target.value);
        }}
      />
    </Flex>
  );
};

export default RegisterPatient;
