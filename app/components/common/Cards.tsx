"use client";

import { useMemo } from "react";
import type { Payment } from "@/lib/types/payment";
import { Num } from "./Utils";

type Props = { payments: Payment[] };

export function Cards({ payments }: Props) {
  const { byCurrency, totalCount, successRate, merchantCount } = useMemo(() => {
    const byCurrency: Record<string, number> = {};
    const merchants = new Set<string>();

    let success = 0;
    let failed = 0;
    let cancelled = 0;

    payments.forEach((p) => {
      const amount = Number(p.amount) || 0;
      byCurrency[p.currency] = (byCurrency[p.currency] ?? 0) + amount;

      merchants.add(p.mchtCode);

      if (p.status === "SUCCESS") success++;
      else if (p.status === "FAILED") failed++;
      else if (p.status === "CANCELLED") cancelled++;
    });

    const total = success + failed + cancelled;
    const successRate = total ? (success / total) * 100 : 0;

    return {
      byCurrency,
      totalCount: total,
      successRate,
      merchantCount: merchants.size,
    };
  }, [payments]);

  return (
    <div className="flex-1 d-bg">
      <h2 className="h-title">요약 정보</h2>

      <ul className="space-y-3 text-base ">
        <li className="flex justify-between">
          <span>총 결제 금액</span>
          <span>
            KRW {Num(byCurrency.KRW ?? 0)} / USD {Num(byCurrency.USD ?? 0)}
          </span>
        </li>

        <li className="flex justify-between">
          <span>성공률</span>
          <span>{successRate.toFixed(1)}%</span>
        </li>

        <li className="flex justify-between">
          <span>총 거래 건수</span>
          <span>{totalCount}건</span>
        </li>

        <li className="flex justify-between">
          <span>가맹점 수</span>
          <span>{merchantCount}곳</span>
        </li>
      </ul>
    </div>
  );
}