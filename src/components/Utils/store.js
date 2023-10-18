import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));
