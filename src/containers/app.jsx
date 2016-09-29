import React from 'react';
import { connect } from 'react-redux';
import App from '../components/index.jsx';
import { increment, decrement, square } from '../actions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    incrementClick: () => { dispatch(increment()); },
    decrementClick: () => { dispatch(decrement()); },
    squareClick: () => { dispatch(square()); },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
