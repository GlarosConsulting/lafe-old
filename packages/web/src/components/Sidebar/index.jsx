/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Progress, Alert } from 'reactstrap';

import cx from 'classnames';
import PropTypes from 'prop-types';

import { dismissAlert } from '../../actions/alerts';
import { changeActiveSidebarItem } from '../../actions/navigation';
import { logoutUser } from '../../actions/user';
import LinksGroup from './LinksGroup';
import s from './Sidebar.module.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  componentDidMount() {
    const { sidebarOpened } = this.props;

    this.element.addEventListener(
      'transitionend',
      () => {
        if (sidebarOpened) {
          this.element.classList.add(s.sidebarOpen);
        }
      },
      false,
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { sidebarOpened } = this.props;

    if (nextProps.sidebarOpened !== sidebarOpened) {
      if (nextProps.sidebarOpened) {
        this.element.style.height = `${this.element.scrollHeight}px`;
      } else {
        this.element.classList.remove(s.sidebarOpen);

        setTimeout(() => {
          this.element.style.height = '';
        }, 0);
      }
    }
  }

  dismissAlert(id) {
    const { dispatch } = this.props;

    dispatch(dismissAlert(id));
  }

  doLogout() {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  render() {
    const { activeItem, alertsList, dispatch } = this.props;

    return (
      <nav
        className={cx(s.root)}
        ref={nav => {
          this.element = nav;
        }}
      >
        <header className={s.logo}>
          <a href="https://demo.flatlogic.com/light-blue-react/">
            <span>Light</span>
            <span lassName="fw-bold">Blue</span>
          </a>
        </header>

        <ul className={s.nav}>
          <LinksGroup
            onActiveSidebarItemChange={item =>
              dispatch(changeActiveSidebarItem(item))
            }
            activeItem={activeItem}
            header="Dashboard"
            isHeader
            iconName="flaticon-home"
            link="/app/main"
            index="main"
          />

          <h5 className={[s.navTitle, s.groupTitle].join(' ')}>TEMPLATE</h5>

          <LinksGroup
            onActiveSidebarItemChange={item =>
              dispatch(changeActiveSidebarItem(item))
            }
            activeItem={activeItem}
            header="Typography"
            isHeader
            iconName="flaticon-network"
            link="/app/typography"
            index="core"
          />

          <LinksGroup
            onActiveSidebarItemChange={item =>
              dispatch(changeActiveSidebarItem(item))
            }
            activeItem={activeItem}
            header="Tables Basic"
            isHeader
            iconName="flaticon-map-location"
            link="/app/tables"
            index="tables"
          />

          <LinksGroup
            onActiveSidebarItemChange={item =>
              dispatch(changeActiveSidebarItem(item))
            }
            activeItem={activeItem}
            header="Notifications"
            isHeader
            iconName="flaticon-layers"
            link="/app/notifications"
            index="ui"
          />

          <LinksGroup
            onActiveSidebarItemChange={item =>
              dispatch(changeActiveSidebarItem(item))
            }
            activeItem={activeItem}
            header="Components"
            isHeader
            iconName="flaticon-list"
            link="/app/forms"
            index="forms"
            childrenLinks={[
              {
                header: 'Charts',
                link: '/app/charts',
              },
              {
                header: 'Icons',
                link: '/app/icons',
              },
            ]}
          />
        </ul>

        <h5 className={s.navTitle}>
          LABELS
          <a className={s.actionLink}>
            <i
              className={`${s.glyphiconSm} glyphicon glyphicon-plus float-right`}
            />
          </a>
        </h5>

        <ul className={s.sidebarLabels}>
          <li>
            <a href="#">
              <i className="fa fa-circle text-success mr-2" />
              <span className={s.labelName}>My Recent</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-circle text-primary mr-2" />
              <span className={s.labelName}>Starred</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-circle text-danger mr-2" />
              <span className={s.labelName}>Background</span>
            </a>
          </li>
        </ul>

        <h5 className={s.navTitle}>PROJECTS</h5>

        <div className={s.sidebarAlerts}>
          {alertsList.map(alert => (
            <Alert
              key={alert.id}
              className={s.sidebarAlert}
              color="transparent"
              isOpen
              toggle={() => {
                this.dismissAlert(alert.id);
              }}
            >
              <span>{alert.title}</span>
              <br />
              <Progress
                className="bg-custom-dark progress-xs mt-1"
                color={alert.color}
                value={alert.value}
              />
              <small>{alert.footer}</small>
            </Alert>
          ))}
        </div>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

Sidebar.defaultProps = {
  activeItem: '',
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
