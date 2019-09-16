/*
 *
 * Home actions
 *
 */

import { ADD_TO_CARD, REMOVE_FROM_CARD, ITEM_NUMBER,COUPON_CODE } from './constants';

export function addtocard(id) {
  return {
    type: ADD_TO_CARD,
    id,
  };
}
export function remoefromcard(id) {
  return {
    type: REMOVE_FROM_CARD,
    id,
  };
}

export function itemnumber(id, value) {
  return {
    type: ITEM_NUMBER,
    id,
    value,
  };
}

export function couponcode(code) {
  return {
    type: COUPON_CODE,
    code,
  };
}
