import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/app/_hooks/api";

const useMemberQuery = () => {
  const {
    data: resp,
    error,
    isError,
    isLoading,
    isSuccess,
    status,
  } = useQuery({
    queryKey: ["member"],
    queryFn: () => getApi("member/"),
  });
  return { resp, error, isError, isLoading, isSuccess, status };
};

export default useMemberQuery;
