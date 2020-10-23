import React from 'react';
import ApexChart from 'react-apexcharts';
import {
  Row,
  Table,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts'; // eslint-disable-line import-helpers/order-imports

import Widget from '../../../components/Widget';
import formatPercentage from '../../../utils/formatPercentage';
import formatValue from '../../../utils/formatValue';
import s from './ManagementReport.module.scss';
import { DATA } from './mock';

class ManagementReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConstructionDropdownOpen: false,
      activeConstruction: {
        id: 'obra-33',
        label: 'Obra 33',
      },
    };
  }

  handleToggleConstructionDropdown = () => {
    const { isConstructionDropdownOpen } = this.state;

    this.setState({ isConstructionDropdownOpen: !isConstructionDropdownOpen });
  };

  handleChangeActiveConstruction = ({ id, label }) => {
    this.setState({
      activeConstruction: {
        id,
        label,
      },
    });
  };

  getActiveConstruction = () => {
    const { activeConstruction } = this.state;

    return DATA.find(item => item.id === activeConstruction.id);
  };

  render() {
    const { isConstructionDropdownOpen } = this.state;

    const activeConstruction = this.getActiveConstruction();

    return (
      <div className={s.root}>
        <div className="page-title d-flex align-items-center">
          <h1 className="mr-4">Relatório gerencial</h1>

          <Dropdown
            isOpen={isConstructionDropdownOpen}
            toggle={this.handleToggleConstructionDropdown}
          >
            <DropdownToggle
              className={`${s.constructionDropdownToggle} text-white`}
            >
              <span>{activeConstruction.label}</span>
              <i className="glyphicon glyphicon-chevron-down" />
            </DropdownToggle>

            <DropdownMenu
              right
              className={`${s.constructionDropdownMenu} ${s.support}`}
            >
              {DATA.map(item => (
                <DropdownItem
                  active={item.id === activeConstruction.id}
                  onClick={() => this.handleChangeActiveConstruction(item)}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <Row>
          <Col lg={12}>
            <Widget
              title={
                <h5>
                  <span>Despesas diretas</span>
                </h5>
              }
              collapse
              collapsed
            >
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th>% medido</th>
                    <th>Valor orçado</th>
                    <th>Peso %</th>
                    <th>Acum. - Medido</th>
                    <th>Acum. - Pagamentos</th>
                    <th>Acum. - Verba disponível</th>
                    <th>Acum. - Projeção</th>
                  </tr>
                </thead>

                <tbody>
                  {activeConstruction.data.table.direct_expenses.map(row => (
                    <tr>
                      <td>{row.item_id}</td>
                      <td>{row.description}</td>
                      <td>{formatPercentage(row.measured_percentage)}</td>
                      <td>{formatValue(row.budget_value)}</td>
                      <td>{formatPercentage(row.weight_percentage)}</td>
                      <td>{formatValue(row.accumulated_values.measured)}</td>
                      <td>{formatValue(row.accumulated_values.payments)}</td>
                      <td>{formatValue(row.accumulated_values.budget)}</td>
                      <td>{formatValue(row.accumulated_values.projection)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Widget
              title={
                <h5>
                  <span>Despesas indiretas</span>
                </h5>
              }
              collapse
              collapsed
            >
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th>% medido</th>
                    <th>Valor orçado</th>
                    <th>Peso %</th>
                    <th>Acum. - Medido</th>
                    <th>Acum. - Pagamentos</th>
                    <th>Acum. - Verba disponível</th>
                    <th>Acum. - Projeção</th>
                  </tr>
                </thead>

                <tbody>
                  {activeConstruction.data.table.indirect_expenses.map(row => (
                    <tr>
                      <td>{row.item_id}</td>
                      <td>{row.description}</td>
                      <td>{formatPercentage(row.measured_percentage)}</td>
                      <td>{formatValue(row.budget_value)}</td>
                      <td>{formatPercentage(row.weight_percentage)}</td>
                      <td>{formatValue(row.accumulated_values.measured)}</td>
                      <td>{formatValue(row.accumulated_values.payments)}</td>
                      <td>{formatValue(row.accumulated_values.budget)}</td>
                      <td>{formatValue(row.accumulated_values.projection)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Widget
              title={
                <h5>
                  <span>Síntese das projeções</span>
                </h5>
              }
              collapse
              collapsed
            >
              <Table>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Set-20</th>
                    <th>Ago-20</th>
                  </tr>
                </thead>

                <tbody>
                  {activeConstruction.data.summary_projections.table.data.map(
                    row => (
                      <tr>
                        <td>{row.description}</td>
                        <td>
                          {row.percentages
                            ? formatPercentage(row.percentages[0])
                            : formatValue(row.values[0])}
                        </td>
                        <td>
                          {row.percentages
                            ? formatPercentage(row.percentages[1])
                            : formatValue(row.values[1])}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Widget
              title={
                <h5>
                  <span>Síntese das projeções</span>
                </h5>
              }
              collapse
            >
              <ApexChart
                type="bar"
                series={
                  activeConstruction.data.summary_projections.chart.series
                }
                options={
                  activeConstruction.data.summary_projections.chart.options
                }
                height={350}
              />
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Widget
              title={
                <h5>
                  <span>Evolução mensal das despesas totais</span>
                </h5>
              }
              collapse
            >
              <ApexChart
                type="bar"
                series={activeConstruction.data.monthly_evolution.series}
                options={activeConstruction.data.monthly_evolution.options}
                height={350}
              />
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Widget
              title={
                <h5>
                  <span>Evolução acumulada das despesas totais</span>
                </h5>
              }
              collapse
            >
              <ReactEchartsCore
                echarts={echarts}
                option={activeConstruction.data.accumulated_evolution}
                opts={{
                  renderer: 'canvas',
                }}
                style={{ height: '365px' }}
              />
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ManagementReport;
