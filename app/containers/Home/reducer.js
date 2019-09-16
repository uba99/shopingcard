/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { isRestElement } from '@babel/types';
import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  ITEM_NUMBER,
  COUPON_CODE,
} from './constants';
import initialstate from './data';
export const initialState = initialstate;

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TO_CARD:
        draft.prouducts.filter(item => item.id == action.id)[0].done = true;
        draft.card = !state.card.find(item => item.id == action.id)
          ? [
            ...state.card,
            state.prouducts.filter(item => item.id == action.id)[0],
          ]
          : state.card;
        break;

      case REMOVE_FROM_CARD:
        draft.prouducts.filter(item => item.id == action.id)[0].done = false;
        draft.card = state.card.filter(item => item.id != action.id);
        break;

      case ITEM_NUMBER:
        (draft.card = [...state.card]),
        (state.card.filter(item => item.id == action.id)[0].number =
            action.value);
        break;

      case COUPON_CODE:
        (draft.card = [...state.card]),
        state.card.map(item => (item.coupon = action.code));
        break;
    }
  });

export default homeReducer;
