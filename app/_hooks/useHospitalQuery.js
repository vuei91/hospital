import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/app/_hooks/api";

const useHospitalQuery = () => {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["hospital"],
    queryFn: () => getApi("hospital/"),
  });
  return { resp, isError, isLoading, isSuccess };
};

export default useHospitalQuery;
