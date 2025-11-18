"use client";

import { useMemo } from "react";
import type { Payment } from "@/lib/types/payment";
import { Num, ReDate, Badge } from "./Utils";

type Props = { payments: Payment[] };

export function Tables({ payments }: Props) {
  const { last10, last5FailCancel } = useMemo(() => {
    const sorted = [...payments].sort((a, b) =>
      a.paymentAt < b.paymentAt ? 1 : -1
    );

    const last10 = sorted.slice(0, 10);
    const last5FailCancel = sorted
      .filter((p) => p.status === "FAILED" || p.status === "CANCELLED")
      .slice(0, 10);

    return { last10, last5FailCancel };
  }, [payments]);

  return (
    <div className="flex gap-4">
      <div className="flex-1 d-bg">
        <div className="h-title">
          최근 거래 10건
        </div>
        <table className="w-full text-left text-xs ">
          <thead className="border-b border-slate-300 text-[11px] uppercase">
            <tr>
              <th className="py-1 pr-2">시간</th>
              <th className="py-1 pr-2">가맹점</th>
              <th className="py-1 pr-2">금액</th>
              <th className="py-1 pr-2">수단</th>
              <th className="py-1 pr-2">상태</th>
            </tr>
          </thead>
          <tbody>
            {last10.map((p) => (
              <tr
                key={p.paymentCode}
                className="border-b border-slate-300"
              >
                <td className="py-1 pr-2">{ReDate(p.paymentAt)}</td>
                <td className="py-1 pr-2">{p.mchtCode}</td>
                <td className="py-1 pr-2">
                  {p.currency} {Num(Number(p.amount))}
                </td>
                <td className="py-1 pr-2">{p.payType}</td>
                <td className="py-1 pr-2">
                  <Badge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex-1 d-bg">
        <div className="h-title">
          최근 실패/취소 10건
        </div>
        <table className="w-full text-left text-xs ">
          <thead className="border-b border-slate-300 text-[11px] uppercase ">
            <tr>
              <th className="py-1 pr-2">시간</th>
              <th className="py-1 pr-2">가맹점</th>
              <th className="py-1 pr-2">금액</th>
              <th className="py-1 pr-2">상태</th>
            </tr>
          </thead>
          <tbody>
            {last5FailCancel.map((p) => (
              <tr
                key={p.paymentCode}
                className="border-b border-slate-300"
              >
                <td className="py-1 pr-2">{ReDate(p.paymentAt)}</td>
                <td className="py-1 pr-2">{p.mchtCode}</td>
                <td className="py-1 pr-2">
                  {p.currency} {Num(Number(p.amount))}
                </td>
                <td className="py-1 pr-2">
                  <Badge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}