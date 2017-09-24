import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/index.scss';

BigCalendar.momentLocalizer(moment);

class CalendarPage extends React.Component {
  render() {
    const myEventsList = [];
    return (
      <div id="calendarDiv" className="calendar-div">
        <BigCalendar
          events={myEventsList}
          startAccessor="startDate"
          endAccessor="endDate"
        />
      </div>
    );
  }
}

export default CalendarPage;
