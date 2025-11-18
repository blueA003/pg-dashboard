import type { MDetail } from "@/lib/types/merchant";

type Props = {
  merchant: MDetail;
};

export default function Info({ merchant }: Props) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {/* 기본 정보 */}
      <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-lg shadow-black/40 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">기본 정보</h2>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
            {merchant.status}
          </span>
        </div>

        <div className="border-t border-slate-700/70 pt-4" />

        <dl className="space-y-3">
          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">가맹점 코드</dt>
            <dd className="font-mono text-base font-semibold text-white text-right">
              {merchant.mchtCode}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">가맹점명</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.mchtName}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">업종</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.bizType}
            </dd>
          </div>
        </dl>

        <p className="pt-2 text-xs text-slate-200">
          {merchant.mchtName} 는(은) {merchant.bizType} 업종의 가맹점입니다.
        </p>
      </div>

      {/* 사업자 / 연락처 */}
      <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-lg shadow-black/40 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-white">사업자 / 연락처</h2>

        <div className="border-t border-slate-700/70 pt-4" />

        <dl className="space-y-3">
          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">사업자번호</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.bizNo}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">주소</dt>
            <dd className="max-w-[60%] text-base font-semibold text-white text-right leading-relaxed">
              {merchant.address}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">전화번호</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.phone}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">이메일</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.email}
            </dd>
          </div>
        </dl>

        <p className="pt-2 text-xs text-slate-200">
          문의가 필요할 경우 상단 연락처 정보를 기준으로 고객센터나 가맹점
          담당자에게 연락할 수 있습니다.
        </p>
      </div>

      {/* 이력 */}
      <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-lg shadow-black/40 p-6 space-y-4 md:col-span-2">
        <h2 className="text-lg font-semibold text-white">이력</h2>

        <div className="border-t border-slate-700/70 pt-4" />

        <dl className="space-y-3">
          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">등록일</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.registeredAt}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-sm font-medium text-slate-200">수정일</dt>
            <dd className="text-base font-semibold text-white text-right">
              {merchant.updatedAt}
            </dd>
          </div>
        </dl>

        <p className="pt-2 text-xs text-slate-200">
          최초 등록일과 최근 수정일을 기준으로 가맹점 정보 변경 이력을 파악할
          수 있습니다.
        </p>
      </div>
    </section>
  );
}