"use client";
import React from "react";
import TopNav from "@/app/_components/TopNav";
import BottomButton from "@/app/_components/BottomButton";
import patientInfoStore from "@/app/_service/patientInfoStore";
import {
  useCreatePatientMutation,
  useUpdatePatientMutation,
} from "@/app/_hooks/usePatientMutation";
import { Modal } from "antd-mobile";
import { useRouter, useSearchParams } from "next/navigation";
import { usePatientOneQuery } from "@/app/_hooks/usePatientQuery";

const Layout = ({ children }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const { name, phone, grade, clear } = patientInfoStore((state) => state);
  const { createPatient } = useCreatePatientMutation();
  const { updatePatient } = useUpdatePatientMutation(id);
  const { refetch } = usePatientOneQuery(id);
  const create = async () => {
    await createPatient({ name, phone, grade }, { onSuccess });
  };
  const update = async () => {
    await updatePatient({ name, phone, grade }, { onSuccess });
  };
  const onSuccess = (data) => {
    if (data?.status === "success") {
      refetch().then(() => {
        router.push("/enroll/choice-patient");
        clear();
      });
    } else {
      Modal.alert({
        content: "문제가 있으니 다시 입력해주세요",
        confirmText: "확인",
      });
    }
  };
  const submit = async () => {
    if (!name || !name.replace(/ /g, "")) {
      return Modal.alert({
        content: "이름을 입력해주세요",
        confirmText: "확인",
      });
    }
    if (!phone || !phone.replace(/ /g, "")) {
      return Modal.alert({
        content: "휴대폰번호를 입력해주세요",
        confirmText: "확인",
      });
    }
    if (!grade || !grade.replace(/ /g, "")) {
      return Modal.alert({
        content: "요양등급을 입력해주세요",
        confirmText: "확인",
      });
    }
    !id ? await create() : await update();
  };
  return (
    <>
      <TopNav title={"환자정보입력"} isBack />
      <div className="container">{children}</div>
      <BottomButton text={!id ? "등록" : "수정"} onClick={submit} />
    </>
  );
};

export default Layout;
