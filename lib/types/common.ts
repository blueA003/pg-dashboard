// 리스트 응답 래퍼
export type ApiListRes<T> = {
  status: number;
  message: string;
  data: T[];
};

// 단일 응답 래퍼
export type ApiRes<T> = {
  status: number;
  message: string;
  data: T;
};

// 상태 코드
export type StatusItem = {
  code: string;
  description: string;
};

// 결제 수단 코드
export type PayTypeItem = {
  type: string;
  description: string;
};

// 제네릭 타입 조합
export type StatusCodes = ApiListRes<StatusItem>;
export type PayTypes = ApiListRes<PayTypeItem>;
