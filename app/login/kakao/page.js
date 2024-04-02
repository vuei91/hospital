"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const Kakao = () => {
  const params = useSearchParams();
  useEffect(() => {
    const REST_API_KEY = "0f46caa576892c645d6f9a3eaaaabcd3";
    const code = params.get("code");
    console.log(code);
    axios
      .post(`https://kauth.kakao.com/oauth/token`, null, {
        params: {
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: "http://localhost:3000/login/kakao",
          code: code.trim(),
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        localStorage.setItem("kakao_access_token", response.data.access_token);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>KakaoLogin</div>;
};

export default Kakao;
