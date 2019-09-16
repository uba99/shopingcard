/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import Carditem from '../../components/CardItem';
import './Home.css';
import { addtocard, remoefromcard, itemnumber, couponcode } from './actions';
import Shopingcard from '../Shopingcard/Loadable';
export function Home({ data, dispatch }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center containergrid">
          {data.prouducts.map(item => (
            <Carditem
              key={item.id}
              addcard={id => dispatch(addtocard(id))}
              removecard={id => dispatch(remoefromcard(id))}
              {...item}
            />
          ))}
        </div>
        <div>
          <Shopingcard
            {...data}
            removeitem={id => dispatch(remoefromcard(id))}
            itemnumber={(id, value) => dispatch(itemnumber(id, value))}
            coupon={code => dispatch(couponcode(code))}
          />
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectHome(),
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
)(Home);
