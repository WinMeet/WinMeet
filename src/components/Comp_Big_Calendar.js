import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "primereact/dialog";

const localizer = momentLocalizer(moment);

const Bigcalendar = () => {
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fetch events data from database
    fetch("http://localhost3001/createMeeting/all")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  const now = new Date();

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const handleSelectEvent = (event) => {
    showDialog();
  };

  return (
    <div>
      <div style={{ height: "500pt" }}>
        <Calendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
        />
        <Dialog
          style={{ width: "40vw" }}
          header="Event Details"
          visible={visible}
          onHide={hideDialog}
        ></Dialog>
      </div>
    </div>
  );
};

export default Bigcalendar;
