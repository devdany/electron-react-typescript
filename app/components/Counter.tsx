import * as React from 'react';

import { Component } from 'react';
import { Link } from 'react-router-dom';
const routes = require('../constants/routes.json');
const styles = require('./Counter.css');

type Props = {
  incrementCounter: () => void;
  decrementCounter: () => void;
  counter: number;
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const {
      incrementCounter,
      decrementCounter,
      counter
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={incrementCounter}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={decrementCounter}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}