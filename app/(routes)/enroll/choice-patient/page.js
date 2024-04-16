"use client";
import React, { useState } from "react";
import { Checkbox, Collapse, Space, List } from "antd";
// 만약 등록된 환자가 없으면, 등록화면으로 보여주기
// 등록된 환자가 있으면 체크박스 보여주기
const ChoicePatient = () => {
  const [people, setPeople] = useState([
    { name: "김요양" },
    { name: "김무제" },
  ]);
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
          children: <div>{"안녕하세요"}</div>,
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
          children: <div>{"안녕하세요"}</div>,
          showArrow: false,
        },
      ]}
    />
  );
};

export default ChoicePatient;
