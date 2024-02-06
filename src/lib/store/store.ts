import { UserSlice, createUserSlice } from "@/lib/slices/createProductSlice";
import { create } from "zustand";
type StoreState = UserSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createUserSlice(...a)
}));
