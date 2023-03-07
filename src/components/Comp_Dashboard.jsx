import axios from "axios";
import * as Yup from "yup";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import { Chips } from "primereact/chips";
import { FileUpload } from "primereact/fileupload";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility

const CompDashboard = () => {
  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventDescription: "",
      eventDateTime: new Date(),
      eventDuration: "",
      participants: [],
    },
    validationSchema: Yup.object({
      eventName: Yup.string()
        .min(3, "Event name cannot be less than 3 characters")
        .required("Event name is required"),

      eventDescription: Yup.string().optional(),

      eventDateTime: Yup.date()
        .min(new Date(), "Please enter valid date-time")
        .required("Please enter valid date-time"),

      eventDuration: Yup.number()
        .min(10, "Duration cannot be less than 10 minutes")
        .max(300, "Duration cannot be more than 300 minutes")
        .required("Duration is required"),

      participants: Yup.array()
        .of(
          Yup.string()
            .email("Please enter a valid email")
            .required("Participant list cannot be empty")
        )
        .min(1, "You have to add at least one participant"),
    }),

    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        const response = await axios.post("localhost:8080/api/createEvent", {
          eventName: values.eventName,
          eventDescription: values.eventDescription,
          eventDateTime: values.eventDateTime,
          eventDuration: values.eventDuration,
          participants: values.participants,
        });
        const data = await response.json();
        alert(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error(error);
      }
    },
  });

  const showSuccess = () => {
    Toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Event successfully created and send to participants",
      life: 3000,
    });
  };
  return (
    <>
      <div>
        {/*menu*/}
        <div className="p-inputgroup m-0">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "../Dashboard";
            }}
            label="WinMeet"
            className="text-5xl bg-white border-white text-blue-800 ml-2"
          />
          <div>
            {/**menu Home / Help / Account */}
            <div className="absolute right-0 mr-5">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "../Dashboard";
                }}
                label="Home"
                icon="pi pi-home blue-800"
                iconPos="right"
                className="border-round m-2 hover:bg-blue-800 hover:text-white bg-white text-blue-800 border-white"
              ></Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "";
                  // TODO: add help
                }}
                label="Help"
                icon="pi pi-question blue-800"
                iconPos="right"
                className="border-round m-2 hover:bg-blue-800 hover:text-white bg-white text-blue-800 border-white"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "";
                  // TODO: add account
                }}
                icon="pi pi-user blue-800"
                iconPos="right"
                label="Account"
                className="border-round m-2 hover:bg-blue-800 hover:text-white bg-white text-blue-800 border-white"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "";
                  // TODO: add quit
                }}
                label="Quit"
                icon="pi pi-power-off blue-800"
                iconPos="right"
                className="border-round m-2 hover:bg-blue-800 hover:text-white bg-white text-blue-800 border-white"
              />
            </div>
          </div>
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />
        <div className="grid p-3">
          <div className="col-2 ">{/**first col */}</div>
          {/**mid col */}
          <div className="col-8">
            <div label="username" className="font-semibold text-left text-5xl">
              User Name
            </div>
            {/**tabview*/}
            <div>
              <div className="card p-3">
                <TabView>
                  <TabPanel header="Events" leftIcon="pi pi-calendar mr-2">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </TabPanel>
                  <TabPanel
                    header="Scheduled Events"
                    leftIcon="pi pi-calendar-times mr-2"
                  >
                    <p className="m-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Consectetur,
                      adipisci velit, sed quia non numquam eius modi.
                    </p>
                  </TabPanel>
                  <TabPanel header="Creat New Event" leftIcon="pi pi-plus mr-2">
                    {/**Inputs Start*/}
                    <form
                      onSubmit={formik.handleSubmit}
                      className="flex flex-column gap-2"
                    >
                      <Card>
                        <div className="flex justify-content-left text-5xl pb-3 text-blue-800">
                          Event Details
                        </div>
                        <div className="">
                          <p className="card flex justify-content-start">
                            Event Name
                          </p>
                          <div className="card flex justify-content-start">
                            <InputText
                              name="eventName"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.eventName}
                            />
                          </div>
                          <div className="card flex justify-content-start pt-2 text-red-500">
                            {formik.touched.eventName &&
                            formik.errors.eventName ? (
                              <div>{formik.errors.eventName}</div>
                            ) : null}
                          </div>
                        </div>
                        {/**Inputs Ends*/}
                        <p className="card flex justify-content-start">
                          Event Description
                        </p>

                        <div className="card flex justify-content-start">
                          <InputTextarea
                            name="eventDescription"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.eventDescription}
                          />
                        </div>
                      </Card>

                      {/**Inputs Start*/}
                      <div className="">
                        <Divider className="w-full" />
                        <Card>
                          <div className="flex justify-content-left text-5xl pb-3 text-blue-800">
                            Event Date & Time
                          </div>

                          <div className="card flex justify-content-start pt-3 align-items-center">
                            Event Date & Time
                          </div>
                          <div className="flex justify-content-start pt-3 align-items-center">
                            <Calendar
                              name="eventDateTime"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.eventDateTime}
                              showTime
                              hourFormat="24"
                            />
                          </div>
                          <div className="card flex justify-content-start pt-2 text-red-500">
                            {formik.touched.eventDateTime &&
                            formik.errors.eventDateTime ? (
                              <div>{formik.errors.eventDateTime}</div>
                            ) : null}
                          </div>
                          <div className="card flex justify-content-start pt-3 align-items-center">
                            Event Duration
                          </div>
                          <div className="card flex justify-content-start pt-3">
                            <InputText
                              name="eventDuration"
                              type="number"
                              onChange={formik.handleChange}
                              value={formik.values.eventDuration}
                              placeholder="Minutes"
                            />
                          </div>
                          <div className="card flex justify-content-start pt-2 text-red-500">
                            {formik.touched.eventDuration &&
                            formik.errors.eventDuration ? (
                              <div>{formik.errors.eventDuration}</div>
                            ) : null}
                          </div>
                        </Card>
                        <Divider className="w-full" />
                        <Card>
                          <div className="flex justify-content-left text-5xl pb-3 text-blue-800">
                            Documents
                          </div>
                          <div>
                            <p className="card flex justify-content-start pt-3">
                              Upload File
                            </p>
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
                        <Divider className="w-full" />
                        <Card>
                          <div className="flex justify-content-left text-5xl pb-3 text-blue-800">
                            Participants
                          </div>
                          <div className="grid">
                            <div className="col-4">
                              <div className="flex justify-content-left pb-3">
                                Event Participant's E-mails:
                              </div>
                              <div className="card p-fluid justify-content-center">
                                <Toast ref={Toast} />
                                <Chips
                                  name="participants"
                                  type="text"
                                  onChange={formik.handleChange}
                                  value={formik.values.participants}
                                />
                              </div>
                            </div>
                            <div className="col-8"></div>
                          </div>
                          <div className="card flex justify-content-start pt-2 text-red-500">
                            {formik.touched.participants &&
                              (formik.errors.participants &&
                              Array.isArray(formik.errors.participants) &&
                              formik.errors.participants.length > 0 ? (
                                <div>{formik.errors.participants[0]}</div>
                              ) : formik.values.participants.length === 0 ? (
                                <div>{formik.errors.participants}</div>
                              ) : null)}
                          </div>
                        </Card>
                      </div>

                      <Divider className="w-full" />
                      {/**Inputs Ends*/}
                      <div className="card flex justify-content-center">
                        <Toast ref={Toast} position="bottom-right" />
                        <div className="flex flex-wrap gap-2">
                          <Button
                            label="Creat Event"
                            type="submit"
                            className="border-round m-2 hover:bg-white hover:text-blue-800 bg-blue-800 text-white border-blue-800"
                            onClick={showSuccess}
                          />
                        </div>
                      </div>
                    </form>
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>

          {/**right col */}
          <div className="col-2 "></div>
        </div>
      </div>
    </>
  );
};

export default CompDashboard;
