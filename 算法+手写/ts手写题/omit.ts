type MyOmit<T,K extends keyof any>={
  [P in Exclude<keyof T,K>]:T[P]
}