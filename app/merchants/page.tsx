"use client";

import { useMerchants } from "@/lib/queries";
import { QueryState } from "@/lib/QueryState";
import { MchtTable } from "./MchtTable";

export default function MerchantsPage() {
  const { data, isLoading, isError, error } = useMerchants();

  return (
    <main className="space-y-4">
      <h1 className="text-xl font-semibold pt-4">
        가맹점 목록
      </h1>
      <p className="text-sm">
        등록된 가맹점의 기본 정보(코드, 이름, 상태, 업종)를 확인할 수 있는
        화면입니다. 행을 클릭하면 상세 정보를 볼 수 있습니다.
      </p>

      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={data}
        error={error}
      >
        {data && <MchtTable merchants={data} />}
      </QueryState>
    </main>
  );
}
