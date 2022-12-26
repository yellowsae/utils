/**
 * Array, or not yet
 */
export type Arrayable<T> = T | T[]

/**
 * Null or whatever
 */
export type Nullable<T> = T | null | undefined

export interface LinkedList<T = number> {
  value: T
  next: LinkedList<T> | null
}
