import React, { useEffect, useState } from "react";
import "my.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import AuthenticatedNavbar from "components/AuthenticatedNavbar";
import { Accordion, AccordionTab } from "primereact/accordion";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getToken } from "utils/token_manager";
import jwt_decode from "jwt-decode";

const CompPending = () => {
  const [events, setEvents] = useState([]); // State variable to hold the fetched events

  useEffect(() => {
    const token = getToken();
    const decoded = jwt_decode(token);
    const data = { eventOwner: decoded.email };

    fetch("http://localhost:3002/createMeeting/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const fetchedEvents = data.combined.map((item) => {
          if (item.isPending) {
            // Change this line
            return {
              id: item._id,
              title: item.eventName,
              description: item.eventDescription,
              location: item.location,
              allDay: false,
              start: new Date(item.eventStartDate),
              end: new Date(item.eventEndDate),
              participant: item.participants,
              eventStartDate2: item.eventStartDate2
                ? new Date(item.eventStartDate2)
                : null,
              eventEndDate2: item.eventEndDate2
                ? new Date(item.eventEndDate2)
                : null,
              eventStartDate3: item.eventStartDate3
                ? new Date(item.eventStartDate3)
                : null,
              eventEndDate3: item.eventEndDate3
                ? new Date(item.eventEndDate3)
                : null,
            };
          }
          return null;
        });
        setEvents(fetchedEvents.filter((event) => event !== null));
      })
      .catch((error) => console.error(error));
  }, []);

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Vote" icon="pi pi-check" />
    </div>
  );

  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
          {/* accordion starts */}
          <div className="card">
            <Accordion multiple activeIndex={[0]}>
              {/* Map over the events and render AccordionTab components */}
              {events.map((event) => (
                <AccordionTab key={event.id} header={event.title}>
                  {/* Event vote starts */}
                  <div className="grid">
                    {/* Check for each date range and render a card if not null */}
                    {event.start && event.end && (
                      <div className="card flex col-4 col_offset-1 justify-content-center">
                        <Card
                          title={`${event.title} - Date 1`}
                          subTitle={event.description}
                          footer={footer}
                          className="md:w-25rem"
                        >
                          <p className="m-0">{event.location}</p>
                        </Card>
                      </div>
                    )}
                    {event.eventStartDate2 && event.eventEndDate2 && (
                      <div className="card flex col-4 col_offset-1 justify-content-center">
                        <Card
                          title={`${event.title} - Date 2`}
                          subTitle={event.description}
                          footer={footer}
                          className="md:w-25rem"
                        >
                          <p className="m-0">{event.location}</p>
                        </Card>
                      </div>
                    )}
                    {event.eventStartDate3 && event.eventEndDate3 && (
                      <div className="card flex col-4 col_offset-1 justify-content-center">
                        <Card
                          title={`${event.title} - Date 3`}
                          subTitle={event.description}
                          footer={footer}
                          className="md:w-25rem"
                        >
                          <p className="m-0">{event.location}</p>
                        </Card>
                      </div>
                    )}
                  </div>
                </AccordionTab>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompPending;
