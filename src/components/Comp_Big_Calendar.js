import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "primereact/dialog";

const localizer = momentLocalizer(moment);
var fetchedItems = [];
const Bigcalendar = () => {
  const [event, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const events = [];
  const promiseThen = new Promise((resolve, reject) => {
    fetch("http://localhost:3001/createMeeting/all")
      .then((response) => resolve(response.json()))
      .then((data) => setEvents(data))
      .catch((error) => reject(error));
  })
    .then((val) =>
      val.eventData.forEach((element) => {
        //console.log(element._id);
        fetchedItems.push(element);
      })
    )
    .catch((rej) => console.log(rej));

  /*useEffect(() => {
    // Fetch events data from database
    fetch("http://localhost:3001/createMeeting/all")
      .then((response) => console.log(response.json()))
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);*/

  const now = new Date();
  if (fetchedItems.length > 0) {
    for (var i = 0; i < fetchedItems.length; i++) {
      console.log(fetchedItems[0]);

      console.log("events: " + events);
      events.push({
        id: fetchedItems[i]._id,
        title: fetchedItems[i].eventDescription,
        allDay: false,
        start: fetchedItems[i].eventStartDate,
        end: fetchedItems[i].eventEndDate,
      });
      // console.dir("events: " + setEvents);
    }
  }
  console.log(events);
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
          header="Event Details"
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
