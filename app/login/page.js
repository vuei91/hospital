"use client";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const move = () => {
    router.push("/register/part1");
  };
  const kakaoLogin = () => {
    const REST_API_KEY = "0f46caa576892c645d6f9a3eaaaabcd3";
    const REDIRECT_URI = "http://localhost:3000/login/kakao";
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };
  const normalLogin = async () => {
    const formData = new FormData();
    formData.append("username", "vuei");
    formData.append("password", "1234");
    const resp = await fetch(`http://localhost:8080/login`, {
      method: "POST",
      body: formData,
    });
    const jwt = resp.headers.get("Authorization");
    localStorage.setItem("jwt", jwt);
    router.push("/");
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
          onClick={normalLogin}
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
