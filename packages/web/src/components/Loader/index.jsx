import React from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './Loader.module.scss';

class Loader extends React.Component {
  render() {
    const { className, size } = this.props;

    return (
      <div className={cx(s.root, className)}>
        <i className="la la-spinner la-spin" style={{ fontSize: size }} />
      </div>
    );
  }
}

Loader.propTypes = {
  size: PropTypes.number,
};

Loader.defaultProps = {
  size: 21,
};

export default Loader;
