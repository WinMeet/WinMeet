import React, { useRef, useEffect } from "react";
import "my.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Message } from "primereact/message";
import { Image } from "primereact/image";
import { LoginRequestModel } from "data/models/login/login_request_model";
import { login } from "data/api/api";
import loginImage from "assets/login.svg";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import UnauthenticatedNavbar from "components/UnauthenticatedNavbar";
import { useNavigate } from "react-router-dom";
import { setToken } from "utils/token_manager";

const CompLogin = () => {
  const navigate = useNavigate();

  const navigateToRoute = (routeName) => {
    navigate(routeName);
  };

  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 5000 });
  };

  useEffect(() => {
    const leftDivHeight = leftDivRef.current.clientHeight;
    rightDivRef.current.style.height = `${leftDivHeight}px`;
  }, []);

  const formik = useFormik({
    initialValues: LoginRequestModel.empty(),
    validationSchema: LoginRequestModel.validationSchema,

    onSubmit: async (loginRequestModel) => {
      console.log(JSON.stringify(loginRequestModel, null, 2));
      const response = await login(loginRequestModel);

      if (response.token) {
        setToken(response.token);
        navigateToRoute("/dashboard");
      } else {
        console.error(response.error);
        showToast("error", "Login Error", response.error);
      }
    },
  });

  return (
    <>
      <Toast ref={toast} position="bottom-right" />
      <div className="col-10 col-offset-1">
        <UnauthenticatedNavbar></UnauthenticatedNavbar>
      </div>
      <div className="grid">
        <div className="col-1"></div>
        {/*Left Div Starts*/}
        <div className="col-5" ref={leftDivRef}>
          <div style={{ height: "50px" }}></div>
          <Card className="shadow-6 flex justify-content-center ">
            <form onSubmit={formik.handleSubmit}>
              <p className="text-4xl">Log In</p>
              <span className="p-input-icon-left">
                <i className="pi pi-envelope" />
                <InputText
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </span>
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
                  onClick={() => navigateToRoute("/signup")}
                  link
                />
              </div>
              <div className="flex pt-4">
                <Button
                  type="sumbit"
                  className="flex-1 font-bold"
                  label="Log In"
                ></Button>
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
                maxHeight: "90%",
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
