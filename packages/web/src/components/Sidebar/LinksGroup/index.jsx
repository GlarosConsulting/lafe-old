import React, { Component } from 'react';
import { Route } from 'react-router';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Badge } from 'reactstrap';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import s from './LinksGroup.module.scss';

class LinksGroup extends Component {
  constructor(props) {
    super(props);
    this.togglePanelCollapse = this.togglePanelCollapse.bind(this);

    this.state = {
      headerLinkWasClicked: true,
    };
  }

  togglePanelCollapse(link, e) {
    const { onActiveSidebarItemChange, activeItem, index } = this.props;
    const { headerLinkWasClicked } = this.state;

    onActiveSidebarItemChange(link);
    this.setState({
      headerLinkWasClicked:
        !headerLinkWasClicked || (activeItem && !activeItem.includes(index)),
    });
    e.preventDefault();
  }

  render() {
    const {
      activeItem,
      index,
      exact,
      childrenLinks,
      isHeader,
      className,
      link,
      target,
      iconName,
      header,
      label,
      labelColor,
      badge,
      deep,
      onActiveSidebarItemChange,
    } = this.props;
    const { headerLinkWasClicked } = this.state;

    const isOpen =
      activeItem && activeItem.includes(index) && headerLinkWasClicked;

    if (!childrenLinks) {
      if (isHeader) {
        return (
          <li className={[s.headerLink, className].join(' ')}>
            <NavLink
              to={link}
              activeClassName={s.headerLinkActive}
              exact={exact}
              target={target}
            >
              <span className={s.icon}>
                <i className={`fi ${iconName}`} />
              </span>

              {header}

              {label && (
                <sup
                  className={`${s.headerLabel} text-${labelColor || 'warning'}`}
                >
                  {label}
                </sup>
              )}

              {badge && (
                <Badge className={s.badge} color="primary" pill>
                  9
                </Badge>
              )}
            </NavLink>
          </li>
        );
      }

      return (
        <li>
          <NavLink
            to={link}
            activeClassName={s.headerLinkActive}
            style={{ paddingLeft: `${36 + 10 * (deep - 1)}px` }}
            onClick={e => {
              // able to go to link is not available(for Demo)
              if (link.includes('menu')) {
                e.preventDefault();
              }
            }}
            exact={exact}
          >
            {header}

            {label && (
              <sup
                className={`${s.headerLabel} text-${labelColor || 'warning'}`}
              >
                {label}
              </sup>
            )}
          </NavLink>
        </li>
      );
    }

    return (
      <Route
        path={link}
        // eslint-disable-next-line react/no-children-prop
        children={params => {
          const { match } = params;

          return (
            <li className={classnames({ [s.headerLink]: isHeader }, className)}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={classnames(
                  s.accordionToggle,
                  { [s.headerLinkActive]: match },
                  { [s.collapsed]: isOpen },
                  'd-flex',
                )}
                style={{
                  paddingLeft: `${deep === 0 ? 20 : 35 + 10 * (deep - 1)}px`,
                }}
                onClick={e => this.togglePanelCollapse(link, e)}
                onKeyDown={e => this.togglePanelCollapse(link, e)}
                role="button"
                tabIndex={0}
              >
                {isHeader ? (
                  <span className={s.icon}>
                    <i className={`fi ${iconName}`} />
                  </span>
                ) : null}

                {header}

                {label && (
                  <sup
                    className={`${s.headerLabel} text-${
                      labelColor || 'warning'
                    } ml-1`}
                  >
                    {label}
                  </sup>
                )}
                <b className={['fa fa-angle-left', s.caret].join(' ')} />
              </a>

              <Collapse className={s.panel} isOpen={isOpen}>
                <ul>
                  {childrenLinks &&
                    childrenLinks.map((child, ind) => (
                      <LinksGroup
                        onActiveSidebarItemChange={onActiveSidebarItemChange}
                        activeItem={activeItem}
                        header={child.header}
                        link={child.link}
                        index={child.index}
                        childrenLinks={child.childrenLinks}
                        deep={deep + 1}
                        key={ind} // eslint-disable-line react/no-array-index-key
                      />
                    ))}
                </ul>
              </Collapse>
            </li>
          );
        }}
      />
    );
  }
}

LinksGroup.propTypes = {
  header: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  childrenLinks: PropTypes.arrayOf(PropTypes.object),
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  badge: PropTypes.string.isRequired,
  label: PropTypes.string,
  activeItem: PropTypes.string,
  isHeader: PropTypes.bool,
  index: PropTypes.string.isRequired,
  deep: PropTypes.number,
  onActiveSidebarItemChange: PropTypes.func.isRequired,
  labelColor: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

LinksGroup.defaultProps = {
  childrenLinks: null,
  className: '',
  isHeader: false,
  deep: 0,
  activeItem: '',
  label: '',
  exact: true,
};

export default withRouter(LinksGroup);
