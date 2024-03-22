"use client";
import { Button, Flex, Input } from "antd";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LeftOutlined } from "@ant-design/icons";

const Register = ({ inputText, hint, url }) => {
  const router = useRouter();
  const move = () => {
    router.push(url);
  };
  return (
    <Flex vertical style={{ height: "100%", backgroundColor: "white" }}>
      <div style={{ marginTop: 20, position: "relative" }}>
        <Button
          icon={<LeftOutlined />}
          type="text"
          style={{ position: "absolute", left: 20, top: -3 }}
          onClick={() => router.back()}
        />
        <div style={{ textAlign: "center" }}>{inputText}</div>
      </div>
      <div style={{ flexGrow: 1, margin: "40px 20px 0 20px" }}>
        <Input placeholder={hint} style={{ background: "#F7F7FA" }} />
      </div>
      <div
        style={{
          padding: 20,
          borderTop: "1px solid #ddd",
          backgroundColor: "white",
        }}
      >
        <Button
          block
          style={{ color: "white", backgroundColor: "#0085FF" }}
          onClick={move}
        >
          다음
        </Button>
      </div>
    </Flex>
  );
};

export default Register;
