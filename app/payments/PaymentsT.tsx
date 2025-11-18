"use client";

import { useState } from "react";
import { Payment } from "@/lib/types/payment";
import { Num, ReDate, Badge } from "@/app/components/common/Utils";

type Props = {
  payments: Payment[];
};

type SortKey =
  | "paymentAt"
  | "amount"
  | "currency"
  | "mchtCode"
  | "payType"
  | "paymentCode"
  | "status";

export default function PaymentsT({ payments }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("paymentAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sorted = [...payments].sort((a, b) => {
    let v1: number | string = "";
    let v2: number | string = "";

    switch (sortKey) {
      case "paymentAt": {
        v1 = new Date(a.paymentAt).getTime();
        v2 = new Date(b.paymentAt).getTime();
        break;
      }
      case "amount": {
        v1 = Number(a.amount);
        v2 = Number(b.amount);
        break;
      }
      case "currency": {
        v1 = a.currency ?? "";
        v2 = b.currency ?? "";
        break;
      }
      case "mchtCode": {
        v1 = a.mchtCode ?? "";
        v2 = b.mchtCode ?? "";
        break;
      }
      case "payType": {
        v1 = a.payType ?? "";
        v2 = b.payType ?? "";
        break;
      }
      case "paymentCode": {
        v1 = a.paymentCode ?? "";
        v2 = b.paymentCode ?? "";
        break;
      }
      case "status": {
        v1 = b.status ?? "";
        v2 = a.status ?? "";
        break;
      }
    }

    if (v1 < v2) return sortOrder === "asc" ? -1 : 1;
    if (v1 > v2) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const sortIcon = (key: SortKey) =>
    sortKey === key ? (sortOrder === "asc" ? " ↑" : " ↓") : "";

  return (
    <div className="overflow-hidden rounded-xl bg-slate-900/60 border border-slate-800">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-slate-100">
          <thead className="bg-slate-800/80 text-xs uppercase text-slate-400">
            <tr>
              <th
                className="px-4 py-3 text-left cursor-pointer select-none"
                onClick={() => handleSort("paymentAt")}
              >
                결제 일시{sortIcon("paymentAt")}
              </th>
              <th
                className="px-4 py-3 text-right cursor-pointer select-none"
                onClick={() => handleSort("amount")}
              >
                금액{sortIcon("amount")}
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer select-none"
                onClick={() => handleSort("currency")}
              >
                통화{sortIcon("currency")}
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer select-none"
                onClick={() => handleSort("mchtCode")}
              >
                가맹점{sortIcon("mchtCode")}
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer select-none"
                onClick={() => handleSort("payType")}
              >
                수단{sortIcon("payType")}
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer select-none"
                onClick={() => handleSort("paymentCode")}
              >
                거래 코드{sortIcon("paymentCode")}
              </th>
              <th
                className="px-4 py-3 text-left cursor-pointer select-none"
                onClick={() => handleSort("status")}
              >
                상태{sortIcon("status")}
              </th>
            </tr>
          </thead>

          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-slate-400"
                >
                  조회된 거래 내역이 없습니다.
                </td>
              </tr>
            ) : (
              sorted.map((p) => (
                <tr
                  key={p.paymentCode}
                  className="border-t border-slate-800/60 hover:bg-slate-800/40"
                >
                  <td className="px-4 py-3">{ReDate(p.paymentAt)}</td>
                  <td className="px-4 py-3 text-right">{Num(p.amount)}</td>
                  <td className="px-4 py-3">{p.currency}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {p.mchtCode}
                  </td>
                  <td className="px-4 py-3">{p.payType}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {p.paymentCode}
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={p.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
