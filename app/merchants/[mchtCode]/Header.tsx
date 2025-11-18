import Link from "next/link";
import type { MDetail } from "@/lib/types/merchant";

type Props = {
  merchant: MDetail;
};

export default function Header({ merchant }: Props) {
  return (
    <header className="flex items-start justify-between">
      <div>
        <p className="text-xs font-semibold tracking-[0.22em]">
          MERCHANT DETAIL
        </p>
        <h1 className="text-3xl font-bold">가맹점 상세 정보</h1>
        <p className="mt-2 text-base">
          <span className="font-semibold">{merchant.mchtName}</span>
          <span className="font-semibold pl-4">{merchant.mchtCode}</span>
        </p>
      </div>

      <Link
        href="/merchants"
        className="inline-flex rounded-full border border-slate-600 bg-slate-900/80 text-white hover:bg-slate-800"
      >
        <span className="font-semibold text-lg px-4 py-2">
          가맹점 목록으로
        </span>
      </Link>
    </header>
  );
}