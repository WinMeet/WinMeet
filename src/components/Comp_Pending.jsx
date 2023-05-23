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

  const handleButtonClick = (id, index) => {
    console.log(`Button was clicked! ID: ${id}, Index: ${index}`);

    const token = getToken();
    const decoded = jwt_decode(token);
    console.log(id);
    fetch(
      `http://localhost:3002/createMeeting/pending/${id}/${decoded.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fieldToIncrement: index,
        }),
      }
    )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  };

  useEffect(() => {
    const token = getToken();
    const decoded = jwt_decode(token);
    const data = { eventOwner: decoded.email };

    fetch(BASE_URL + "/createMeeting/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const fetchedEvents = data.combined.map((item) => {
          const token = getToken();
          const decoded = jwt_decode(token);
          console.log(item.voters);
          console.log(!item.voters.includes(decoded.email));
          if (item.isPending && !item.voters.includes(decoded.email)) {
            // Change this line
            return {
              id: item._id,
              title: item.eventName,
              description: item.eventDescription,
              location: item.location,
              eventVoteDuration: new Date(item.eventVoteDuration),
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

  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
          {/* accordion starts */}
          <div className="card">
            <Accordion multiple activeIndex={[0]}>
              {/* Map over the events and render AccordionTab components */}
              {events.map((event, index) => (
                <AccordionTab key={event.id} header={event.title}>
                  {/* Event vote starts */}
                  <div className="grid">
                    {/* Check for each date range and render a card if not null */}
                    {event.start && event.end && (
                      <div className="card flex col-4 col_offset-1 justify-content-center">
                        <Card
                          title={`Date 1`}
                          footer={
                            <div className="flex flex-wrap justify-content-end gap-2">
                              <Button
                                label="Vote"
                                icon="pi pi-check"
                                onClick={() => handleButtonClick(event.id, 0)}
                              />
                            </div>
                          }
                          className="md:w-25rem"
                        >
                          <p className="mt-3">
                            {"Start Date: " + event.start.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"End Date: " + event.end.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"Vote Due Date: " +
                              event.eventVoteDuration.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"Location: " + event.location}
                          </p>
                          {event.eventDescription && (
                            <p className="mt-3">
                              {"Event Description: " + event.eventDescription}
                            </p>
                          )}
                        </Card>
                      </div>
                    )}
                    {event.eventStartDate2 && event.eventEndDate2 && (
                      <div className="card flex col-4 col_offset-1 justify-content-center">
                        <Card
                          title={`Date 2`}
                          footer={
                            <div className="flex flex-wrap justify-content-end gap-2">
                              <Button
                                label="Vote"
                                icon="pi pi-check"
                                onClick={() => handleButtonClick(event.id, 1)}
                              />
                            </div>
                          }
                          className="md:w-25rem"
                        >
                          <p className="mt-3">
                            {"Start Date: " +
                              event.eventStartDate2.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"End Date: " +
                              event.eventEndDate2.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"Vote Due Date: " +
                              event.eventVoteDuration.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"Location: " + event.location}
                          </p>
                          {event.eventDescription && (
                            <p className="mt-3">
                              {"Event Description: " + event.eventDescription}
                            </p>
                          )}
                        </Card>
                      </div>
                    )}
                    {event.eventStartDate3 && event.eventEndDate3 && (
                      <div className="card flex col-4 col_offset-1 justify-content-center">
                        <Card
                          title={`Date 3`}
                          footer={
                            <div className="flex flex-wrap justify-content-end gap-2">
                              <Button
                                label="Vote"
                                icon="pi pi-check"
                                onClick={() => handleButtonClick(event.id, 2)}
                              />
                            </div>
                          }
                          className="md:w-25rem"
                        >
                          <p className="mt-3">
                            {"Start Date: " +
                              event.eventStartDate3.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"End Date: " +
                              event.eventEndDate3.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"Vote Due Date: " +
                              event.eventVoteDuration.toLocaleString()}
                          </p>
                          <p className="mt-3">
                            {"Location: " + event.location}
                          </p>
                          {event.eventDescription && (
                            <p className="mt-3">
                              {"Event Description: " + event.eventDescription}
                            </p>
                          )}
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
