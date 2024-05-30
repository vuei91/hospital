"use client";
import React, { useState } from "react";
import { Button, Checkbox, Collapse } from "antd";
import useMemberQuery from "@/app/_hooks/useMemberQuery";
import enrollStore from "@/app/_service/enrollStore";
import hospitalStore from "@/app/_service/hospitalStore";
import { useEnrollsByHospitalQuery } from "@/app/_hooks/useEnrollQuery";
import { useRouter } from "next/navigation";
const ChoicePatient = () => {
  const router = useRouter();
  const { hospitalId } = hospitalStore((state) => state);
  const { setPatientIds } = enrollStore((state) => state);
  const { resp, isSuccess } = useMemberQuery();
  const { resp: enrollResp, isSuccess: enrollIsSuccess } =
    useEnrollsByHospitalQuery(hospitalId);
  const [keys, setKeys] = useState([]);
  if (!isSuccess) return null;
  if (!enrollIsSuccess) return null;
  const member = resp.data;
  const patients = member?.["patients"];
  const patientIds = enrollResp?.data?.map((e) => e?.["patientId"]);
  const onChange = (e) => {
    if (e.target.checked) {
      const k = keys.concat(e.target.value);
      setKeys(k);
      setPatientIds(k);
    } else {
      const k = keys.filter((elem) => elem !== e.target.value);
      setKeys(k);
      setPatientIds(k);
    }
  };
  return (
    <div>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        activeKey={keys}
        size="small"
        style={{ borderRadius: 0, backgroundColor: "inherit" }}
        items={patients.map((patient) => ({
          key: patient.id,
          label: (
            <Checkbox
              disabled={patientIds?.includes(patient.id) || false}
              onChange={onChange}
              value={patient.id}
              style={{ width: "100%", padding: 20 }}
            >
              {patient.name}
              {patientIds?.includes(patient.id) || false ? (
                <span
                  style={{
                    borderRadius: 4,
                    backgroundColor: "#BBBBBB",
                    padding: 5,
                    color: "white",
                    marginLeft: 20,
                  }}
                >
                  이미 신청되었습니다
                </span>
              ) : null}
            </Checkbox>
          ),
          children: (
            <PatientDetail
              memberName={member.name || member.username}
              address={patient.address}
              grade={patient.grade}
            />
          ),
          showArrow: false,
          headerClass: "header",
        }))}
      />
      <div style={{ width: "95%", margin: "auto" }}>
        <Button
          size={"large"}
          block
          type={"primary"}
          ghost
          onClick={() => {
            setKeys([]);
            setPatientIds([]);
            router.push("/register");
          }}
        >
          + 추가하기
        </Button>
      </div>
    </div>
  );
};

const PatientDetail = ({ memberName, grade, address }) => {
  return (
    <>
      <style jsx>{`
        th {
          color: #717375;
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          vertical-align: top;
        }

        td {
          font-size: 16px;
        }
      `}</style>
      <table style={{ width: "100%" }}>
        <colgroup>
          <col width={"18%"} />
          <col width={"82%"} />
        </colgroup>
        <tbody>
          {memberName && (
            <tr>
              <th>보호자</th>
              <td>{memberName}</td>
            </tr>
          )}
          {grade && (
            <tr>
              <th>장애 종류</th>
              <td>{grade}</td>
            </tr>
          )}
          {address && (
            <tr>
              <th>주소</th>
              <td>{address}</td>
            </tr>
          )}
        </tbody>
      </table>
      <Button block size={"large"}>
        수정하기
      </Button>
    </>
  );
};

export default ChoicePatient;
