/* eslint-disable react/prop-types */
/**
 *
 * Todolist
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Todoinput(props) {
  const updateNewTextValue = name => {
    props.textvalues(name.target.value);
  };
  const updateNewPriceValue = price => {
    props.pricevalues(price.target.value);
  };
  const createtodo = () => {
    const id = props.prouducts.length
      ? props.prouducts[props.prouducts.length - 1].id + 1
      : 1;
    if (
      !props.prouducts.find(item => props.textvalue == item.name) &&
      props.textvalue.length >= 3 &&
      props.pricevalue >= 5
    ) {
      props.buttonaddtodos(id, props.textvalue, props.pricevalue);
    }
  };
  return (
    <>
      <div className="container">
        <div className="card d-flex">
          <input
            className="form-control mx-auto w-25 my-2"
            placeholder="Name"
            type="text"
            value={props.textvalue}
            onChange={updateNewTextValue}
          />
          <input
            className="form-control mx-auto w-25 my-2"
            placeholder="Price"
            type="number"
            value={props.pricevalue}
            onChange={updateNewPriceValue}
          />
          <button
            type="button"
            className="btn btn-primary w-50 mx-auto d-block my-2"
            onClick={createtodo}
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
}

Todoinput.propTypes = {};

export default memo(Todoinput);
