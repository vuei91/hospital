import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/app/_hooks/api";

const useMemberQuery = () => {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["member"],
    queryFn: () => getApi("member/"),
  });
  return { resp, isError, isLoading, isSuccess };
};

export default useMemberQuery;
