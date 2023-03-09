import axios from "axios";
import * as Yup from "yup";
import React from "react";
import moment from "moment";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import { Chips } from "primereact/chips";
import { FileUpload } from "primereact/fileupload";
import { Menubar } from "primereact/menubar";
import { Message } from "primereact/message";

const CompDashboard = () => {
  function navigateToRoute(route, e) {
    e.preventDefault();
    window.location.href = route;
  }

  const showFailure = () => {
    Toast.current.show({
      severity: "error",
      summary: "Failed",
      detail:
        "An error occured while creating meeting please check your information",
      life: 3000,
    });
  };

  const showSuccess = () => {
    Toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Event successfully created and send to participants",
      life: 3000,
    });
  };

  const start = (
    <Button
      className="text-4xl"
      label="WinMeet"
      text
      onClick={(e) => navigateToRoute("/dashboard", e)}
    />
  );
  const end = (
    <div className="flex gap-3">
      <Button
        onClick={(e) => navigateToRoute("/dashboard", e)}
        label="Home"
        icon="pi pi-home"
      />
      <Button
        // TODO : Implement help
        onClick={(e) => navigateToRoute()}
        label="Help"
        icon="pi pi-question-circle"
      />
      <Button
        // TODO : Implement account
        onClick={(e) => navigateToRoute()}
        label="Account"
        icon="pi pi-user"
      />
      <Button
        // TODO : Implement help
        onClick={(e) => navigateToRoute()}
        label="Log Out"
        icon="pi pi-sign-out"
      />
    </div>
  );

  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventDescription: "",
      eventStartDate: new Date(),
      eventFinishDate: "",
      eventDuration: "",
      participants: [],
    },
    validationSchema: Yup.object({
      eventName: Yup.string()
        .min(3, "Event name must be at least 3 characters")
        .required("Event name is required"),

      eventDescription: Yup.string().optional(),

      eventStartDate: Yup.date()
        .min(new Date(), "Invalid Date-Time")
        .required("Event Date-Time is required"),

      eventDuration: Yup.number()
        .min(10, "Duration must be at least 10 minutes")
        .max(300, "Duration must not exceed 300 minutes")
        .required("Duration is required"),

      participants: Yup.array()
        .of(
          Yup.string()
            .email("Enter a valid email")
            .required("Participant list cannot be empty")
        )
        .min(1, "Include at least one participant."),
    }),

    onSubmit: async (values) => {
      try {
        // TODO: Remove
        alert(JSON.stringify(values, null, 2));
        const response = await axios.post("localhost:8080/api/createEvent", {
          eventName: values.eventName,
          eventDescription: values.eventDescription,
          eventStartDate: values.eventStartDate,
          eventFinishDate: moment(values.eventStartDate)
            .add(values.eventDuration, "m")
            .toDate(),
          eventDuration: values.eventDuration,
          participants: values.participants,
        });
        showSuccess();
        const data = await response.json();
        alert(JSON.stringify(data, null, 2));
      } catch (error) {
        showFailure();
        console.error(error);
      }
    },
  });

  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <Menubar className="bg-transparent" start={start} end={end} />
          <div className="pt-6">
            <TabView>
              <TabPanel header="Events" leftIcon="pi pi-calendar mr-2">
                <p className="m-0">1</p>
              </TabPanel>
              <TabPanel
                header="Scheduled Events"
                leftIcon="pi pi-calendar-times mr-2"
              >
                <p className="m-0">2</p>
              </TabPanel>
              <TabPanel header="Creat New Event" leftIcon="pi pi-plus mr">
                <form onSubmit={formik.handleSubmit}>
                  <Card className="shadow-6">
                    <div className="text-4xl">Event Details</div>
                    <div className="flex mt-2">
                      <div className="card flex flex-column gap-2">
                        <label htmlFor="eventName">Event Name</label>
                        <InputText
                          name="eventName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.eventName}
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      {formik.touched.eventName && formik.errors.eventName ? (
                        <Message
                          severity="error"
                          text={formik.errors.eventName}
                        />
                      ) : null}
                    </div>

                    <div className="flex mt-2">
                      <div className="card flex flex-column gap-2">
                        <label htmlFor="eventName"> Event Description</label>
                        <InputTextarea
                          name="eventDescription"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.eventDescription}
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      {formik.touched.eventDescription &&
                      formik.errors.eventDescription ? (
                        <Message
                          severity="error"
                          text={formik.errors.eventDescription}
                        />
                      ) : null}
                    </div>
                  </Card>

                  {/**Inputs Start*/}

                  <Card className="mt-4 shadow-6">
                    <div className="text-4xl">Event Date & Time</div>
                    <div className="flex mt-2">
                      <div className="card flex flex-column gap-2">
                        <label htmlFor="eventStartDate">
                          Event Date & Time
                        </label>
                        <Calendar
                          name="eventStartDate"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.eventStartDate}
                          showTime
                        />
                      </div>
                    </div>
                    <div className="card flex justify-content-start pt-2 text-red-500">
                      {formik.touched.eventStartDate &&
                      formik.errors.eventStartDate ? (
                        <Message
                          severity="error"
                          text={formik.errors.eventStartDate}
                        />
                      ) : null}
                    </div>
                    <div className="flex mt-2">
                      <div className="card flex flex-column gap-2">
                        <label htmlFor="eventDuration"> Event Duration</label>
                        <InputText
                          name="eventDuration"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.eventDuration}
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      {formik.touched.eventDuration &&
                      formik.errors.eventDuration ? (
                        <Message
                          severity="error"
                          text={formik.errors.eventDuration}
                        />
                      ) : null}
                    </div>
                  </Card>
                  <Card className="shadow-6 mt-4">
                    <div className="text-4xl">Participants</div>
                    <div className="grid">
                      <div className="col-5">
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
                          <Message
                            severity="error"
                            text={formik.errors.participants}
                          />
                        ) : null)}
                    </div>
                  </Card>
                  <Card className="shadow-6 mt-4">
                    <div className="text-4xl">Documents</div>
                    <div>
                      <p>Upload File</p>
                    </div>
                    <div className="card">
                      <FileUpload
                        name="uploadFile"
                        url={"/api/upload"}
                        multiple
                        accept="image,pdf/*"
                        maxFileSize={1000000}
                        emptyTemplate={
                          <p className="m-0">
                            Drag and drop files to here to upload.
                          </p>
                        }
                      />
                    </div>
                  </Card>
                  <div className="grid justify-content-center pt-4">
                    <div className="flex col-5">
                      <Toast
                        // TODO : Move to onsubmit
                        ref={Toast}
                        position="bottom-right"
                      />
                      <Button
                        className="flex-1"
                        label="Create Event"
                        type="submit"
                        severity="success"
                        size="lg"
                      />
                    </div>
                  </div>
                </form>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompDashboard;
