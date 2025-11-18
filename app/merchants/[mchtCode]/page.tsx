"use client";

import { useMemo } from "react";
import { useMDetail, usePayments } from "@/lib/queries";
import { QueryState } from "@/lib/QueryState";
import Header from "./Header";
import Info from "./Info";
import Payments from "./Payments";
import type { Payment } from "@/lib/types/payment";

type PageProps = {
  params: {
    mchtCode: string;
  };
};

export default function MerchantDetailPage({ params }: PageProps) {
  const { mchtCode } = params;

  const { data, isLoading, isError, error } = useMDetail(mchtCode);

  const { data: payments } = usePayments();

  const rePayments: Payment[] = useMemo(() => {
    if (!payments) return [];
    return payments
      .filter((p) => p.mchtCode === mchtCode)
      .sort(
        (a, b) =>
          new Date(b.paymentAt).getTime() - new Date(a.paymentAt).getTime()
      )
      .slice(0, 5);
  }, [payments, mchtCode]);

  return (
    <main className="pt-4">
      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={data}
        error={error}
      >
        {data && (
          <div className="space-y-6">
            <Header merchant={data} />
            <Info merchant={data} />
            <Payments payments={rePayments} />
          </div>
        )}
      </QueryState>
    </main>
  );
}