"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BACKEND_URL } from "../_constants";

const LoginLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    axios
      .get(`${BACKEND_URL}/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          router.push("/login");
        }
      })
      .catch((error) => {
        console.error(error);
        router.push("/login");
      });
  }, []);
  return <>{children}</>;
};

export default LoginLayout;
