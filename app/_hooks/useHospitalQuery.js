import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getApi = async (token) => {
  const resp = await axios.get("http://localhost:8080/hospital/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data;
};

const useHospitalQuery = (token) => {
  return useQuery({ queryKey: ["hospital"], queryFn: () => getApi(token) });
};

export default useHospitalQuery;
