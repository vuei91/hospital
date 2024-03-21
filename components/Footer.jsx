"use client";
import {
  HomeFilled,
  MenuOutlined,
  PlusSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";

const Footer = () => {
  return (
    <Flex
      style={{
        position: "absolute",
        bottom: 0,
        height: 91,
        backgroundColor: "#ffffff",
        maxWidth: 480,
        width: "100%",
        border: "1px solid #F0F0F6",
      }}
    >
      <Button
        type="link"
        style={{ flexGrow: 1, height: "100%", color: "#000000", opacity: 1 }}
      >
        <HomeFilled style={{ fontSize: 30 }} />
        <div style={{ fontSize: 12 }}>홈</div>
      </Button>
      <Button
        type="link"
        style={{ flexGrow: 1, height: "100%", color: "#000000", opacity: 0.3 }}
      >
        <PlusSquareOutlined style={{ fontSize: 30 }} />
        <div style={{ fontSize: 12 }}>건강관리</div>
      </Button>
      <Button
        type="link"
        style={{ flexGrow: 1, height: "100%", color: "#000000", opacity: 0.3 }}
      >
        <MenuOutlined style={{ fontSize: 30 }} />
        <div style={{ fontSize: 12 }}>신청내역</div>
      </Button>
      <Button
        type="link"
        style={{ flexGrow: 1, height: "100%", color: "#000000", opacity: 0.3 }}
      >
        <UserOutlined style={{ fontSize: 30 }} />
        <div style={{ fontSize: 12 }}>마이페이지</div>
      </Button>
    </Flex>
  );
};

export default Footer;
