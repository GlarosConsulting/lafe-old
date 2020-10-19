import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoToSignUp = this.handleGoToSignUp.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    await dispatch(loginUser({ email, password }, history));
  }

  handleGoToSignUp() {
    const { history } = this.props;

    history.push('/register');
  }

  render() {
    const { location, isAuthenticated, isFetching, errorMessage } = this.props;
    const { email, password } = this.state;

    const { from } = location.state || {
      from: { pathname: '/app' },
    };

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className="auth-page">
        <Container>
          <Widget
            className="widget-auth mx-auto"
            title={<h3 className="mt-0">Login</h3>}
          >
            <p className="widget-auth-info">
              Use seu e-mail para fazer o login
            </p>

            <form onSubmit={this.handleSubmit}>
              {errorMessage && (
                <Alert
                  className="alert-sm widget-middle-overflow rounded-0 mt-3"
                  color="danger"
                >
                  {errorMessage}
                </Alert>
              )}

              <FormGroup className="mt">
                <Label for="email">E-mail</Label>

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
                    onChange={this.handleChangeEmail}
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
                    onChange={this.handleChangePassword}
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="bg-widget auth-widget-footer mb-3">
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
              </div>
            </form>
          </Widget>
        </Container>

        <footer className="auth-footer">
          2020 &copy; Lafe - Glaros Comércio e Assessoria
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
