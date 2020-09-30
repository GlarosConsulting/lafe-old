import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Bundle extends Component {
  static generateBundle = loadModule => () => (
    <Bundle load={loadModule}>
      {Mod =>
        Mod ? (
          <Mod />
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '35vh' }}>Loading</div>
        )
      }
    </Bundle>
  );

  constructor(props) {
    super(props);

    this.state = {
      mod: null,
    };
  }

  UNSAFE_componentWillMount() {
    this.load(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { load } = this.props;

    if (nextProps.load !== load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props.load(mod => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    const { children } = this.props;
    const { mod } = this.state;

    return children(mod);
  }
}

Bundle.propTypes = {
  load: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Bundle;
