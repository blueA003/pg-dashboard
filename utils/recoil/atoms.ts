import { atom } from "recoil";

// 사이드바
export const isSidebar = atom<boolean>({
  key: "isSidebar",
  default: true,
});

// 메뉴
export const menu = atom<string>({
  key: "menu",
  default: "dashboard",
});

// 가맹점 코드
export const mchtCode = atom<string | null>({
  key: "mchtCode",
  default: null,
});