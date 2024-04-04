"use client";
import React, { useEffect } from "react";

const MobileLayout = ({ children }) => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });
  return (
    <div
      style={{
        maxWidth: 480,
        width: "100%",
        margin: "auto",
        border: "1px solid #eee",
        backgroundColor: "#F7F9FC",
        height: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      {children}
    </div>
  );
};

export default MobileLayout;
