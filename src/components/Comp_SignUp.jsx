import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const CompSignUp = () => {
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
        {/**Start div */}
        {/*menu*/}
        <div className="p-inputgroup m-0 ">
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
        <div className="grid pt-3">
          {/**Card for sign up */}
          <div className="col-4 "></div>

          <div className="col-4">
            <div className="flex align-items-center justify-content-center text-2xl pb-3 font-bold text-blue-900">
              Sign up with&nbsp; <p className="text-blue-500"> WinMeet</p>{" "}
              &nbsp;for free
            </div>
            <Card className="shadow-5">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <div className="">
                    <InputText
                      placeholder="E-mail"
                      name="email"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <div>
                      <div className="card flex justify-content-center pt-2 text-red-500 font-normal">
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
                      <div>
                        <div className="card flex justify-content-center pt-2 text-red-500 font-normal">
                          {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button
                        label="Sign Up"
                        type="submit"
                        className="bg-blue-500 ml-2 hover:bg-blue-600"
                      />
                    </div>
                    <div className="grid flex align-items-center justify-content-center pt-5">
                      {" "}
                      {/**Line Or Line */}
                      <div className="col-5 ">
                        <div
                          style={{
                            flex: 1,
                            height: "1px",
                            backgroundColor: "lightgrey",
                          }}
                        />
                      </div>
                      <div className="col-1 ">OR</div>
                      <div className="col-5 ">
                        <div
                          style={{
                            flex: 1,
                            height: "1px",
                            backgroundColor: "lightgrey",
                          }}
                        />
                      </div>
                    </div>
                    {/**Line Or Line end*/}
                  </div>
                  <div className="pt-4">
                    <Button
                      label="Sign up with Google"
                      className="w-full surface-0 ml-2 hover:surface-200 text-color border-400"
                    />
                  </div>
                  <div className="pt-4">
                    <Button
                      label="Sign up with Facebook"
                      className="w-full surface-0 ml-2 hover:surface-200 text-color border-400"
                    />
                  </div>
                  <div className="text-left text-lg pt-3">
                    Already have an account?{" "}
                    <a className="text-blue-500 text-lg" href="../Login">
                      {/*Sign up page connected*/}
                      Log in
                    </a>
                  </div>
                </div>
              </form>
            </Card>
          </div>
          <div className="col-4 "></div>
        </div>
      </div>
    </>
  );
};
export default CompSignUp;
