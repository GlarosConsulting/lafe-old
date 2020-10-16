import React from 'react';
import { Row, Table, Input, Label, Col } from 'reactstrap';

import Widget from '../../../components/Widget';
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
                  {table_data.map((row, index) => (
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
                      <td>{index + 1}</td>
                      <td>{row.description}</td>
                      <td>{row.un}</td>
                      <td>{row.amount}</td>
                      <td>{formatValue(row.values.unit)}</td>
                      <td>{formatValue(row.values.total)}</td>
                      <td>{formatValue(row.values.readjusted.month)}</td>
                      <td>{formatValue(row.values.readjusted.today)}</td>
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
