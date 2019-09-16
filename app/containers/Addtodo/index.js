/**
 *
 * Addtodo
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddtodo from './selectors';
import reducer from './reducer';
import saga from './saga';
import Searchbar from '../../components/Searchbar';
import Todoinput from '../../components/Todoinput';
import { addtodo, buttontodo, removetodo, edittodo } from './actions';
import Todocard from '../../components/Todocard';
import './addtodo.css';
export function Addtodo({ data, dispatch }) {
  useInjectReducer({ key: 'addtodo', reducer });
  useInjectSaga({ key: 'addtodo', saga });

  const updatetextvalue = name => {
    dispatch(addtodo(name, data.pricevalue));
  };

  const updatepricevalue = price => {
    dispatch(addtodo(data.textvalue, price));
  };

  const buttonaddtodo = (id, name, price) => {
    dispatch(buttontodo(id, name, price));
  };

  const editbutton = (name, texteditvalue) => {
    dispatch(edittodo(name, texteditvalue));
  };
  const deletebutton = id => {
    dispatch(removetodo(id));
  };
  return (
    <>
      <div className="container">
        <Searchbar {...data} />
        <Todoinput
          {...data}
          textvalues={updatetextvalue}
          pricevalues={updatepricevalue}
          buttonaddtodos={buttonaddtodo}
        />
        <div className="containergrid mt-3">
          {data.prouducts.map(item => (
            <Todocard
              {...item}
              edit={(name, texteditvalue) => editbutton(name, texteditvalue)}
              delete={deletebutton}
            />
          ))}
        </div>
      </div>
    </>
  );
}

Addtodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectAddtodo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Addtodo);
