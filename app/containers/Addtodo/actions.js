/*
 *
 * Addtodo actions
 *
 */

import { ADD_TODO, BUTTON_ADD_TODO, REMOVE_TODO, EDIT_TODO } from './constants';

export function addtodo(name, price) {
  return {
    type: ADD_TODO,
    name,
    price,
  };
}

export function buttontodo(id, name, price) {
  return {
    type: BUTTON_ADD_TODO,
    id,
    name,
    price,
  };
}

export function removetodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function edittodo(name, editname) {
  return {
    type: EDIT_TODO,
    name,
    editname,
  };
}
