/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/*
 *
 * Addtodo reducer
 *
 */
import produce from 'immer';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, BUTTON_ADD_TODO } from './constants';
import initialstate from '../Home/data';
export const initialState = initialstate;

/* eslint-disable default-case, no-param-reassign */
const addtodoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TODO:
        [draft.textvalue, draft.pricevalue] = [action.name, action.price];
        break;

      case BUTTON_ADD_TODO:
        draft.prouducts = [
          ...state.prouducts,
          {
            id: action.id,
            name: action.name,
            img: 'http://s4.picofile.com/file/8371493450/2.png',
            price: action.price,
            done: false,
            input: false,
          },
        ];
        [draft.textvalue, draft.pricevalue] = ['', ''];
        break;

      case REMOVE_TODO:
        draft.prouducts = state.prouducts.filter(item => item.id != action.id);
        break;

      case EDIT_TODO:
        draft.prouducts = state.prouducts.map(item =>
          item.name == action.name
            ? {
              ...item,
              input: !item.input,
              name: action.editname.length >= 3 ? action.editname : item.name,
            }
            : item,
        );
        break;
    }
  });

export default addtodoReducer;
