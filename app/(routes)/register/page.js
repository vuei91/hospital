"use client";
import React, { useEffect } from "react";
import { Flex, Input } from "antd";
import patientInfoStore from "@/app/_service/patientInfoStore";
import { useSearchParams } from "next/navigation";
import { usePatientOneQuery } from "@/app/_hooks/usePatientQuery";

const RegisterPatient = () => {
  const { setName, setPhone, setGrade } = patientInfoStore((state) => state);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { resp, isSuccess } = usePatientOneQuery(id);
  useEffect(() => {
    const patient = resp?.data;
    if (patient) {
      setName(patient.name);
      setPhone(patient.phone);
      setGrade(patient.grade);
    }
  }, [isSuccess]);
  if (!isSuccess) return null;
  const patient = resp.data;
  return (
    <Flex vertical justify="center" align="center">
      <Input
        placeholder="환자의 이름을 입력해주세요"
        defaultValue={patient?.["name"]}
        allowClear
        style={{
          width: "95%",
          marginTop: 50,
          height: 48,
          backgroundColor: "#F7F7FA",
        }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="연락 가능한 휴대폰 번호를 입력해 주세요."
        defaultValue={patient?.["phone"]}
        allowClear
        style={{
          width: "95%",
          marginTop: 15,
          height: 48,
          backgroundColor: "#F7F7FA",
        }}
        onLoad={() => setPhone(patient?.["phone"])}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <Input
        placeholder="요양 등급을 표기해 주세요."
        defaultValue={patient?.["grade"]}
        allowClear
        style={{
          width: "95%",
          marginTop: 15,
          height: 48,
          backgroundColor: "#F7F7FA",
        }}
        onLoad={() => setGrade(patient?.["grade"])}
        onChange={(e) => {
          setGrade(e.target.value);
        }}
      />
    </Flex>
  );
};

export default RegisterPatient;
