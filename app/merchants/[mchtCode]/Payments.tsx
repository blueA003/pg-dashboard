import type { Payment } from "@/lib/types/payment";
import { Num, ReDate } from "@/app/components/common/Utils";

type Props = {
  payments: Payment[];
};

export default function Payments({ payments }: Props) {
  return (
    <section className="rounded-2xl bg-slate-900 border border-slate-700 shadow-lg shadow-black/40 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">최근 거래 내역</h2>
        <span className="text-xs font-medium text-slate-200">
          가맹점 기준 최근 5건
        </span>
      </div>

      <div className="border-t border-slate-700/70 pt-4" />

      <div className="rounded-xl border border-slate-700 bg-slate-950/60 overflow-x-auto">
        <table className="min-w-full text-sm text-slate-100">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 text-xs text-slate-300">
              <th className="px-4 py-2 text-left font-medium">결제일시</th>
              <th className="px-4 py-2 text-left font-medium">결제 코드</th>
              <th className="px-4 py-2 text-right font-medium">금액</th>
              <th className="px-4 py-2 text-center font-medium">결제수단</th>
              <th className="px-4 py-2 text-center font-medium">상태</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr
                key={p.paymentCode}
                className="border-b border-slate-800/70 last:border-0"
              >
                <td className="px-4 py-2 align-middle text-xs text-slate-200">
                  {ReDate(p.paymentAt)}
                </td>
                <td className="px-4 py-2 align-middle text-xs font-mono">
                  {p.paymentCode}
                </td>
                <td className="px-4 py-2 align-middle text-right text-sm font-semibold">
                  {Num(p.amount)}{" "}
                  <span className="text-xs text-slate-300">{p.currency}</span>
                </td>
                <td className="px-4 py-2 align-middle text-center text-xs">
                  {p.payType}
                </td>
                <td className="px-4 py-2 align-middle text-center text-xs">
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}