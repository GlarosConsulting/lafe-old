import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import {
  Container,
  Alert,
  Button,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
} from 'reactstrap';

import PropTypes from 'prop-types';

import { loginUser } from '../../actions/user';
import Widget from '../../components/Widget';
import microsoft from '../../images/microsoft.png';

class Login extends React.Component {
  static isAuthenticated(token) {
    return !!token;
  }

  constructor(props) {
    super(props);

    this.state = {
      email: 'admin@flatlogic.com',
      password: 'password',
    };

    this.doLogin = this.doLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doLogin(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser({ email, password }));
  }

  signUp() {
    const { history } = this.props;

    history.push('/register');
  }

  render() {
    const { location, isFetching, errorMessage } = this.props;
    const { email, password } = this.state;

    const { from } = location.state || {
      from: { pathname: '/app' },
    };

    if (
      Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))
    ) {
      return <Redirect to={from} />;
    }

    return (
      <div className="auth-page">
        <Container>
          <Widget
            className="widget-auth mx-auto"
            title={<h3 className="mt-0">Login to your Web App</h3>}
          >
            <p className="widget-auth-info">Use your email to sign in.</p>
            <form onSubmit={this.doLogin}>
              {errorMessage && (
                <Alert
                  className="alert-sm widget-middle-overflow rounded-0"
                  color="danger"
                >
                  {errorMessage}
                </Alert>
              )}

              <FormGroup className="mt">
                <Label for="email">Email</Label>

                <InputGroup className="input-group-no-border">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="la la-user text-white" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={email}
                    onChange={this.changeEmail}
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>

                <InputGroup className="input-group-no-border">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="la la-lock text-white" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={password}
                    onChange={this.changePassword}
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="bg-widget auth-widget-footer">
                <Button
                  type="submit"
                  color="danger"
                  className="auth-btn"
                  size="sm"
                  style={{ color: '#fff' }}
                >
                  <span className="auth-btn-circle" style={{ marginRight: 8 }}>
                    <i className="la la-caret-right" />
                  </span>
                  {isFetching ? 'Loading...' : 'Login'}
                </Button>

                <p className="widget-auth-info mt-4">
                  {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
                  {"Don't have an account? Sign up now!"}
                </p>

                <Link className="d-block text-center mb-4" to="register">
                  Create an Account
                </Link>

                <div className="social-buttons">
                  <Button color="primary" className="social-button">
                    <i className="social-icon social-google" />
                    <p className="social-text">GOOGLE</p>
                  </Button>

                  <Button color="success" className="social-button">
                    <i
                      className="social-icon social-microsoft"
                      style={{ backgroundImage: `url(${microsoft})` }}
                    />
                    <p className="social-text" style={{ color: '#fff' }}>
                      MICROSOFT
                    </p>
                  </Button>
                </div>
              </div>
            </form>
          </Widget>
        </Container>

        <footer className="auth-footer">
          2020 &copy; Light Blue Template - React Admin Dashboard Template.
        </footer>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
