import React, { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { Message } from "primereact/message";
import { CreateMeetingRequestModel } from "data/models/create_meeting/create_meeting_request_model";
import { createMeeting } from "data/api/api";
import { getToken } from "utils/token_manager";
import jwt_decode from "jwt-decode";
import { Chips } from "primereact/chips";

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const localizer = momentLocalizer(moment);

const Bigcalendar = () => {
  const toast = useRef(null);
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [secondDialogVisible, setSecondDialogVisible] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState(null);

  const getEventClassName = (event) => {
    const today = new Date();

    if (event.isPending) {
      return "event-pending";
    } else if (event.end < today) {
      return "event-past";
    }

    return "";
  };

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
      .then((remoteData) => {
        console.log(remoteData.combined);
        const fetchedEvents = remoteData.combined.map((item) => {
          let isOwner;
          if (item.eventOwner === data.eventOwner) {
            isOwner = true;
          } else {
            isOwner = false;
          }
          console.log("fdsafafafafafa" + isOwner);
          const event = {
            id: item._id,
            title: item.eventName,
            eventOwner: item.eventOwner,
            description: item.eventDescription,
            location: item.location,
            allDay: false,
            start: new Date(item.eventStartDate),
            end: new Date(item.eventEndDate),
            participant: item.participants,
            isPending: item.isPending,
            isOwner: isOwner,
          };

          event.className = getEventClassName(event); // Assign className based on event status

          return event;
        });

        setEvents(fetchedEvents.filter((event) => event !== null));
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteEvent = (id) => {
    fetch(`http://localhost:3002/createMeeting/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully deleted:", data);
        hideDialog();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };

  const iCannotAttend = (event) => {
    const token = getToken();
    const decoded = jwt_decode(token);

    const data = {
      eventOwner: event.eventOwner,
      eventName: event.title,
      participants: [decoded.email],
    };
    console.log(data);
    fetch(`http://localhost:3002/createMeeting/removeParticipant/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully deleted:", data);
        hideDialog();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };

  const editMeeting = (event) => {
    const data = {
      participants: event.participant,
    };
    console.log(data);
    fetch(`http://localhost:3002/createMeeting/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully deleted:", data);
        hideDialog();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const showSecondDialog = () => {
    setSecondDialogVisible(true);
  };

  const hideSecondDialog = () => {
    setSecondDialogVisible(false);
  };

  const handleSelectEvent = (event) => {
    setSelectedEventData(event);
    showDialog();
  };

  const showFailure = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Failed",
      detail: message,
      life: 3000,
    });
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Event successfully created and sent to participants",
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues: CreateMeetingRequestModel.empty(),
    validationSchema: CreateMeetingRequestModel.validationSchema,
    onSubmit: async (createMeetingRequestModel) => {
      const response = await createMeeting(createMeetingRequestModel);
      if (response.success) {
        showSuccess();
        window.location.reload();
      } else {
        showFailure(response.data);
      }
      console.log(response);
    },
  });

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.isPending
        ? "lightyellow" // Set background color for pending events
        : event.end < new Date()
        ? "lightgray"
        : "#007bff", // Set background color for past events
      color: "black",
      borderRadius: "0px",
      border: "none",
    };
    return {
      style,
    };
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
          eventPropGetter={eventStyleGetter} // Use eventStyleGetter to assign styles to events
        />
        <Dialog
          style={{ width: "40vw" }}
          header={
            selectedEventData && (
              <span>{toTitleCase(selectedEventData.title)}</span>
            )
          }
          visible={visible}
          onHide={hideDialog}
        >
          {selectedEventData && (
            <div className="pt0">
              <h3>Meeting Details</h3>

              <p>{selectedEventData.description}</p>
              <h3>Meeting Location</h3>
              <p>{selectedEventData.location}</p>
              <h3>Meeting Start Time</h3>
              <p>{selectedEventData.start.toLocaleString()}</p>
              <h3>Meeting End Time</h3>
              <p>{selectedEventData.end.toLocaleString()}</p>
              <h3>Meeting Participants</h3>
              {selectedEventData.participant.map((participant, index) => (
                <p key={index}>{participant}</p>
              ))}
            </div>
          )}
          <div className="grid">
            <div className="col-8">
              <div>
                {selectedEventData && !selectedEventData.isOwner && (
                  <Button
                    className="shadow-6"
                    onClick={() =>
                      selectedEventData && iCannotAttend(selectedEventData)
                    }
                    severity="danger"
                    label="I Cannot Attend"
                    size="sm"
                    style={{
                      position: "flex",
                      right: "0%",
                    }}
                  />
                )}
              </div>
            </div>
            <div className="col-4">
              {selectedEventData && selectedEventData.isOwner && (
                <Button
                  className="shadow-6"
                  onClick={showSecondDialog}
                  size="sm"
                  label="Add Participant"
                  icon="pi pi-pencil"
                  style={{
                    position: "flex",
                    bottom: "10%",
                    right: "0%",
                  }}
                />
              )}
            </div>
            <div className="col-8"></div>
            <div className="col-4">
              {selectedEventData && selectedEventData.isOwner && (
                <Button
                  className=" shadow-6"
                  severity="danger"
                  onClick={() =>
                    selectedEventData && deleteEvent(selectedEventData.id)
                  }
                  size="sm"
                  label="Delete Event"
                  icon="pi pi-trash"
                  style={{
                    position: "flex",
                    bottom: "10%",
                    right: "0%",
                  }}
                />
              )}
            </div>
          </div>
        </Dialog>{" "}
        <Dialog
          header={
            selectedEventData && (
              <span>{"Edit " + toTitleCase(selectedEventData.title)}</span>
            )
          }
          visible={secondDialogVisible}
          onHide={hideSecondDialog}
          style={{ width: "40vw" }}
        >
          {/* Remaining code for the second dialog */}
          <div className="text-4xl mt-1">Participants</div>
          <div className="grid">
            <div className="col-8">
              <div className="mt-2">Event Participant's E-mails:</div>
              <div className="card">
                <Chips
                  className="mt-2"
                  name="participants"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.participants}
                />
              </div>
            </div>
          </div>
          <div className="card flex justify-content-start pt-2 text-red-500">
            {formik.touched.participants &&
              (formik.errors.participants &&
              Array.isArray(formik.errors.participants) &&
              formik.errors.participants.length > 0 ? (
                <Message
                  severity="error"
                  text={formik.errors.participants[0]}
                />
              ) : formik.values.participants.length === 0 ? (
                <Message severity="error" text={formik.errors.participants} />
              ) : null)}
          </div>
          <div>
            <Button
              className="shadow-6"
              onClick={() =>
                selectedEventData && editMeeting(selectedEventData)
              }
              size="sm"
              label="Add Participant"
              icon="pi pi-pencil"
              style={{
                position: "flex",
                bottom: "10%",
                right: "0%",
              }}
            />
          </div>
        </Dialog>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default Bigcalendar;
