import React, { Component } from "react";
//import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Bigcalendar extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    const events = [
      {
        id: 15,
        title: "Point in Time Event",
        start: now,
        end: now,
      },
      {
        id: 15,
        title: "Point in Time Event",
        start: now,
        end: now,
      },
      {
        id: 15,
        title: "Point in Time Event",
        start: now,
        end: now,
      },
    ];
    this.state = {
      name: "React",
      events,
    };
  }

  render() {
    return (
      <div>
        <div style={{ height: "500pt" }}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

export default Bigcalendar;
