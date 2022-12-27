/**
 * @description 根据数组创建链表
 */
import type { LinkedList } from '@/types'
export function createLinkedList(array: []): null
export function createLinkedList<T>(array: T[]): LinkedList<T>
export function createLinkedList<T>(array: T[]): LinkedList<T> | null {
  if (!array.length)
    return null
  let currentNode: LinkedList<T> = {
    value: array[array.length - 1],
    next: null,
  }
  if (array.length === 1)
    return currentNode
  for (let i = array.length - 2; i >= 0; i--) {
    currentNode = {
      value: array[i],
      next: currentNode,
    }
  }
  return currentNode
}

export default {
  createLinkedList,
}
