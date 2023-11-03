/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
   type Nullable<T> = T | null;
   type Recordable<T = any> = Record<string, T>;
   type ReadonlyRecordable<T = any> = Readonly<Record<string, T>>;
   type Indexable<T = any> = Record<string, T>;
   type DeepPartial<T> = {
     [P in keyof T]?: DeepPartial<T[P]>;
   };
   type Fn<T = any, R = T> = (...arg: T[]) => R;
   type EmitType = (event: string, ...args: any[]) => void;

   const AMap:any

   namespace NodeJS {
     interface ProcessEnv {
       TARO_APP_API_URL: string;
       TARO_APP_API_URL_PREFIX: string
       TARO_APP_MODE:string
       TARO_APP_WS_URL:string
       TARO_APP_OSS_URL:string
       TARO_APP_AMAP:string
     }
   }
}

export {}
