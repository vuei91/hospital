"use client";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const move = () => {
    router.push("/register");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div>
        <h1>요양병원 예약시스템</h1>
      </div>
      <div
        style={{
          marginTop: 150,
          width: "80%",
        }}
      >
        <Button block style={{ backgroundColor: "#FDDC3F" }} onClick={move}>
          카카오 로그인
        </Button>
        <div style={{ margin: 5 }}></div>
        <Button
          block
          style={{ backgroundColor: "#2DB400", color: "white" }}
          onClick={move}
        >
          네이버 로그인
        </Button>
        <div style={{ margin: 5 }}></div>
        <Button
          block
          style={{
            backgroundColor: "#000000",
            color: "white",
          }}
          onClick={move}
        >
          애플 로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
