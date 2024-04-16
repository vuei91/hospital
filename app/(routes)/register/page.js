"use client";
import React from "react";
import { Flex, Input } from "antd";

const RegisterPatient = () => {
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
      />
    </Flex>
  );
};

export default RegisterPatient;
