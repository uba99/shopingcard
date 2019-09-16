/* eslint-disable react/prop-types */
/**
 *
 * Todocard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Todocard(props) {
  let texteditvalue = '';

  const editcardname = name => {
    props.edit(name.target.value, texteditvalue);
  };
  const deletecard = id => {
    props.delete(id.target.value);
  };
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.input ? (
              <input
                type="text"
                className="w-50"
                onChange={e => (texteditvalue = e.target.value)}
              />
            ) : (
              props.name
            )}
          </h5>
          <p className="card-text">price:{props.price}</p>
        </div>
        <div className="card-footer bg-secondary justify-content-between d-flex">
          {props.input ? (
            <button
              type="button"
              className="btn btn-success btn-sm"
              value={props.name}
              onClick={editcardname}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-warning btn-sm"
              value={props.name}
              onClick={editcardname}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="btn btn-danger btn-sm"
            value={props.id}
            onClick={deletecard}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

Todocard.propTypes = {};

export default memo(Todocard);
