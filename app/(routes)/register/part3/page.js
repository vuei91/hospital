import Register from "@/app/(routes)/register/_components/Register";
import React from "react";

const RegisterPart3 = () => {
  return (
    <Register
      url={"/"}
      hint="장애 등급을 표시해 주세요"
      inputText="간단정보입력(3/3)"
    />
  );
};

export default RegisterPart3;
