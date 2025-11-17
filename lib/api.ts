import type { Payments, Payment } from "./types/payment";
import type {
  Merchants,
  MDetails,
  MDetailRes,
  Merchant,
  MDetail,
} from "./types/merchant";
import type {
  StatusCodes,
  StatusItem,
  PayTypes,
  PayTypeItem,
} from "./types/common";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
}

type QueryParams = Record<string, string | number | boolean | null | undefined>;

function buildUrl(path: string, params?: QueryParams) {
  const base = BASE_URL?.endsWith("/") ? BASE_URL : BASE_URL + "/";
  const url = new URL(path.replace(/^\//, ""), base);

  // params 객체를 돌면서 값이 존재하는 것만 url 쿼리 파라미터 추가
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }

  return url.toString();
}

async function getJson<T>(path: string, params?: QueryParams): Promise<T> {
  const res = await fetch(buildUrl(path, params), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if(!res.ok) {
    throw new Error(res.statusText || `Request failed: ${res.status}`);
  }
  
  return res.json() as Promise<T>;
}

export async function health(): Promise<string> {
  return getJson<string>("/health");
}

export async function payments(): Promise<Payment[]> {
  const res = await getJson<Payments>("/payments/list");
  return res.data;
}

export async function merchants(): Promise<Merchant[]> {
  const res = await getJson<Merchants>("/merchants/list");
  return res.data;
}

export async function mDetails(): Promise<MDetail[]> {
  const res = await getJson<MDetails>("/merchants/details");
  return res.data;
}

export async function mDetail(
  mchtCode: string,
): Promise<MDetail> {
  const res = await getJson<MDetailRes>(
    `/merchants/details/${encodeURIComponent(mchtCode)}`
  );
  return res.data;
}

export async function statusCodes(): Promise<StatusItem[]> {
  const res = await getJson<StatusCodes>("/common/payment-status/all");
  return res.data;
}

export async function payTypes(): Promise<PayTypeItem[]> {
  const res = await getJson<PayTypes>("/common/payment-type/all");
  return res.data;
}

export async function mchtStatus(): Promise<StatusItem[]> {
  const res = await getJson<StatusCodes>("/common/mcht-status/all");
  return res.data;
}