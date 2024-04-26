import { useCommonQuery } from "@/app/_hooks/api";

export const useEnrollsByUsernameQuery = () => {
  return useCommonQuery(["enrolls"], "/enroll/");
};

export const useEnrollsByHospitalQuery = (id) => {
  return useCommonQuery(["enrolls", id], `/enroll/${id}`);
};

export const useEnrollByHospitalAndPatientQuery = (hospitalId, patientId) => {
  return useCommonQuery(
    ["enroll", hospitalId, patientId],
    `/enroll/${hospitalId}/${patientId}`,
  );
};

export const useEnrollsByPatientQuery = (patientId) => {
  return useCommonQuery(
    ["enrolls_patient", patientId],
    `/enroll/patient/${patientId}`,
  );
};
