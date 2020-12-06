// eslint-disable-next-line no-unused-vars
import { MapCallBack, BaseRecordObj } from "./types";

class ObjManeger<RecordObj extends BaseRecordObj> {
  constructor(private readonly managedObj: RecordObj) {}

  map<T>(func: MapCallBack<RecordObj, T>) {
    const objs = Object.entries(this.managedObj).map(([key, value]) => ({
      [key]: func(value, key),
    }));
    const next = Object.assign({}, ...objs) as Record<keyof RecordObj, T>;
    return new ObjManeger(next);
  }

  getObj() {
    return this.managedObj;
  }
}

export const makeWith = <T>(obj: T) => new ObjManeger(obj);
