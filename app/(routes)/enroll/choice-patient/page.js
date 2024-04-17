"use client";
import React, { useState } from "react";
import { Button, Checkbox, Collapse, Space } from "antd";
// 만약 등록된 환자가 없으면, 등록화면으로 보여주기
// 등록된 환자가 있으면 체크박스 보여주기
const ChoicePatient = () => {
  const [keys, setKeys] = useState([]);
  const onChange = (e) => {
    if (e.target.checked) {
      setKeys(keys.concat(e.target.value));
    } else {
      setKeys(keys.filter((elem) => elem !== e.target.value));
    }
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      activeKey={keys}
      size="small"
      style={{ borderRadius: 0, backgroundColor: "inherit" }}
      items={[
        {
          key: 1,
          label: (
            <Checkbox
              onChange={onChange}
              value={1}
              style={{ width: "100%", padding: 20 }}
            >
              {"김요양"}
            </Checkbox>
          ),
          children: <PatientDetail />,
          showArrow: false,
          headerClass: "header",
        },
        {
          key: 2,
          label: (
            <Checkbox
              onChange={onChange}
              value={2}
              style={{ width: "100%", padding: 20 }}
            >
              {"김무제"}
            </Checkbox>
          ),
          children: <PatientDetail />,
          showArrow: false,
        },
      ]}
    />
  );
};

const PatientDetail = () => {
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
          <tr>
            <th>보호자</th>
            <td>김무제</td>
          </tr>
          <tr>
            <th>장애 종류</th>
            <td>시각장애</td>
          </tr>
          <tr>
            <th>장애 등급</th>
            <td>2등급</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              경기도 고양시 덕양구 59번길 35-14 성산빌라 A동 204호 fdsfa fdas
              fdas
            </td>
          </tr>
        </tbody>
      </table>
      <Button block size={"large"}>
        수정하기
      </Button>
    </>
  );
};

export default ChoicePatient;
