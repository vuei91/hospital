"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const BackButtonHeader = ({ title }) => {
  const router = useRouter();
  return (
    <Flex
      style={{
        height: 56,
        width: "100%",
        alignItems: "center",
        borderBottom: "1px solid #EFF0F2",
      }}
    >
      <Button
        icon={<ArrowLeftOutlined />}
        type="text"
        style={{ marginLeft: 10 }}
        onClick={() => router.back()}
      />
      <div
        style={{
          fontSize: 16,
          fontWeight: "bold",
          flexGrow: 1,
          marginLeft: 20,
        }}
      >
        {title}
      </div>
    </Flex>
  );
};

export default BackButtonHeader;
