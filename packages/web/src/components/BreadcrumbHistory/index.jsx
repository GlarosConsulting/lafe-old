import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import uuid from 'uuid/v4';

class BreadcrumbHistory extends Component {
  renderBreadCrumbs = () => {
    const { url } = this.props;

    const route = url
      .split('/')
      .slice(1)
      .map(item =>
        item
          .split('-')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join(' '),
      );

    const { length } = route;

    return route.map((item, index) =>
      length === index + 1 ? (
        <BreadcrumbItem key={uuid()} className="active">
          <strong>{item}</strong>
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem key={uuid()}>{item}</BreadcrumbItem>
      ),
    );
  };

  render() {
    const { url } = this.props;

    return (
      <>
        {url !== '/app/chat' ? (
          <div>
            <Breadcrumb tag="nav" listTag="div">
              {this.renderBreadCrumbs()}
            </Breadcrumb>
          </div>
        ) : null}
      </>
    );
  }
}

export default BreadcrumbHistory;
