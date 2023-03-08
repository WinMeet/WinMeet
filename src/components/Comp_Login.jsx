import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import chrome from "../assets/chrome.png";

import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const CompLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email cannot be empty"),

      password: Yup.string()
        .required("Password cannot be empty")
        .matches(
          /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Password must contain at least one uppercase letter and number, and be at least 8 characters long"
        ),
    }),

    onSubmit: async (values) => {
      try {
        // TODO: Remove
        alert(JSON.stringify(values, null, 2));
        const response = await axios.post("localhost:8080/api/login", {
          email: values.email,
          password: values.password,
        });
        const data = await response.json();
        alert(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <div>
        {/*menu*/}
        <div className="p-inputgroup m-0">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "../";
            }}
            label="WinMeet"
            className="text-5xl bg-white border-white text-blue-800 ml-2"
          />
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />

        <div class="card">
          <div class="flex card-container indigo-container ">
            <div class="flex-1  text-white font-bold text-center border-round ">
              {/*firstdiv*/}
            </div>
            <div class="flex-1 h-4rem font-bold text-left p-4 border-round ">
              <div className=" text-8xl text-blue-800 m-0">
                Welcome <br /> back to
              </div>
              <div className="text-8xl text-blue-500 m-0 font-bold">
                WinMeet
              </div>
              <div className="font-normal text-xl pt-3">
                Log in to your account to get back to your hub for scheduling
                meetings.
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className="pt-3">
                  <InputText
                    placeholder="E-mail"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div>
                    <div className="card flex justify-content-start pt-2 text-red-500 font-normal">
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="pt-3">
                    <Password
                      feedback={false}
                      placeholder="Password"
                      name="password"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div>
                    <div className="card flex justify-content-start pt-2 text-red-500 font-normal">
                      {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      label="Login"
                      className="bg-blue-500 ml-2 hover:bg-blue-600"
                    />
                  </div>

                  {/**Line Or Line end*/}
                </div>
              </form>
            </div>
            <div class="p-4 border-round mx-4 text-left">
              <Card className="max-w-30rem">
                <div className="Text-400 text-2xl">What's New</div>
                <div className="align-content-center">
                  <p>
                    WinMeet For All Browsers <br />
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquid autem excepturi laudantium non molestiae, nam, iusto
                    quod ipsa, eveniet placeat sunt! Quod maxime suscipit nisi
                    rerum in dolorum cumque provident. Dolor qui consequuntur
                    omnis sunt atque magni, id voluptatibus facilis hic quas
                    aperiam inventore eius similique in voluptates maxime quae
                    porro aliquam excepturi nam, eligendi a explicabo cum sed?
                    Ea ab impedit laboriosam ratione? Odit iusto ad rem amet?
                  </p>
                  <img
                    src={chrome}
                    alt="Logo"
                    width={100}
                    className="border-round mr-4 ml-4 mt-5 hidden md:inline-flex"
                  />{" "}
                </div>
              </Card>
            </div>
            <div class="flex-1 h-4rem text-white font-bold text-center p-4 border-round mx-4"></div>
          </div>
        </div>
        {/*last div*/}
      </div>
    </>
  );
};
export default CompLogin;
