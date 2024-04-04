"use client";
import Footer from "@/app/_components/Footer";
import { Button, Flex } from "antd";
import React from "react";

const mypage = () => {
  return (
    <>
      <style jsx>{`
        th {
          text-align: left;
          width: 80px;
          height: 25px;
        }
      `}</style>
      <div style={{ position: "relative", height: "100%" }}>
        <Flex
          align="center"
          style={{ height: 56, borderBottom: "1px solid #EFF0F2" }}
        >
          <strong style={{ fontSize: 16, marginLeft: 20 }}>마이페이지</strong>
        </Flex>
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
            <div>카카오로그인</div>
          </Flex>
          <table style={{ marginTop: 20 }}>
            <tbody>
              <tr>
                <th>이름</th>
                <td>유재석</td>
              </tr>
              <tr>
                <th>휴대폰번호</th>
                <td>010-1234-1234</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>asd@naver.com</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 30 }}>
            <Button block style={{ height: 56 }}>
              <Flex align="center" justify="space-between">
                <div>문의사항 보내기</div>
                <div>abcde@naver.com</div>
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
          <Button block style={{ height: 48 }}>
            로그아웃
          </Button>
          <div style={{ height: 10 }}></div>
          <Button block danger style={{ height: 48 }}>
            회원탈퇴
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default mypage;
