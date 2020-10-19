import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '../styles/theme.scss';
import { logoutUser } from '../actions/user';
import ErrorPage from '../pages/error';
import Login from '../pages/login';
import Register from '../pages/register';
import LayoutComponent from './Layout';

const PrivateRoute = ({ isAuthenticated, dispatch, component, ...rest }) => {
  if (!isAuthenticated) {
    dispatch(logoutUser());

    return <Redirect to="/login" />;
  }

  return (
    <Route {...rest} render={props => React.createElement(component, props)} />
  );
};

const CloseButton = ({ closeToast }) => (
  <i
    className="la la-close notifications-close"
    aria-label="Close notification"
    onClick={closeToast}
    onKeyDown={closeToast}
    role="button"
    tabIndex={0}
  />
);

class App extends React.PureComponent {
  render() {
    const { dispatch, isAuthenticated } = this.props;

    return (
      <div>
        <ToastContainer
          autoClose={5000}
          hideProgressBar
          closeButton={<CloseButton />}
        />

        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/main" />} />
            <Route
              exact
              path="/app"
              render={() => <Redirect to="/app/main" />}
            />

            <PrivateRoute
              path="/app"
              isAuthenticated={isAuthenticated}
              dispatch={dispatch}
              component={LayoutComponent}
            />

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/error" component={ErrorPage} />

            <Route component={ErrorPage} />

            <Redirect from="*" to="/app/main/analise-fisica/macro" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
