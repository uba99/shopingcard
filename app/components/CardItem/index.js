/**
 *
 * CardItem
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CardItem(props) {
  const addtocard = e => props.addcard(e.target.value);
  const removetocard = e => props.removecard(e.target.value);

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">price:{props.price}</p>
          {props.done ? (
            <button
              onClick={removetocard}
              type="button"
              className="btn btn-sm btn-danger"
              value={props.id}
            >
              Remove From Card
            </button>
          ) : (
            <button
              onClick={addtocard}
              type="button"
              className="btn btn-sm btn-primary"
              value={props.id}
            >
              Add To Card
            </button>
          )}
        </div>
      </div>
    </>
  );
}

CardItem.propTypes = {};

export default memo(CardItem);
