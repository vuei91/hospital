"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const oauth = () => {
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    window.localStorage.setItem("token", params.token);
    router.push("/");
  }, []);
  return <div>Success</div>;
};

export default oauth;
