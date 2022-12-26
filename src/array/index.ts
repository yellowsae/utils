import base from './base'
import LinkNode from './linknode'
import tree from './tree'
export * from './base'
export * from './linknode'
export * from './tree'
/**
 * Array utils
 * @category Array
 */
export const UArray = {
  ...base,
  ...LinkNode,
  ...tree,
}
