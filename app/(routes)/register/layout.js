"use client";
import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomButton from "@/app/_components/BottomButton";
import patientInfoStore from "@/app/_service/patientInfoStore";
import usePatientMutation from "@/app/_hooks/usePatientMutation";
import { Modal } from "antd-mobile";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const { name, phone, grade, clear } = patientInfoStore((state) => state);
  const { createPatient, data } = usePatientMutation();
  return (
    <>
      <TopNav title={"환자정보입력"} isBack />
      <div className="container">{children}</div>
      <BottomButton
        text={"등록"}
        onClick={async () => {
          if (name && phone && grade) {
            await createPatient(
              { name, phone, grade },
              {
                onSuccess: (data) => {
                  if (data?.status === "success") {
                    router.push("/enroll/choice-patient");
                    clear();
                  } else {
                    Modal.alert({
                      content: "휴대폰 번호를 다시 입력해주세요",
                      confirmText: "확인",
                    });
                  }
                },
              },
            );
          } else {
            Modal.alert({ content: "모두 입력해주세요", confirmText: "확인" });
          }
        }}
      />
    </>
  );
};

export default Layout;
