"use client";
import React from "react";
import { Button, Flex } from "antd";

const BottomButton = ({ text }) => {
  return (
    <div className="bottom">
      <Flex style={{ height: 80 }} align="center" justify="center">
        <Button block type={"primary"} style={{ height: 48, width: "90%" }}>
          {text}
        </Button>
      </Flex>
    </div>
  );
};

export default BottomButton;
