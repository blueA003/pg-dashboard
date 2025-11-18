"use client";

import Link from "next/link";
import type { Merchant } from "@/lib/types/merchant";

type Props = {
  merchants: Merchant[];
};

export function MchtTable({ merchants }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-900/60 border border-slate-800">
      <table className="min-w-full text-sm text-slate-100">
        <thead className="bg-slate-800/80 text-xs uppercase text-slate-400">
          <tr>
            <th className="px-4 py-3 text-left">가맹점 코드</th>
            <th className="px-4 py-3 text-left">가맹점명</th>
            <th className="px-4 py-3 text-left">상태</th>
            <th className="px-4 py-3 text-left">업종</th>
          </tr>
        </thead>
        <tbody>
          {merchants.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="px-4 py-6 text-center text-slate-400"
              >
                등록된 가맹점이 없습니다.
              </td>
            </tr>
          ) : (
            merchants.map((m) => (
              <tr
                key={m.mchtCode}
                className="border-t border-slate-800/60 hover:bg-slate-800/40"
              >
                <td className="px-4 py-3 font-mono text-xs text-emerald-300">
                  <Link
                    href={`/merchants/${encodeURIComponent(m.mchtCode)}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {m.mchtCode}
                  </Link>
                </td>
                <td className="px-4 py-3">{m.mchtName}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      m.status === "ACTIVE"
                        ? "rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300"
                        : "rounded-full bg-slate-600/40 px-2 py-0.5 text-[10px] text-slate-200"
                    }
                  >
                    {m.status}
                  </span>
                </td>
                <td className="px-4 py-3">{m.bizType}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
