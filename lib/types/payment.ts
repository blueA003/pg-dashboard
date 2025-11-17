import type { ApiListRes } from "./common";

export type Payment = {
  paymentCode: string;
  mchtCode: string;
  amount: string;
  currency: string;
  payType: string;
  status: string;
  paymentAt: string;
};

export type Payments = ApiListRes<Payment>;