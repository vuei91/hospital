"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const oauth = () => {
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    window.localStorage.setItem("token", params.token);
    router.push("/register/part1");
  }, []);
  return null;
};

export default oauth;
