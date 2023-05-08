import { nanoid } from 'nanoid'

// get unique id
export const getUUid = () => nanoid()

// validate value
export function validateValue<T>(val: T) {
  return val !== null && val !== undefined;
}
