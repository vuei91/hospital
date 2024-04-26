import { useMutation } from "@tanstack/react-query";
import { postApi } from "@/app/_hooks/api";

const useEnrollMutation = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["enroll"],
    mutationFn: (params) => {
      return postApi("/enroll/", params);
    },
  });

  const createEnroll = (params) => {
    return mutate(params);
  };

  return { data, createEnroll };
};

export default useEnrollMutation;
