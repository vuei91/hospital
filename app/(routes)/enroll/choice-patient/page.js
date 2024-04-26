"use client";
import React, { useState } from "react";
import { Button, Checkbox, Collapse } from "antd";
import useMemberQuery from "@/app/_hooks/useMemberQuery";
import enrollStore from "@/app/_service/enrollStore";
import hospitalStore from "@/app/_service/hospitalStore";
// 만약 등록된 환자가 없으면, 등록화면으로 보여주기
// 등록된 환자가 있으면 체크박스 보여주기
const ChoicePatient = () => {
  const { setPatientIds } = enrollStore((state) => state);
  const { resp, isSuccess } = useMemberQuery();
  const [keys, setKeys] = useState([]);
  if (!isSuccess) return null;
  const member = resp.data;
  const patients = member?.["patients"];
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
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      activeKey={keys}
      size="small"
      style={{ borderRadius: 0, backgroundColor: "inherit" }}
      items={
        patients.map((patient) => ({
          key: patient.id,
          label: (
            <Checkbox
              onChange={onChange}
              value={patient.id}
              style={{ width: "100%", padding: 20 }}
            >
              {patient.name}
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
        }))
        // [
        //   {
        //     key: 1,
        //     label: (
        //       <Checkbox
        //         onChange={onChange}
        //         value={1}
        //         style={{ width: "100%", padding: 20 }}
        //       >
        //         {"김요양"}
        //       </Checkbox>
        //     ),
        //     children: <PatientDetail />,
        //     showArrow: false,
        //     headerClass: "header",
        //   },
        //   {
        //     key: 2,
        //     label: (
        //       <Checkbox
        //         onChange={onChange}
        //         value={2}
        //         style={{ width: "100%", padding: 20 }}
        //       >
        //         {"김무제"}
        //       </Checkbox>
        //     ),
        //     children: <PatientDetail />,
        //     showArrow: false,
        //   },
        // ]
      }
    />
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
