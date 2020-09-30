import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import {
  Container,
  Alert,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
} from 'reactstrap';

import PropTypes from 'prop-types';

import { registerUser, registerError } from '../../actions/register';
import Widget from '../../components/Widget';
import microsoft from '../../images/microsoft.png';
import Login from '../login';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.doRegister = this.doRegister.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  changeConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  checkPassword() {
    const { dispatch } = this.props;
    const { password } = this.state;

    if (!this.isPasswordValid()) {
      if (!password) {
        dispatch(registerError('Password field is empty'));
      } else {
        dispatch(registerError('Passwords are not equal'));
      }
      setTimeout(() => {
        dispatch(registerError());
      }, 3 * 1000);
    }
  }

  isPasswordValid() {
    const { password, confirmPassword } = this.state;

    return password && password === confirmPassword;
  }

  doRegister(e) {
    e.preventDefault();

    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    if (!this.isPasswordValid()) {
      this.checkPassword();
    } else {
      dispatch(
        registerUser({
          creds: {
            email,
            password,
          },
          history,
        }),
      );
    }
  }

  render() {
    const { location, isFetching, errorMessage } = this.props;
    const { email, password, confirmPassword } = this.state;

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
            <p className="widget-auth-info">Please fill all fields below.</p>

            <form onSubmit={this.doRegister}>
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

              <FormGroup>
                <Label for="confirmPassword">Confirm</Label>
                <InputGroup className="input-group-no-border">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="la la-lock text-white" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="confirmPassword"
                    className="input-transparent pl-3"
                    value={confirmPassword}
                    onChange={this.changeConfirmPassword}
                    onBlur={this.checkPassword}
                    type="password"
                    required
                    name="confirmPassword"
                    placeholder="Confirm"
                  />
                </InputGroup>
              </FormGroup>

              <div className="bg-widget-transparent auth-widget-footer">
                <Button
                  type="submit"
                  color="danger"
                  className="auth-btn"
                  size="sm"
                  style={{ color: '#fff' }}
                >
                  {isFetching ? 'Loading...' : 'Register'}
                </Button>

                <p className="widget-auth-info mt-4">
                  Already have the account? Login now!
                </p>

                <Link className="d-block text-center mb-4" to="login">
                  Enter the account
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
          2020 &copy; Sing App - React Admin Dashboard Template.
        </footer>
      </div>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isFetching: state.register.isFetching,
    errorMessage: state.register.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
