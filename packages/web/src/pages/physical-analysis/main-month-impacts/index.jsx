import React from 'react';
import {
  Row,
  Table,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import formatPercentage from '../../../utils/formatPercentage';
import s from './MainMonthImpacts.module.scss';
import { DATA } from './mock';

class MainMonthImpacts extends React.Component {
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
          <h1 className="mr-4">Principais impactos do mes</h1>

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
                  key={item.id}
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
                  <span />
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descrição</th>
                    <th>Prev. - % até o mês</th>
                    <th>Prev. - Quant.</th>
                    <th>Exec. - % até o mês</th>
                    <th>Exec. - Quant.</th>
                    <th>Mês - % mês</th>
                    <th>Mês - % acum.</th>
                    <th>Observações</th>
                  </tr>
                </thead>

                <tbody>
                  {activeConstruction.data.main.map(row => (
                    <tr>
                      <td>{row.item_id}</td>
                      <td>{row.description}</td>
                      <td>
                        {formatPercentage(row.expected.percentage_until_month)}
                      </td>
                      <td>{row.expected.amount}</td>
                      <td>
                        {formatPercentage(row.executed.percentage_until_month)}
                      </td>
                      <td>{row.executed.amount}</td>
                      <td>
                        {formatPercentage(row.month.percentage_until_month)}
                      </td>
                      <td>
                        {formatPercentage(row.month.accumulated_percentage)}
                      </td>
                      <td>{row.observations}</td>
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
                  <span>Principais atividades adiantadas</span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descrição</th>
                    <th>Prev. - % até o mês</th>
                    <th>Prev. - Quant.</th>
                    <th>Exec. - % até o mês</th>
                    <th>Exec. - Quant.</th>
                    <th>Mês - % mês</th>
                    <th>Mês - % acum.</th>
                    <th>Observações</th>
                  </tr>
                </thead>

                <tbody>
                  {activeConstruction.data.main_early_activities.map(row => (
                    <tr key={row.item_id}>
                      <td>{row.item_id}</td>
                      <td>{row.description}</td>
                      <td>
                        {formatPercentage(row.expected.percentage_until_month)}
                      </td>
                      <td>{row.expected.amount}</td>
                      <td>
                        {formatPercentage(row.executed.percentage_until_month)}
                      </td>
                      <td>{row.executed.amount}</td>
                      <td>
                        {formatPercentage(row.month.percentage_until_month)}
                      </td>
                      <td>
                        {formatPercentage(row.month.accumulated_percentage)}
                      </td>
                      <td>{row.observations}</td>
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
                  <span>
                    Principais atividades a iniciarem nos próximos 4 meses
                  </span>
                </h5>
              }
              collapse
            >
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descrição</th>
                    <th>Cron. acum. - Out-20</th>
                    <th>Cron. acum. - Nov-20</th>
                    <th>Cron. acum. - Dez-20</th>
                    <th>Cron. acum. - Jan-21</th>
                    <th>Observações</th>
                  </tr>
                </thead>

                <tbody>
                  {activeConstruction.data.main_activities_to_start.map(row => (
                    <tr key={row.item_id}>
                      <td>{row.item_id}</td>
                      <td>{row.description}</td>
                      <td>
                        {formatPercentage(row.accumulated_schedule[0].value)}
                      </td>
                      <td>
                        {formatPercentage(row.accumulated_schedule[1].value)}
                      </td>
                      <td>
                        {formatPercentage(row.accumulated_schedule[2].value)}
                      </td>
                      <td>
                        {formatPercentage(row.accumulated_schedule[3].value)}
                      </td>
                      <td>{row.observations}</td>
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

export default MainMonthImpacts;
