"use client";

import { usePayments } from "@/lib/queries";
import { QueryState } from "@/lib/QueryState";
import PaymentsT from "./PaymentsT";


export default function Page() {
  const { data, isLoading, isError, error } = usePayments();

  return (
    <main className="space-y-4">
      <h1 className="text-xl font-semibold pt-4">거래 내역</h1>

      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={data}
        error={error}
      >
        {data && <PaymentsT payments={data} />}
      </QueryState>
    </main>
  );
}