import React, { Component } from 'react';

import moment from 'moment/moment';
import uuid from 'uuid/v4';

import s from './Calendar.module.scss';
import DayNames from './DayNames';
import Week from './Week';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: moment(),
      selectedDay: moment().startOf('day'),
      selectedMonthEvents: [
        {
          title: 'The flower bed',
          info: 'Contents here',
          itemStyle: '#1870dc',
          date: moment(
            `${moment().year()}-${moment().month() + 1}-02`,
            'YYYY-MM-DD',
          ),
        },
        {
          title: 'Stop world water pollution',
          info: 'Have a kick off meeting with .inc company',
          itemStyle: '#f0b518',
          date: moment(
            `${moment().year()}-${moment().month() + 1}-05`,
            'YYYY-MM-DD',
          ),
        },
        {
          title: 'Light Blue Template 1.0.0 release',
          info: 'Some contents here',
          itemStyle: '#58d777',
          date: moment(
            `${moment().year()}-${moment().month() + 1}-18`,
            'YYYY-MM-DD',
          ),
        },
        {
          title: 'A link',
          info: '',
          itemStyle: '#f45722',
          link: 'http://www.flatlogic.com',
          date: moment(
            `${moment().year()}-${moment().month() + 1}-29`,
            'YYYY-MM-DD',
          ),
        },
      ],
    };
  }

  previous = () => {
    const { selectedMonth } = this.state;

    this.setState({
      selectedMonth: selectedMonth.subtract(1, 'month'),
    });
  };

  next = () => {
    const { selectedMonth } = this.state;

    this.setState({
      selectedMonth: selectedMonth.add(1, 'month'),
    });
  };

  renderMonthLabel = () => {
    const { selectedMonth } = this.state;

    return (
      <span className={`${s.calendarItemContainer} ${s.monthLabel}`}>
        {selectedMonth.format('MMMM YYYY')}
      </span>
    );
  };

  renderWeeks = () => {
    const { selectedMonth, selectedDay, selectedMonthEvents } = this.state;

    const currentMonthView = selectedMonth;
    const currentSelectedDay = selectedDay;

    const weeks = [];
    let done = false;
    const previousCurrentNextView = currentMonthView
      .clone()
      .startOf('month')
      .subtract(1, 'd')
      .day('Sunday');
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          key={uuid()}
          selectedMonthEvents={selectedMonthEvents}
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          selected={currentSelectedDay}
        />,
      );

      previousCurrentNextView.add(1, 'w');
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }

    return weeks;
  };

  render() {
    return (
      <div className={`${s.calendarRectangle}`}>
        <div>
          <section className={`${s.mainCalendar}`}>
            <header className={`${s.calendarHeader}`}>
              <div className={`${s.calendarRow} ${s.titleHeader}`}>
                <i
                  className={`${s.calendarItemContainer} ${s.arrow} la la-arrow-left`}
                  aria-label="Arrow left"
                  onClick={this.previous}
                  onKeyDown={this.previous}
                  role="button"
                  tabIndex={0}
                />

                <div className={`${s.calendarItemContainer} ${s.headerText}`}>
                  {this.renderMonthLabel()}
                </div>

                <i
                  className={`${s.calendarItemContainer} ${s.arrow} la la-arrow-right`}
                  aria-label="Arrow right"
                  onClick={this.next}
                  onKeyDown={this.next}
                  role="button"
                  tabIndex={0}
                />
              </div>

              <DayNames />
            </header>

            <div className={`${s.daysContainer}`}>{this.renderWeeks()}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Calendar;
