/**
 *
 * Searchbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Searchbar() {
  return (
    <>
      <div className="card my-2 bg-warning">
        <input type="text" className="form-control my-1 w-50 mx-auto" placeholder="Search..."/>
      </div>
    </>
  );
}

Searchbar.propTypes = {};

export default memo(Searchbar);
