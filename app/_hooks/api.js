import axios from "axios";
import { BACKEND_URL } from "@/app/_constants";

const baseAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export async function getApi(url, params) {
  return (await baseAxios.get(url, { params })).data;
}

export async function postApi(url, params) {
  return (await baseAxios.post(url, params)).data;
}

export async function putApi(url, params) {
  return (await baseAxios.put(url, params)).data;
}

export async function deleteApi(url) {
  return (await baseAxios.delete(url)).data;
}
