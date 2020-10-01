/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import cx from 'classnames';
import PropTypes from 'prop-types';

import { dismissAlert } from '../../actions/alerts';
import { changeActiveSidebarItem } from '../../actions/navigation';
import { logoutUser } from '../../actions/user';
import logoImg from '../../images/logo.png';
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
    const { activeItem, dispatch } = this.props;

    return (
      <nav
        className={cx(s.root)}
        ref={nav => {
          this.element = nav;
        }}
      >
        <header className={s.logo}>
          <a href="http://lafengenharia.com.br/">
            <img src={logoImg} alt="Lafe" />
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
