'use client';
import React from 'react';
import {List, NavBar, Tabs, Space, Button} from "antd-mobile";
import {Complete, Contacting, Waiting} from "@/app/(routes)/history/_components/Tags";
import {useRouter} from "next/navigation";
import BottomNav from "@/app/_components/BottomNav";

const HistoryMain = () => {
    return <div style={{width: '100%', position: 'relative'}}>
        <div>
            <NavBar backArrow={false}>
                신청내역
            </NavBar>
            <Tabs activeLineMode={'full'}>
                <Tabs.Tab title='진행중(1)' key='progress'>
                    <List style={{height: "calc(var(--vh, 1vh) * 83)", overflow: 'scroll'}}>
                        <List.Item>
                            <MainCard/>
                        </List.Item>
                        <List.Item>
                            <MainCard/>
                        </List.Item>
                        <List.Item>
                            <MainCard/>
                        </List.Item>
                        <List.Item>
                            <MainCard/>
                        </List.Item>
                    </List>
                </Tabs.Tab>
                <Tabs.Tab title='완료' key='complete'>
                    <h1>값2</h1>
                </Tabs.Tab>
            </Tabs>
        </div>
        <BottomNav/>
    </div>
}

const MainCard = () => {
    const router = useRouter();
    const goToDetail = () => {
        router.push("/history/detail");
    }
    return <Space direction='vertical' block>
        <Waiting/>
        <div style={{fontSize: 12, color: '#B1B9C0'}}>2024-04-12(금)</div>
        <div style={{fontSize: 18, fontWeight: 600}}>무지개 요양병원</div>
        <Space direction={"vertical"} style={{margin: '10px 0'}}>
            <Space>
                <span style={{color: '#717375', fontSize: 16}}>신청인</span>
                <span style={{fontWeight: 600, fontSize: 16}}>김무제</span>
            </Space>
            <Space>
                <span style={{color: '#717375', fontSize: 16}}>환자명</span>
                <span style={{fontWeight: 600, fontSize: 16}}>김요양</span>
            </Space>
        </Space>
        <Button color='primary' fill='outline' block onClick={goToDetail}>자세히 보기</Button>
    </Space>
}

export default HistoryMain;