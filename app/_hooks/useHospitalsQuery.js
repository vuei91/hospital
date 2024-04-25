import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/app/_hooks/api";

const useHospitalsQuery = () => {
  const {
    data: resp,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["hospitals"],
    queryFn: () => getApi("hospital/list"),
  });
  return { resp, isError, isLoading, isSuccess };
};

export default useHospitalsQuery;
