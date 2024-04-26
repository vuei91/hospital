import { useMutation } from "@tanstack/react-query";
import { postApi } from "@/app/_hooks/api";

const usePatientMutation = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["patient"],
    mutationFn: (params) => {
      return postApi("/patient/", params);
    },
  });

  const createPatient = (params, options) => {
    return mutate(params, options);
  };

  return { data, createPatient };
};

export default usePatientMutation;
