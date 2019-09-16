/* eslint-disable react/jsx-no-undef */
/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div
        className="bg-primary  d-flex justify-content-lg-around"
        style={{ height: '50px' }}
      >
        <NavLink
          className="text-white"
          style={{ lineHeight: '50px' }}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white"
          style={{ lineHeight: '50px' }}
          to="/todo"
        >
          Add Todo
        </NavLink>
        <NavLink
          className="text-white"
          style={{ lineHeight: '50px' }}
          to="/Shopingcard"
        >
          Shoping card
        </NavLink>
      </div>
    </>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);
