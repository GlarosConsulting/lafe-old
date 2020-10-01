import React from 'react';
// import AnimateNumber from 'react-animated-number';
import ApexChart from 'react-apexcharts';
import { Row, Col } from 'reactstrap';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts'; // eslint-disable-line import-helpers/order-imports

import Widget from '../../components/Widget';
import s from './Dashboard.module.scss';
import { chartsData } from './mock';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    const { checkedArr } = this.state;

    let arr = [];

    if (id === 0) {
      const val = !checkedArr[0];

      for (let i = 0; i < checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;

      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }

      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }

    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard</h1>

        <Row>
          <Col lg={6} xs={12}>
            <Widget
              title={
                <h5>
                  <span>Despesas Diretas - </span>
                  <span className="fw-semi-bold">Previstas x Realizadas</span>
                </h5>
              }
              collapse
            >
              <ApexChart
                type="bar"
                series={chartsData.direct_expenses.columns.series}
                options={chartsData.direct_expenses.columns.options}
                height={350}
              />
            </Widget>
          </Col>

          <Col lg={6} xs={12}>
            <Widget collapse>
              <ReactEchartsCore
                echarts={echarts}
                option={chartsData.direct_expenses.lines}
                opts={{
                  renderer: 'canvas',
                }}
                style={{ height: '400px' }}
              />
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={6} xs={12}>
            <Widget
              title={
                <h5>
                  <span>Despesas Totais (DD + DI) - </span>
                  <span className="fw-semi-bold">Previstas x Realizadas</span>
                </h5>
              }
              collapse
            >
              <ApexChart
                type="bar"
                series={chartsData.total_expenses.columns.series}
                options={chartsData.total_expenses.columns.options}
                height={350}
              />
            </Widget>
          </Col>

          <Col lg={6} xs={12}>
            <Widget collapse>
              <ReactEchartsCore
                echarts={echarts}
                option={chartsData.total_expenses.lines}
                opts={{
                  renderer: 'canvas',
                }}
                style={{ height: '400px' }}
              />
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
