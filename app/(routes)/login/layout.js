"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BACKEND_URL } from "@/app/_constants";

const LoginLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .get(`${BACKEND_URL}/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          router.push("/home");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <>{children}</>;
};

export default LoginLayout;
