export type BaseRecordObj = Record<string, any>;
export type MapCallBack<T, U> = (value: T[keyof T], key: keyof T) => U;
