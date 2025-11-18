import { ReactNode } from "react";

type Props<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  error: unknown;
  children: ReactNode;
};

export function QueryState<T>({
  isLoading,
  isError,
  data,
  error,
  children,
}: Props<T>) {
  if (isLoading) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 shadow-md shadow-black/30">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-transparent" />
          <span>데이터를 불러오는 중입니다...</span>
        </div>
      </div>
    );
  }
  if (isError) {
    const message =
      error instanceof Error ? error.message : "잠시 후 다시 시도해주세요.";

    return (
      <div className="flex min-h-60 items-center justify-center">
        <div className="rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-sm text-rose-100 shadow-md shadow-black/30">
          <p className="font-semibold">
            데이터를 불러오는 중 오류가 발생했습니다.
          </p>
          <p className="mt-1 text-xs text-rose-200">{message}</p>
        </div>
      </div>
    );
  }
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 shadow-md shadow-black/30">
          <p className="font-medium">표시할 데이터가 없습니다.</p>
          <p className="mt-1 text-xs text-slate-400">
            조건을 바꾸거나 다른 기간을 선택해보세요.
          </p>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
