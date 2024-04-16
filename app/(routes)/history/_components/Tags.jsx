'use client';
import React from 'react';
import {Tag} from "antd-mobile";

export const Waiting = () => {
    return (
        <Tag color='#CCE8FF' style={{ '--text-color': '#0066FF' }}>대기중</Tag>
    );
};

export const Contacting = () => {
    return (
        <Tag color='#EAF7EB' style={{ '--text-color': '#29AD37' }}>상담연결</Tag>
    );
};

export const Complete = () => {
    return (
        <Tag color='#F7F8F9' style={{ '--text-color': '#BBC1C4' }}>상담완료</Tag>
    );
};
