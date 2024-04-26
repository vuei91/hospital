import { create } from "zustand";

const patientInfoStore = create((set) => ({
  name: null,
  grade: null,
  phone: null,
  setName: (name) => set({ name }),
  setGrade: (grade) => set({ grade }),
  setPhone: (phone) => set({ phone }),
  clear: () => set({ name: null, grade: null, phone: null }),
}));

export default patientInfoStore;
