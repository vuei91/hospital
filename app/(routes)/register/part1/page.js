import Register from "@/app/(routes)/register/_components/Register";
import React from "react";

const RegisterPart1 = () => {
  return (
    <Register
      url={"/register/part2"}
      hint="이름을 입력해주세요"
      inputText="간단정보입력(1/3)"
    />
  );
};

export default RegisterPart1;
