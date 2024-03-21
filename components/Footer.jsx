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
      <FooterButton text={"홈"} Icon={HomeFilled} opacity={1} />
      <FooterButton text={"건강관리"} Icon={PlusSquareOutlined} opacity={0.3} />
      <FooterButton text={"신청내역"} Icon={MenuOutlined} opacity={0.3} />
      <FooterButton text={"마이페이지"} Icon={UserOutlined} opacity={0.3} />
    </Flex>
  );
};

const FooterButton = ({ Icon, text, opacity }) => {
  return (
    <Button
      type="link"
      style={{
        flexGrow: 1,
        height: "100%",
        color: "#000000",
        opacity: opacity,
      }}
    >
      <Icon style={{ fontSize: 30 }} />
      <div style={{ fontSize: 12 }}>{text}</div>
    </Button>
  );
};
export default Footer;
