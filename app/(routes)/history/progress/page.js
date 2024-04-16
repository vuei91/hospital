"use client";
import React from 'react';
import {NavBar} from "antd-mobile";
import {useRouter} from "next/navigation";
import {ArrowLeftOutlined} from "@ant-design/icons";

const HistoryProgress = () => {
    const router = useRouter();
    const back = () => {
        router.back();
    }
    return <div>
        <NavBar back={<ArrowLeftOutlined />} backArrow={false} onBack={back}>진행 현황 한눈에 보기</NavBar>
    </div>
}

export default HistoryProgress;