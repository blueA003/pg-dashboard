"use client";

import { useMemo } from "react";
import type { Payment } from "@/lib/types/payment";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type Props = { payments: Payment[] };

export function CountChart({ payments }: Props) {
  const data = useMemo(() => {
    const map: Record<string, number> = {};

    payments.forEach((p) => {
      map[p.mchtCode] = (map[p.mchtCode] ?? 0) + 1;
    });

    return Object.entries(map).map(([mchtCode, count]) => ({
      mchtCode,
      count,
    }));
  }, [payments]);

  return (
    <div className="flex-3 d-bg">
      <div className="h-title">
        가맹점별 거래 건수
      </div>
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
            <XAxis
              dataKey="mchtCode"
              tick={{ fontSize: 10, fill: "#CBD5E1"}}
              height={40}
              tickFormatter={(v) => String(v).replace("MCHT-", "")}
              interval={0}
              angle={-30}
              textAnchor="end"
              
            />
             <YAxis
              tick={{ fontSize: 10, fill: "#CBD5E1"}}
              width={30}
              stroke="#CBD5E1" 
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderColor: "#1e293b",
                borderRadius: 8,
                backgroundColor:"#1E293B80",
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#0ea5e9" 
              
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}