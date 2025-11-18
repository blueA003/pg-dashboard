import { atom } from "recoil";

export const isSidebar = atom<boolean>({
  key: "isSidebar",
  default: true,
});

export const mchtCode = atom<string | null>({
  key: "mchtCode",
  default: null,
});