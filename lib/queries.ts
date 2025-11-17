import { useQuery } from "@tanstack/react-query";
import {
  health,
  payments,
  merchants,
  mDetails,
  mDetail,
  statusCodes,
  payTypes,
  mchtStatus,
} from "@/lib/api";

export function useHealth() {
  return useQuery({
    queryKey: ["health"],
    queryFn: health,
  });
}

export function usePayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: payments,
  });
}

export function useMerchants() {
  return useQuery({
    queryKey: ["merchants"],
    queryFn: merchants,
  });
}

export function useMDetails() {
  return useQuery({
    queryKey: ["mDetails"],
    queryFn: mDetails,
  });
}

export function useMDetail(mchtCode: string | null) {
  return useQuery({
    queryKey: ["mDetail", mchtCode],
    queryFn: () => {
      if (!mchtCode) {
        throw new Error("mchtCode is required");
      }
      return mDetail(mchtCode);
    },
    enabled: !!mchtCode, // mchtCode 없으면 요청이 안감
  });
}

export function useStatusCodes() {
  return useQuery({
    queryKey: ["statusCodes"],
    queryFn: statusCodes,
  });
}

export function usePayTypes() {
  return useQuery({
    queryKey: ["payTypes"],
    queryFn: payTypes,
  });
}

export function useMchtStatus() {
  return useQuery({
    queryKey: ["mchtStatus"],
    queryFn: mchtStatus,
  });
}