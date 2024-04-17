"use client";
import React, { useState } from "react";
import { Button, NavBar, Space, Tabs } from "antd-mobile";
import {
  Complete,
  Contacting,
  Waiting,
} from "@/app/(routes)/history/_components/Tags";
import { useRouter } from "next/navigation";
import BottomNav from "@/app/_components/BottomNav";
import { List } from "antd";

const HistoryMain = () => {
  const [nav, setNav] = useState("progress");
  const onChange = (tab) => {
    setNav(tab);
  };
  return (
    <div>
      <Tabs
        activeLineMode={"full"}
        defaultActiveKey={"progress"}
        activeKey={nav}
        onChange={onChange}
      >
        <Tabs.Tab title="진행중(1)" key="progress" />
        <Tabs.Tab title="완료" key="complete" />
      </Tabs>
      <List
        style={{ width: "100%", margin: "auto" }}
        dataSource={[{}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={(item, index) => (
          <List.Item style={{ backgroundColor: "white", margin: 10 }}>
            {nav === "progress" ? (
              <MainCard state={"waiting"} />
            ) : (
              <MainCard state={"complete"} />
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

const MainCard = ({ state }) => {
  const router = useRouter();
  const goToDetail = () => {
    router.push("/history/detail");
  };
  return (
    <Space direction="vertical" style={{ width: "100%", padding: "10px 20px" }}>
      {state === "waiting" ? <Waiting /> : null}
      {state === "contacting" ? <Contacting /> : null}
      {state === "complete" ? <Complete /> : null}
      <div style={{ fontSize: 12, color: "#B1B9C0" }}>2024-04-12(금)</div>
      <div style={{ fontSize: 18, fontWeight: 600 }}>무지개 요양병원</div>
      <Space direction={"vertical"}>
        <Space>
          <span style={{ color: "#717375", fontSize: 16 }}>신청인</span>
          <span style={{ fontWeight: 600, fontSize: 16 }}>김무제</span>
        </Space>
        <Space>
          <span style={{ color: "#717375", fontSize: 16 }}>환자명</span>
          <span style={{ fontWeight: 600, fontSize: 16 }}>김요양</span>
        </Space>
      </Space>
      <Button color="primary" fill="outline" block onClick={goToDetail}>
        자세히 보기
      </Button>
    </Space>
  );
};

export default HistoryMain;
