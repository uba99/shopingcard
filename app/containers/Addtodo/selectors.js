import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addtodo state domain
 */

const selectAddtodoDomain = state => state.addtodo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Addtodo
 */

const makeSelectAddtodo = () =>
  createSelector(
    selectAddtodoDomain,
    substate => substate,
  );

export default makeSelectAddtodo;
export { selectAddtodoDomain };
