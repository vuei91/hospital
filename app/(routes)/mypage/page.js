"use client";
import { Button, Flex } from "antd";
import React from "react";
import useMemberQuery from "@/app/_hooks/useMemberQuery";
import { useRouter } from "next/navigation";

const mypage = () => {
  const router = useRouter();
  const { resp, isSuccess } = useMemberQuery();
  if (!isSuccess) return null;
  const member = resp?.data;
  return (
    <>
      <style jsx>{`
        th {
          text-align: left;
          width: 80px;
          height: 25px;
        }
      `}</style>
      <div style={{ margin: 20 }}>
        <Flex align="center">
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#C5C5C5",
              marginRight: 10,
            }}
          ></div>
          <div>
            {member?.["type"] === "naver" ? "네이버로그인" : "카카오로그인"}
          </div>
        </Flex>
        <table style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <th>이름</th>
              <td>{member?.["name"]}</td>
            </tr>
            <tr>
              <th>휴대폰번호</th>
              <td>{member?.["phone"]}</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>{member?.["email"]}</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: 30 }}>
          <Button block style={{ height: 56 }}>
            <Flex align="center" justify="space-between">
              <div>문의사항 보내기</div>
              <div>wkwk2805@gmail.com</div>
            </Flex>
          </Button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 20,
          width: "calc(100% - 40px)",
        }}
      >
        <Button
          block
          style={{ height: 48 }}
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/");
          }}
        >
          로그아웃
        </Button>
        <div style={{ height: 10 }}></div>
        <Button block danger style={{ height: 48 }}>
          회원탈퇴
        </Button>
      </div>
    </>
  );
};

export default mypage;
