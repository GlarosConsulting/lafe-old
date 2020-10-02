import React from 'react';
// import AnimateNumber from 'react-animated-number';
import ApexChart from 'react-apexcharts';
import { Row, Table, Input, Label, Badge, Col } from 'reactstrap';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts'; // eslint-disable-line import-helpers/order-imports

import Widget from '../../components/Widget';
import s from './Dashboard.module.scss';
import { charts_data } from './mock';

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
        <h1 className="page-title">Análise física macro</h1>

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
                series={charts_data.direct_expenses.columns.series}
                options={charts_data.direct_expenses.columns.options}
                height={350}
              />
            </Widget>
          </Col>

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
              <ReactEchartsCore
                echarts={echarts}
                option={charts_data.direct_expenses.lines}
                opts={{
                  renderer: 'canvas',
                }}
                style={{ height: '365px' }}
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
                series={charts_data.total_expenses.columns.series}
                options={charts_data.total_expenses.columns.options}
                height={350}
              />
            </Widget>
          </Col>

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
              <ReactEchartsCore
                echarts={echarts}
                option={charts_data.total_expenses.lines}
                opts={{
                  renderer: 'canvas',
                }}
                style={{ height: '365px' }}
              />
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Widget
              title={
                <h5>
                  <span>Atividades</span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox1"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.checkAll(event, 'checkboxes1')
                          }
                        />
                        <Label for="checkbox1" />
                      </div>
                    </th>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>% prev. até a data</th>
                    <th>% real até a data</th>
                    <th>Desvio físico</th>
                    <th>Situação</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>1</td>
                    <td>Instalações</td>
                    <td>15,24%</td>
                    <td>21,40%</td>
                    <td>6,17%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>2</td>
                    <td>Revestimento externo</td>
                    <td>1,50%</td>
                    <td>11,72%</td>
                    <td>10,22%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>3</td>
                    <td>Revestimento de parede</td>
                    <td>21,46%</td>
                    <td>26,08%</td>
                    <td>4,62%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>4</td>
                    <td>Revestimento de piso</td>
                    <td>4,10%</td>
                    <td>5,10%</td>
                    <td>1,00%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>5</td>
                    <td>Diversos</td>
                    <td />
                    <td>1,87%</td>
                    <td>1,87%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>6</td>
                    <td>Pintura</td>
                    <td />
                    <td>0,78%</td>
                    <td>0,78%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>7</td>
                    <td>Pintura</td>
                    <td>4,45</td>
                    <td>5,15%</td>
                    <td>0,70%</td>
                    <td>
                      <Badge color="success">Adiantada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>8</td>
                    <td>Alvenária / Fechamento</td>
                    <td>73,52%</td>
                    <td>72,41%</td>
                    <td>-1,10%</td>
                    <td>
                      <Badge color="danger">Atrasada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>9</td>
                    <td>Esquadras de alumínio</td>
                    <td>1,71%</td>
                    <td>1,50%</td>
                    <td>-0,21%</td>
                    <td>
                      <Badge color="danger">Atrasada</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="abc-checkbox">
                        <Input
                          id="checkbox2"
                          type="checkbox"
                          checked={false}
                          onChange={event =>
                            this.changeCheck(event, 'checkboxes1', 1)
                          }
                        />
                        <Label for="checkbox2" />
                      </div>
                    </td>
                    <td>10</td>
                    <td>Revestimento de teto</td>
                    <td>0,04%</td>
                    <td />
                    <td>-0,04%</td>
                    <td>
                      <Badge color="danger">Atrasada</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
