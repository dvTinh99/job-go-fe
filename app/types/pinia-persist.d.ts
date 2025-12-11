import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    /** Persist chỉ là custom key mình thêm vào */
    persist?: boolean | string[]
  }
}
