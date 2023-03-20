import React, { Component } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "primereact/dialog";

const localizer = momentLocalizer(moment);

class Bigcalendar extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    const events = [
      {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2023, 2, 25),
        end: new Date(2023, 2, 30),
      },
    ];
    this.state = {
      name: "React",
      events,
      visible: false,
    };
  }

  showDialog = () => {
    this.setState({ visible: true });
  };

  hideDialog = () => {
    this.setState({ visible: false });
  };

  handleSelectEvent = (event) => {
    this.showDialog();
  };

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
            onSelectEvent={this.handleSelectEvent}
          />
          <Dialog
            style={{ width: "40vw" }}
            header="Event Details"
            visible={this.state.visible}
            onHide={this.hideDialog}
          ></Dialog>
        </div>
      </div>
    );
  }
}

export default Bigcalendar;
