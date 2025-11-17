"use client";

import { usePayments } from "@/lib/queries";
import { QueryState } from "@/lib/QueryState";
import { Common } from "./components/common/Common";


export default function HomePage() {
  const { data, isLoading, isError, error } = usePayments();

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      data={data}
      error={error}
    >
      {data && <Common payments={data} />}
    </QueryState>
  );
}