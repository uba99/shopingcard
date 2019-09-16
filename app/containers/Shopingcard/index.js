/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/**
 *
 * Shopingcard
 *
 */

import React, { memo, useState, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export class Shopingcard extends Component {
  iteminput = null;

  recordcoupon = () => {
    const x = this.props.Couponcode.filter(
      item => item.name == this.iteminput.value,
    )[0];
    const z = x && this.props.card.length ? x.value : alert('not found');
    this.props.coupon(z);
  };

  calculator = () => {
    const x = this.props.card.map(item =>item.coupon? item.number * item.price*item.coupon*0.01:item.number * item.price);
    const y = x.reduce((a, b) => a + b, 0);
    return y;
  };

  selectopteion = (id, value) => {
    this.props.itemnumber(id, value);
  };

  deleteitem = e => this.props.removeitem(e.target.value);

  selectitems = () =>
    this.props.card
      ? this.props.card.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <select
              className="form-control form-control-sm w-25"
              onChange={e =>
                this.selectopteion(item.id, parseInt(e.target.value))
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
          </td>
          <td>{item.number * item.price}</td>
          <td>
            <button
              type="button"
              value={item.id}
              onClick={this.deleteitem}
              className="btn btn-sm btn-danger"
            >
                Delete
            </button>
          </td>
        </tr>
      ))
      : null;

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>item</th>
              <th>Price</th>
              <th>number</th>
              <th>total</th>
              <th>Dlete</th>
            </tr>
          </thead>
          <tbody>{this.selectitems()}</tbody>
        </table>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Total Price</th>
              <th>Coupon Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.calculator()}</td>
              <td>
                <div className="d-flex btn-group input-group w-25">
                  <input
                    className="form-control d-flex w-50"
                    type="text"
                    ref={el => (this.iteminput = el)}
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-success d-flex w-25"
                    onClick={this.recordcoupon}
                  >
                    Record
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

// Shopingcard.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   null,
//   mapDispatchTothis,
// );

export default compose(
  // withConnect,
  memo,
)(Shopingcard);
