import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/app/_hooks/api";

const useHospitalQuery = (id) => {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["hospital", id],
    queryFn: () => getApi(`hospital/${id}`),
  });
  return { resp, isError, isLoading, isSuccess };
};

export default useHospitalQuery;
