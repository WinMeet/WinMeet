import React from "react";
import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Password } from "primereact/password";
import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import { Chips } from "primereact/chips";
import { classNames } from "primereact/utils";

let Dash = () => {
  const [value, setValue] = useState("");
  const show = (data) => {
    Toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: `${data.chipArray}`,
    });
  };

  const formik = useFormik({
    initialValues: {
      chipArray: [],
    },
    validate: (data) => {
      let errors = {};

      if (!data.chipArray.length > 0) {
        errors.chipArray = "At least one chip is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      data.chipArray.length > 0 && show(data);
      formik.resetForm();
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const showSuccess = () => {
    Toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Event successfully created and send to particepents",
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
                  {
                    /**Help */
                  }
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
                  {
                    /**Account */
                  }
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
                  {
                    /**For QUIT */
                  }
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
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                      </div>
                      {/**Inputs Ends*/}
                      <p className="card flex justify-content-start">
                        Event Description
                      </p>

                      <div className="card flex justify-content-start">
                        <InputTextarea
                          onChange={(e) => setValue(e.target.value)}
                          rows={5}
                          cols={30}
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
                        <div className="card flex justify-content-start pt-3">
                          <div>
                            <label
                              htmlFor="calendar-date"
                              className="m-2 justify-content-start"
                            >
                              Event Date
                            </label>
                          </div>
                          <Calendar
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            showIcon
                          />
                        </div>
                        <div className="flex pt-4">
                          <label
                            htmlFor="calendar-time"
                            className="m-2 justify-content-start"
                          >
                            Event Time
                          </label>
                          <div className="flex justify-content-start">
                            <Calendar
                              id="calendar-timeonly"
                              value={time}
                              onChange={(e) => setTime(e.value)}
                              timeOnly
                            />
                          </div>
                        </div>
                      </Card>
                      <Divider className="w-full" />
                      <Card>
                        <div className="flex justify-content-left text-5xl pb-3 text-blue-800">
                          Participents
                        </div>
                        <div className="grid">
                          <div className="col-4">
                            <div className="flex justify-content-left pb-3">
                              Event Participent's E-mails:
                            </div>
                            <div className="card p-fluid justify-content-center">
                              <form
                                onSubmit={formik.handleSubmit}
                                className="flex flex-column gap-2"
                              >
                                <Toast ref={Toast} />
                                <Chips
                                  inputId="c_chipArray"
                                  name="chipArray"
                                  value={formik.values.chipArray}
                                  className={classNames({
                                    "p-invalid":
                                      isFormFieldInvalid("chipArray"),
                                  })}
                                  onChange={(e) => {
                                    formik.setFieldValue("chipArray", e.value);
                                  }}
                                />
                                {getFormErrorMessage("chipArray")}
                              </form>
                            </div>
                          </div>
                          <div className="col-8"></div>
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
                          className="border-round m-2 hover:bg-white hover:text-blue-800 bg-blue-800 text-white border-blue-800"
                          onClick={showSuccess}
                        />
                      </div>
                    </div>
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
export default Dash;
