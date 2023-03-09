import React, { useRef, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Menubar } from "primereact/menubar";
import { Message } from "primereact/message";
import { Image } from "primereact/image";

import loginImage from "../assets/login.svg";

import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const CompLogin = () => {
  function navigateToRoute(route, e) {
    e.preventDefault();
    window.location.href = route;
  }

  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const leftDivHeight = leftDivRef.current.clientHeight;
    rightDivRef.current.style.height = `${leftDivHeight}px`;
  }, []);

  const start = (
    <Button
      className="text-4xl m-2"
      label="WinMeet"
      text
      onClick={(e) => navigateToRoute("/", e)}
    />
  );
  const end = (
    <div>
      <Button
        onClick={(e) => navigateToRoute("/signup", e)}
        label="Sign Up"
        className="m-2"
      />
    </div>
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Invalid password"),
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
      <div className="col-10 col-offset-1">
        <Menubar className="bg-transparent" start={start} end={end} />
      </div>
      <div className="grid">
        <div className="col-1"></div>
        {/*Left Div Starts*/}
        <div className="col-5 mt-6" ref={leftDivRef}>
          <Card className="shadow-6 flex justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <p className="pt-4 text-4xl">Log In</p>
              <div className="pt-4">
                <span className="p-input-icon-left">
                  <i className="pi pi-envelope" />
                  <InputText
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </span>
              </div>
              <div className="flex justify-content-start pt-2">
                {formik.touched.email && formik.errors.email ? (
                  <Message severity="error" text={formik.errors.email} />
                ) : null}
              </div>
              <div className="pt-4">
                <Password
                  feedback={false}
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  toggleMask
                />
              </div>
              <div className="flex justify-content-start pt-2">
                {formik.touched.password && formik.errors.password ? (
                  <Message severity="error" text={formik.errors.password} />
                ) : null}
              </div>
              <div className="text-sm flex justify-content-end pt-2 gap-3">
                <p>Dont' have an account</p>
                <Button
                  label="Sign Up"
                  size="sm"
                  onClick={(e) => navigateToRoute("/signup", e)}
                  link
                />
              </div>
              <div className="flex pt-4">
                <Button className="flex-1" label="Log In"></Button>
              </div>
            </form>
          </Card>
        </div>
        {/*Left Div Ends*/}
        {/*Right Div Starts*/}
        <div className="col-5 mt-6">
          <div ref={rightDivRef}>
            <Image
              src={loginImage}
              imageStyle={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        {/*Right Div Ends*/}
        <div className="col-1"></div>
      </div>
    </>
  );
};
export default CompLogin;
