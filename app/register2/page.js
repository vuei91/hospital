import Register from "@/components/Register";
import React from "react";

const Register2 = () => {
  return (
    <Register
      url={"/register3"}
      hint="휴대폰 번호를 입력해 주세요"
      inputText="간단정보입력(2/3)"
    />
  );
};

export default Register2;
