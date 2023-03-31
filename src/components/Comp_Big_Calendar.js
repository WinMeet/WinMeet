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
    fetch("http://localhost:3001/createMeeting/all")
      .then((response) => response.json())
      .then((data) => {
        const fetchedEvents = data.eventData.map((item) => ({
          id: item._id,
          title: item.eventName,
          allDay: false,
          start: new Date(item.eventStartDate),
          end: new Date(item.eventEndDate),
        }));
        setEvents(fetchedEvents);
      })
      .catch((error) => console.error(error));
  }, []);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventData, setEventData] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event.id);
    setEventData(event);
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
          header={eventData && <span>{eventData.title}</span>}
          visible={visible}
          onHide={hideDialog}
        >
          {eventData && (
            <div>
              <p>{eventData.title}</p>
              <p>{eventData.start.toLocaleString()}</p>
              <p>{eventData.end.toLocaleString()}</p>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default Bigcalendar;
