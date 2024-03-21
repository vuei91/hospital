import React from "react";
import Register from "@/components/Register";

const page = () => {
  return (
    <Register
      url={"/register2"}
      hint="이름을 입력해주세요"
      inputText="간단정보입력(1/3)"
    />
  );
};

export default page;
