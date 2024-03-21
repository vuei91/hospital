import Footer from "@/components/Footer";
import { Card, Flex } from "antd";

export default function Home() {
  return (
    <>
      <main
        style={{
          width: "100%",
          height: "calc(100% - 50px)",
          backgroundColor: "#F7F9FC",
          padding: 0.01,
          overflow: "scroll",
        }}
      >
        <div style={{ width: "90%", margin: "auto" }}>
          <h4>요양시설 예약시스템</h4>
          <Card hoverable>
            <div style={{ fontSize: 16 }}>🏥</div>
            <strong style={{ fontSize: 16 }}>요양시설 신청하기</strong>
            <div style={{ fontSize: 12 }}>가까운 집 주변찾기</div>
          </Card>
          <Flex>
            <Card hoverable style={{ flexGrow: 1, margin: "10px 5px 0 0" }}>
              <div style={{ fontSize: 16 }}>🙋🏻‍♀️</div>
              <strong style={{ fontSize: 16 }}>요양사 부르기</strong>
              <div style={{ fontSize: 12 }}>친절한 요양사를 찾아요</div>
            </Card>
            <Card hoverable style={{ flexGrow: 1, margin: "10px 0 0 5px" }}>
              <div style={{ fontSize: 16 }}>💭</div>
              <strong style={{ fontSize: 16 }}>상담신청하기</strong>
              <div style={{ fontSize: 12 }}>전문가에게 상담해주세요</div>
            </Card>
          </Flex>
          <Card style={{ margin: "20px 0" }}>
            <p>광고란</p>
          </Card>
          <Card hoverable>
            <div style={{ fontSize: 16 }}>📺</div>
            <strong style={{ fontSize: 16 }}>광고 문의</strong>
            <div style={{ fontSize: 12 }}>병원 및 판매용품 문의해 주세요</div>
          </Card>
          <Card hoverable style={{ margin: "10px 0 20px 0" }}>
            <div style={{ fontSize: 16 }}>💸</div>
            <strong style={{ fontSize: 16 }}>상품판매</strong>
            <div style={{ fontSize: 12 }}>장애 용품 등을 판매하고 있어요</div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
