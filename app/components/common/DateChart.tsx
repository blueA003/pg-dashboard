"use client";

import { useMemo } from "react";
import type { Payment } from "@/lib/types/payment";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type Props = { payments: Payment[] };

export function DateChart({ payments }: Props) {
  const data = useMemo(() => {
    const map: Record<string, { amount: number; count: number }> = {};

    payments.forEach((p) => {
      const date = p.paymentAt.slice(0, 10); // YYYY-MM-DD
      const amount = Number(p.amount) || 0;
      if (!map[date]) map[date] = { amount: 0, count: 0 };
      map[date].amount += amount;
      map[date].count += 1;
    });

    return Object.entries(map)
      .map(([date, v]) => ({ date, amount: v.amount, count: v.count }))
      .sort((a, b) => (a.date < b.date ? -1 : 1));
  }, [payments]);

  return (
    <div className="flex-2 d-bg">
      <div className="h-title">
        날짜별 거래 금액 / 건수
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 10 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 10}}
            />
            <Tooltip
              contentStyle={{
                borderColor: "#1e293b",
                borderRadius: 8,
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="amount"
              name="금액"
              stroke="#22c55e"
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="count"
              name="건수"
              stroke="#38bdf8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}