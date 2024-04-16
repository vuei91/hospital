"use client";
import React from 'react';
import {NavBar} from "antd-mobile";
import {useRouter} from "next/navigation";
import {ArrowLeftOutlined, CheckOutlined} from "@ant-design/icons";

const HistoryDetail = () => {
    const router = useRouter();
    const back = () => {
        router.back();
    }
    return <div>
        <NavBar back={<ArrowLeftOutlined />} backArrow={false} onBack={back}>신청내역 상세</NavBar>
    </div>
}

export default HistoryDetail;