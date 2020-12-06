import { MapCallBack, BaseRecordObj } from "./types";
declare class ObjManeger<RecordObj extends BaseRecordObj> {
    private readonly managedObj;
    constructor(managedObj: RecordObj);
    map<T>(func: MapCallBack<RecordObj, T>): ObjManeger<Record<keyof RecordObj, T>>;
    getObj(): RecordObj;
}
export declare const makeWith: <T>(obj: T) => ObjManeger<T>;
export {};
