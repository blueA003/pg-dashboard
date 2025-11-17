import { ReactNode } from "react";

type Props<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  error: unknown;
  children: ReactNode
};

export function QueryState<T>({
  isLoading,
  isError,
  data,
  error,
  children,
}: Props<T>) {
  if (isLoading) return <div>로딩처리</div>;
  if (isError) return <div>에러처리</div>;
  if (!data || (Array.isArray(data) && data.length === 0)) 
    return <div>데이터 없을 때</div>;
  
  return <>{children}</>;
}