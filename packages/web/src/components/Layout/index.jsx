import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';
import Hammer from 'rc-hammerjs';

import { openSidebar, closeSidebar } from '../../actions/navigation';
import Charts from '../../pages/components/charts/Charts';
import UIIcons from '../../pages/components/icons';
import UINotifications from '../../pages/notifications';
import PhysicalAnalysisDetailed from '../../pages/physical-analysis/detailed';
import PhysicalAnalysisMacroDashboard from '../../pages/physical-analysis/macro-dashboard';
import MainMonthImpacts from '../../pages/physical-analysis/main-month-impacts';
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
    const { dispatch, sidebarOpened } = this.props;

    if ('ontouchstart' in window) {
      if (e.direction === 4) {
        dispatch(openSidebar());
      } else if (e.direction === 2 && sidebarOpened) {
        dispatch(closeSidebar());
      }
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
                      path="/app"
                      exact
                      render={() => <Redirect to="/app/analise-fisica/macro" />}
                    />

                    <Route
                      path="/app/analise-fisica/macro"
                      exact
                      component={PhysicalAnalysisMacroDashboard}
                    />

                    <Route
                      path="/app/analise-fisica/detalhada"
                      exact
                      component={PhysicalAnalysisDetailed}
                    />

                    <Route
                      path="/app/principais-impactos-mes"
                      exact
                      component={MainMonthImpacts}
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
