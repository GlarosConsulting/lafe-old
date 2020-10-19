import React from 'react';
import { Row, Table, Col } from 'reactstrap';

import Widget from '../../../components/Widget';
import formatPercentage from '../../../utils/formatPercentage';
import formatValue from '../../../utils/formatValue';
import s from './DetailedDashboard.module.scss';
import { table_data } from './mock';

class DetailedDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Análise física - Detalhada</h1>

        <Row>
          <Col lg={12}>
            <Widget
              title={
                <h5>
                  <span>Orçamento</span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Un.</th>
                    <th>Quantidade orçada</th>
                    <th>Valor Unit.</th>
                    <th>Valor Total (R$)</th>
                    <th>Valor Reajustado até Outubro/19</th>
                    <th>Valor Total com saldo reajustado ATÉ DATA ATUAL</th>
                  </tr>
                </thead>

                <tbody>
                  {table_data.map(row => (
                    <tr>
                      <td>{row.description}</td>
                      <td>{row.un}</td>
                      <td>{row.budget.amount}</td>
                      <td>{formatValue(row.budget.values.unit)}</td>
                      <td>{formatValue(row.budget.values.total)}</td>
                      <td>{formatValue(row.budget.values.readjusted.month)}</td>
                      <td>{formatValue(row.budget.values.readjusted.today)}</td>
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
                  <span>Avanço físico acumulado - Acumulado previsto</span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Un.</th>
                    <th>% até mês anterior</th>
                    <th>% até mês atual</th>
                    <th>Quant. prev.</th>
                    <th>Custo. prev.</th>
                  </tr>
                </thead>

                <tbody>
                  {table_data.map(row => (
                    <tr>
                      <td>{row.description}</td>
                      <td>{row.un}</td>
                      <td>
                        {formatPercentage(
                          row.accumulated.expected.until_previous_month,
                        )}
                      </td>
                      <td>
                        {formatPercentage(
                          row.accumulated.expected.until_current_month,
                        )}
                      </td>
                      <td>{row.accumulated.expected.amount}</td>
                      <td>{formatValue(row.accumulated.expected.value)}</td>
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
                  <span>Avanço físico acumulado - Acumulado executado</span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Un.</th>
                    <th>% até mês anterior</th>
                    <th>% até mês atual</th>
                    <th>Quant. prev.</th>
                    <th>Custo. prev.</th>
                  </tr>
                </thead>

                <tbody>
                  {table_data.map(row => (
                    <tr>
                      <td>{row.description}</td>
                      <td>{row.un}</td>
                      <td>
                        {formatPercentage(
                          row.accumulated.executed.until_previous_month,
                        )}
                      </td>
                      <td>
                        {formatPercentage(
                          row.accumulated.executed.until_current_month,
                        )}
                      </td>
                      <td>{row.accumulated.executed.amount}</td>
                      <td>{formatValue(row.accumulated.executed.value)}</td>
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
                  <span>Avanço físico acumulado - Reajuste do orçamento</span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Un.</th>
                    <th>Total orçado c/ saldo reaj. até o mês anterior</th>
                    <th>Custo. med.</th>
                    <th>Saldo reajustado</th>
                    <th>Total orçado c/ saldo reaj. até o mês atual</th>
                    <th>Custo. prev. reajustado</th>
                  </tr>
                </thead>

                <tbody>
                  {table_data.map(row => (
                    <tr>
                      <td>{row.description}</td>
                      <td>{row.un}</td>
                      <td>
                        {formatValue(
                          row.accumulated.readjusted_budget
                            .value_until_previous_month,
                        )}
                      </td>
                      <td>
                        {formatValue(
                          row.accumulated.readjusted_budget.expected_value,
                        )}
                      </td>
                      <td>
                        {formatValue(
                          row.accumulated.readjusted_budget.readjusted_value,
                        )}
                      </td>
                      <td>
                        {formatValue(
                          row.accumulated.readjusted_budget
                            .value_until_current_month,
                        )}
                      </td>
                      <td>
                        {formatValue(
                          row.accumulated.readjusted_budget
                            .expected_value_readjusted,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DetailedDashboard;
