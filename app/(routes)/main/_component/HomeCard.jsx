import { useRouter } from "next/navigation";
import { Card } from "antd";

const HomeCard = (props) => {
  const router = useRouter();
  return (
    <Card
      hoverable
      style={{ alignContent: "center", flexGrow: 1, ...props.style }}
      onClick={() => router.push(props.url)}
    >
      <div style={{ fontSize: 16 }}>{props.image}</div>
      <strong style={{ fontSize: 16 }}>{props.title}</strong>
      <div style={{ fontSize: 12 }}>{props.desc}</div>
    </Card>
  );
};

export default HomeCard;
