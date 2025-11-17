import type { ApiListRes, ApiRes } from "./common";

// 가맹점 리스트 항목
export type Merchant = {
  mchtCode: string;
  mchtName: string;
  status: string;
  bizType: string;
};

export type Merchants = ApiListRes<Merchant>;

// 상세 정보 항목
export type MDetail = {
  mchtCode: string;
  mchtName: string;
  status: string;
  bizType: string;
  bizNo: string;
  address: string;
  phone: string;
  email: string;
  registeredAt: string;
  updatedAt: string;
};

export type MDetails = ApiListRes<MDetail>;
export type MDetailRes = ApiRes<MDetail>;
