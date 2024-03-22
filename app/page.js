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
          <HomeCard
            style={{ flexGrow: 1, margin: "10px 5px 0 0" }}
            image="🏥"
            title="요양시설 신청하기"
            desc="가까운 집 주변찾기"
          />
          <Flex>
            <HomeCard
              style={{ flexGrow: 1, margin: "10px 5px 0 0" }}
              image="🙋🏻‍♀️"
              title="요양사 부르기"
              desc="친절한 요양사를 찾아요"
            />
            <HomeCard
              style={{ flexGrow: 1, margin: "10px 0 0 5px" }}
              image="💭"
              title="상담신청하기"
              desc="전문가에게 상담해주세요"
            />
          </Flex>
          <Card style={{ margin: "20px 0" }}>
            <p>광고란</p>
          </Card>
          <HomeCard
            image="📺"
            title="광고 문의"
            desc="병원 및 판매용품 문의해 주세요"
          />
          <HomeCard
            style={{ margin: "10px 0 20px 0" }}
            image="💸"
            title="상품판매"
            desc="장애 용품 등을 판매하고 있어요"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

const HomeCard = (props) => {
  return (
    <Card hoverable style={props.style}>
      <div style={{ fontSize: 16 }}>{props.image}</div>
      <strong style={{ fontSize: 16 }}>{props.title}</strong>
      <div style={{ fontSize: 12 }}>{props.desc}</div>
    </Card>
  );
};
