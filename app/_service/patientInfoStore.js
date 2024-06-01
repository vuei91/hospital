import { create } from "zustand";

const patientInfoStore = create((set) => ({
  name: null,
  grade: null,
  phone: null,
  address: null,
  setName: (name) => set({ name }),
  setGrade: (grade) => set({ grade }),
  setPhone: (phone) => set({ phone }),
  setAddress: (address) => set({ address }),
  clear: () => set({ name: null, grade: null, phone: null, address: null }),
}));

export default patientInfoStore;
