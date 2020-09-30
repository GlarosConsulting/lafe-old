import React from 'react';
import { toast } from 'react-toastify';
import { Row, Col, Button } from 'reactstrap';

import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4';

import Widget from '../../components/Widget';
import s from './Notifications.module.scss';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
      },
    };
  }

  componentDidMount() {
    toast.success('Thanks for checking out Messenger!', {
      position: 'bottom-right',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  addSuccessNotification = () => {
    const { options } = this.state;

    return toast.success('Showing success message was successful!', options);
  };

  toggleLocation = location => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        position: location,
      },
    }));
  };

  addInfoNotification = () => {
    const { options } = this.state;

    const id = uuid();

    toast.info(
      <div>
        Launching thermonuclear war...
        <Button
          onClick={() => this.launchNotification(id)}
          outline
          size="xs"
          className="width-100 mb-xs mr-xs mt-1"
        >
          Cancel launch
        </Button>
      </div>,
      { ...options, toastId: id },
    );
  };

  launchNotification = id => {
    const { options } = this.state;

    return toast.update(id, {
      ...options,
      render: 'Thermonuclear war averted',
      type: toast.TYPE.SUCCESS,
    });
  };

  addErrorNotification = () => {
    const id = uuid();

    const { options } = this.state;

    toast.error(
      <div>
        Error destroying alien planet
        <br />
        <Button
          onClick={() => this.retryNotification(id)}
          outline
          size="xs"
          className="width-100 mb-xs mr-xs mt-1"
        >
          Retry
        </Button>
      </div>,
      { ...options, toastId: id },
    );
  };

  retryNotification = id => {
    const { options } = this.state;

    return toast.update(id, {
      ...options,
      render: 'Alien planet destroyed!',
      type: toast.TYPE.SUCCESS,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span>Messages -</span>
          <span className="fw-semi-bold">Notifications</span>
        </h1>

        <Widget title={<h6> Messenger </h6>} close collapse settings>
          <Row>
            <Col lg="4" xs="12">
              <h5 className="m-t-1">Layout options</h5>

              <p>
                There are few position options available for notifications. You
                can click any of them to change notifications position:
              </p>

              <div className="location-selector">
                <div
                  className="bit top left"
                  aria-label="Bit top left"
                  onClick={() => {
                    this.toggleLocation('top-left');
                  }}
                  onKeyDown={() => {
                    this.toggleLocation('top-left');
                  }}
                  role="button"
                  tabIndex={0}
                />

                <div
                  className="bit top right"
                  aria-label="Bit top right"
                  onClick={() => {
                    this.toggleLocation('top-right');
                  }}
                  onKeyDown={() => {
                    this.toggleLocation('top-right');
                  }}
                  role="button"
                  tabIndex={0}
                />

                <div
                  className="bit top"
                  aria-label="Bit top"
                  onClick={() => {
                    this.toggleLocation('top-center');
                  }}
                  onKeyDown={() => {
                    this.toggleLocation('top-center');
                  }}
                  role="button"
                  tabIndex={0}
                />

                <div
                  className="bit bottom left"
                  aria-label="Bit bottom left"
                  onClick={() => {
                    this.toggleLocation('bottom-left');
                  }}
                  onKeyDown={() => {
                    this.toggleLocation('bottom-left');
                  }}
                  role="button"
                  tabIndex={0}
                />

                <div
                  className="bit bottom right"
                  aria-label="Bit bottom right"
                  onClick={() => {
                    this.toggleLocation('bottom-left');
                  }}
                  onKeyDown={() => {
                    this.toggleLocation('bottom-left');
                  }}
                  role="button"
                  tabIndex={0}
                />

                <div
                  className="bit bottom"
                  aria-label="Bit bottom"
                  onClick={() => {
                    this.toggleLocation('bottom-center');
                  }}
                  onKeyDown={() => {
                    this.toggleLocation('bottom-center');
                  }}
                  role="button"
                  tabIndex={0}
                />
              </div>
            </Col>

            <Col lg="4" xs="12">
              <h5 className="m-t-1">Notification Types</h5>

              <p>
                Different types of notifications for lost of use cases. Custom
                classes are also supported.
              </p>

              <p>
                <Button
                  color="info"
                  id="show-info-message"
                  onClick={this.addInfoNotification}
                >
                  Info Message
                </Button>
              </p>

              <p>
                <Button
                  color="danger"
                  id="show-error-message"
                  onClick={this.addErrorNotification}
                >
                  Error + Retry Message
                </Button>
              </p>

              <p>
                <Button
                  color="success"
                  id="show-success-message"
                  onClick={this.addSuccessNotification}
                >
                  Success Success Success Message
                </Button>
              </p>
            </Col>

            <Col lg="4" xs="12">
              <h5 className="m-t-1">Dead Simple Usage</h5>

              <p>
                Just few lines of code to instantiate a notifications object.
                Does not require passing any options:
              </p>

              <pre className={s.notificationsCode}>
                <code>toast(Thanks for checking out Messenger!);</code>
              </pre>

              <p>More complex example:</p>

              <pre className={s.notificationsCode}>
                <code>
                  {
                    "\ntoast.success( 'There was an explosion while processing your request.', { \n position: location,\n autoClose: 5000, \n hideProgressBar: false, \n closeOnClick: true,\n pauseOnHover: true, \n draggable: true \n});\n\n"
                  }
                </code>
              </pre>
            </Col>
          </Row>
        </Widget>
      </div>
    );
  }
}

export default Notifications;
