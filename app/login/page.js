"use client";
import { Button } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:8080/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const kakaoLogin = () => {
    window.location.href = `http://localhost:8080/oauth2/authorization/kakao`;
  };
  const naverLogin = () => {
    window.location.href = `http://localhost:8080/oauth2/authorization/naver`;
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
        <Button
          block
          style={{ backgroundColor: "#FDDC3F" }}
          onClick={kakaoLogin}
        >
          카카오 로그인
        </Button>
        <div style={{ margin: 5 }}></div>
        <Button
          block
          style={{ backgroundColor: "#2DB400", color: "white" }}
          onClick={naverLogin}
        >
          네이버 로그인
        </Button>
        <div style={{ margin: 5 }}></div>
        {/* <Button
          block
          style={{
            backgroundColor: "#000000",
            color: "white",
          }}
          onClick={move}
        >
          애플 로그인
        </Button> */}
      </div>
    </div>
  );
};

export default Login;
