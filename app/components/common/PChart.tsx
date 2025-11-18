"use client";

import { useMemo } from "react";
import type { Payment } from "@/lib/types/payment";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export const PIE_COLORS = [
  "#3B82F6", // DEVICE
  "#0EA5E9", // ONLINE
  "#10B981", // MOBILE
  "#F43F5E", // VACT
  "#8B5CF6", // BILLING
];

type Props = { payments: Payment[] };

export function PChart({ payments }: Props) {
  const data = useMemo(() => {
    const map: Record<string, { amount: number; count: number }> = {};

    payments.forEach((p) => {
      const key = p.payType;
      const amount = Number(p.amount) || 0;
      if (!map[key]) map[key] = { amount: 0, count: 0 };
      map[key].amount += amount;
      map[key].count += 1;
    });

    return Object.entries(map).map(([payType, v]) => ({
      payType,
      amount: v.amount,
      count: v.count,
    }));
  }, [payments]);

  return (
    <div className="flex-1 d-bg">
      <div className="h-title">
        결제 수단별 거래 비율
      </div>
      <div className="flex h-64 items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="payType"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
                contentStyle={{
                  borderColor: "#1e293b",
                  borderRadius: 8,
                  backgroundColor:"#CBD5E1",
                }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}