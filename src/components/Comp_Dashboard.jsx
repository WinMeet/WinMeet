import React from "react";
import { useState } from "react";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import { Chips } from "primereact/chips";
import { FileUpload } from "primereact/fileupload";
import { Message } from "primereact/message";
import { CreateMeetingRequestModel } from "data/models/create_meeting/create_meeting_request_model";
import { createMeeting } from "data/api/api";
import { useRef } from "react";
import Cal from "components/Comp_Big_Calendar";
import AuthenticatedNavbar from "components/AuthenticatedNavbar";
import "my.css";

const CompDashboard = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const toast = useRef(null);

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
      detail: "Event successfully created and send to participants",
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues: CreateMeetingRequestModel.empty(),
    validationSchema: CreateMeetingRequestModel.validationSchema,

    onSubmit: async (createMeetingRequestModel) => {
      //alert(JSON.stringify(createMeetingRequestModel, null, 2));
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

  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
          <div className="">
            <p className="m-0">
              <div className="mb-4 flex justify-content-end">
                <Dialog
                  style={{ width: "40vw" }}
                  header="New Event"
                  visible={visible}
                  onHide={hideDialog}
                >
                  {/* Dialog content goes here */}

                  <form onSubmit={formik.handleSubmit}>
                    <div className="text-4xl mt-2">Event Details</div>
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
                    <div className="flex mt-2">
                      <div className="card flex flex-column gap-2">
                        <label htmlFor="eventName"> Event Location</label>
                        <div className="card flex justify-content-center">
                          <InputTextarea
                            name="location"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.location}
                          />
                        </div>
                      </div>
                    </div>

                    {/**Inputs Start*/}

                    <div className="text-4xl mt-5">Event Date & Time</div>
                    <div className="flex mt-2">
                      <div className="card flex flex-column gap-2">
                        <label htmlFor="eventStartDate">Event Start Time</label>
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
                        <label htmlFor="eventEndDate"> Event End Date</label>
                        <Calendar
                          name="eventEndDate"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.eventEndDate}
                          showTime
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      {formik.touched.eventEndDate &&
                      formik.errors.eventEndDate ? (
                        <Message
                          severity="error"
                          text={formik.errors.eventEndDate}
                        />
                      ) : null}
                    </div>

                    <div className="text-4xl mt-5">Participants</div>
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
                          <Message
                            severity="error"
                            text={formik.errors.participants}
                          />
                        ) : null)}
                    </div>

                    <div className="text-4xl mt-5">Documents</div>
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

                    <div className="grid justify-content-center pt-4">
                      <div className="flex col-5">
                        <Toast
                          ref={toast}
                          // TODO : Move to onsubmit
                          position="bottom-right"
                        />
                        <Button
                          className="flex-1 font-bold"
                          label="Create Event"
                          type="submit"
                          severity="success"
                          size="lg"
                        />
                      </div>
                    </div>
                  </form>
                </Dialog>
              </div>
              <Cal></Cal>
              <div>
                <Button
                  className="z-5 w-4rem h-4rem border-circle shadow-6"
                  onClick={showDialog}
                  size="lg"
                  // label="Create Event"
                  icon="pi pi-plus"
                  style={{ position: "fixed", bottom: "10%", right: "2%" }}
                />
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompDashboard;
