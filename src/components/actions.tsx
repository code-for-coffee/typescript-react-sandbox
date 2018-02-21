/*
 * action types
 */
export const ADD_ACCOUNT = 'ADD_TODO';
 
/*
 * action creators
 */
export function addAccount(text: string) {
  return { type: ADD_ACCOUNT, text }
}