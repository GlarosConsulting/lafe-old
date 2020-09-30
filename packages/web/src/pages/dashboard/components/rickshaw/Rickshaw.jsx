import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Rickshaw from 'rickshaw';

class RickshawGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: null,
    };

    this.initRickshaw = this.initRickshaw.bind(this);
    this.onResizeRickshaw = this.onResizeRickshaw.bind(this);
  }

  componentDidMount() {
    this.initRickshaw();

    window.addEventListener('resize', this.onResizeRickshaw);
  }

  componentDidUpdate(prevProps) {
    const { sidebarVisibility } = this.props;

    if (sidebarVisibility !== prevProps.sidebarVisibility) {
      this.onResizeRickshaw();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeRickshaw);
  }

  onResizeRickshaw() {
    const { graph } = this.state;
    const { height } = this.props;

    graph.configure({ height });
    graph.render();
  }

  initRickshaw() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);

    for (let i = 0; i < 30; i += 1) {
      random.addData(seriesData);
    }

    const { height } = this.props;

    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height,
      series: [
        {
          color: '#1870DC',
          data: seriesData[0],
          name: 'Uploads',
        },
        {
          color: '#58D777',
          data: seriesData[1],
          name: 'Downloads',
        },
      ],
    });

    const { graph } = this.state;

    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph,
      xFormatter: x => new Date(x * 1000).toString(),
    });

    hoverDetail.show();

    setInterval(() => {
      random.removeData(seriesData);
      random.addData(seriesData);

      graph.update();
    }, 1000);

    graph.render();
  }

  render() {
    return (
      <div
        ref={r => {
          this.rickshawChart = r;
        }}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

RickshawGraph.propTypes = {
  height: PropTypes.number,
};

RickshawGraph.defaultProps = {
  height: 100,
};

export default connect(mapStateToProps)(RickshawGraph);
