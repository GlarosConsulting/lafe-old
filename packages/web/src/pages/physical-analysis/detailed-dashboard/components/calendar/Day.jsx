/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody, Tooltip } from 'reactstrap';

import s from './Calendar.module.scss';

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverShow: false,
      tooltipShow: false,
    };
  }

  togglePopover = () => {
    const { popoverShow } = this.state;

    this.setState({ popoverShow: !popoverShow });
  };

  toggleTooltip = () => {
    const { tooltipShow } = this.state;

    this.setState({ tooltipShow: !tooltipShow });
  };

  render() {
    const { day, selected } = this.props;
    const { tooltipShow, popoverShow } = this.state;

    return (
      <div
        className={`${s.day}${day.isToday ? ` ${s.today}` : ''}${
          day.isCurrentMonth ? '' : ` ${s.differentMonth}`
        }${day.date.isSame(selected) ? ` ${s.selected}` : ''}${
          day.hasEvents ? ` ${s.hasEvents}` : ''
        }`}
      >
        {!day.hasEvents ? (
          <div className={s.dayNumber}>{day.number}</div>
        ) : day.hasEvents && day.link ? (
          <>
            <a
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={this.toggleTooltip}
              onMouseOut={this.toggleTooltip}
              onBlur={this.toggleTooltip}
              id={`Tooltip${day.number}`}
              href={day.link ? day.link : '#'}
              className={s.dayNumber}
            >
              {day.number}
              {day.itemStyle ? (
                <span
                  style={{ backgroundColor: `${day.itemStyle}` }}
                  className={s.calendarDot}
                />
              ) : (
                ''
              )}
            </a>

            <Tooltip
              placement="top"
              isOpen={tooltipShow}
              toggle={this.toggleTooltip}
              target={`Tooltip${day.number}`}
            >
              {day.title}
            </Tooltip>
          </>
        ) : day.hasEvents && !day.link ? (
          <>
            <div
              id={`Popover${day.number}`}
              className={s.dayNumber}
              onClick={this.togglePopover}
              onKeyDown={this.togglePopover}
              role="button"
              tabIndex={0}
            >
              {day.number}
              {day.itemStyle ? (
                <span
                  style={{ backgroundColor: `${day.itemStyle}` }}
                  className={s.calendarDot}
                />
              ) : (
                ''
              )}
            </div>

            <Popover
              placement="top"
              isOpen={popoverShow}
              target={`Popover${day.number}`}
              toggle={this.togglePopover}
            >
              <PopoverHeader>{day.title}</PopoverHeader>
              <PopoverBody>{day.info}</PopoverBody>
            </Popover>
          </>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Day;
