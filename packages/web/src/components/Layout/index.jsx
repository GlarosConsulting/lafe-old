import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';
import Hammer from 'rc-hammerjs';

import { openSidebar, closeSidebar } from '../../actions/navigation';
import Charts from '../../pages/components/charts/Charts';
import UIIcons from '../../pages/components/icons';
import Dashboard from '../../pages/dashboard';
import UINotifications from '../../pages/notifications';
import TablesStatic from '../../pages/tables/static';
import CoreTypography from '../../pages/typography';
import BreadcrumbHistory from '../BreadcrumbHistory';
import Header from '../Header';
import Sidebar from '../Sidebar';
import s from './Layout.module.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  handleSwipe(e) {
    const { chatOpen } = this.state;
    const { dispatch, sidebarOpened } = this.props;

    if ('ontouchstart' in window) {
      if (e.direction === 4 && !chatOpen) {
        dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && sidebarOpened) {
        dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    const { sidebarPosition, sidebarVisibility, location } = this.props;

    return (
      <div
        className={[
          s.root,
          `sidebar-${sidebarPosition}`,
          `sidebar-${sidebarVisibility}`,
        ].join(' ')}
      >
        <div className={s.wrap}>
          <Header />
          <Sidebar />

          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <BreadcrumbHistory url={location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route
                      path="/app/main"
                      exact
                      render={() => <Redirect to="/app/main/dashboard" />}
                    />
                    <Route
                      path="/app/main/dashboard"
                      exact
                      component={Dashboard}
                    />
                    <Route path="/app/icons" exact component={UIIcons} />
                    <Route
                      path="/app/notifications"
                      exact
                      component={UINotifications}
                    />
                    <Route path="/app/charts" exact component={Charts} />
                    <Route path="/app/tables" exact component={TablesStatic} />
                    <Route
                      path="/app/typography"
                      exact
                      component={CoreTypography}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
                Light Blue React Template - React admin template made by
                <a href="https://flatlogic.com">Flatlogic</a>
              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  sidebarOpened: false,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
