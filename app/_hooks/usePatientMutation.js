import { useMutation } from "@tanstack/react-query";
import { postApi } from "@/app/_hooks/api";

const usePatientMutation = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["patient"],
    mutationFn: (params) => {
      return postApi("/patient/", params);
    },
  });

  const createPatient = (params) => {
    return mutate(params);
  };

  return { data, createPatient };
};

export default usePatientMutation;
