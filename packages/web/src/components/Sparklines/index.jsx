import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import PropTypes from 'prop-types';
import './Sparklines.scss';

class Sparklines extends Component {
  constructor(props) {
    super(props);

    const { height, width, options } = props;

    this.state = {
      sparkOptions: {
        chart: {
          height,
          width,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '20%',
          },
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter() {
                return '';
              },
            },
          },
          marker: {
            show: false,
          },
        },
        ...options,
      },
    };
  }

  render() {
    const { type, height, width, data } = this.props;
    const { sparkOptions } = this.state;

    return (
      <Chart
        className="sparkline-chart"
        style={{ display: 'inline-block' }}
        type={type}
        height={height}
        width={width}
        options={sparkOptions}
        series={data}
      />
    );
  }
}

Sparklines.propTypes = {
  type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
};

Sparklines.defaultProps = {
  type: 'bar',
  height: 20,
  width: 50,
};

export default Sparklines;
