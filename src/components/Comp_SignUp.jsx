import React, { useRef, useEffect } from "react";
import "my.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Message } from "primereact/message";
import { Image } from "primereact/image";
import { SignUpRequestModel } from "data/models/sign_up/sign_up_request_model";
import { signup } from "data/api/api";
import signUpImage from "assets/signup.svg";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";
import UnauthenticatedNavbar from "components/UnauthenticatedNavbar";
import { useNavigate } from "react-router-dom";

const CompSignUp = () => {
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
    initialValues: SignUpRequestModel.empty(),
    validationSchema: SignUpRequestModel.validationSchema,

    onSubmit: async (SignUpRequestModel) => {
      //alert(JSON.stringify(SignUpRequestModel, null, 2));
      const response = await signup(SignUpRequestModel);
      console.log(response);

      if (response.error) {
        console.error(response.error);
        showToast("error", "Sign Up Error", response.error);
      } else {
        navigateToRoute("/login");
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
          <Card className="shadow-6 flex justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <p className="text-4xl">Sign Up</p>

              <div className="pt-2">
                <InputText
                  placeholder="Name"
                  name="userName"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                />
                <div className="flex justify-content-start pt-2">
                  {formik.touched.userName && formik.errors.userName ? (
                    <Message severity="error" text={formik.errors.userName} />
                  ) : null}
                </div>
              </div>
              <div className="pt-2">
                <InputText
                  className="flex"
                  placeholder="Surname"
                  name="userSurname"
                  onChange={formik.handleChange}
                  value={formik.values.userSurname}
                />
                <div className="flex justify-content-start pt-2">
                  {formik.touched.userSurname && formik.errors.userSurname ? (
                    <Message
                      severity="error"
                      text={formik.errors.userSurname}
                    />
                  ) : null}
                </div>
              </div>
              <div className="pt-2">
                <InputText
                  placeholder="Email"
                  name="userEmail"
                  onChange={formik.handleChange}
                  value={formik.values.userEmail}
                />

                <div className="flex justify-content-start pt-2">
                  {formik.touched.userEmail && formik.errors.userEmail ? (
                    <Message severity="error" text={formik.errors.userEmail} />
                  ) : null}
                </div>
              </div>
              <div className="pt-2">
                <Password
                  feedback={false}
                  placeholder="Password"
                  name="userPassword"
                  onChange={formik.handleChange}
                  value={formik.values.userPassword}
                  toggleMask
                />

                <div className="flex justify-content-start pt-2">
                  {formik.touched.userPassword && formik.errors.userPassword ? (
                    <Message
                      severity="error"
                      text={formik.errors.userPassword}
                    />
                  ) : null}
                </div>
              </div>
              <div className="text-xs   pt-2 gap-3">
                <p>Password must contain;</p>
                <p>* Min 8 char. * Uppercase * Lowercase * Number</p>
              </div>
              <div className="text-sm flex  pt-2 gap-3">
                <p>Have an account?</p>
                <Button
                  label="Log In"
                  size="sm"
                  onClick={() => navigateToRoute("/login")}
                  link
                />
              </div>
              <div className="flex pt-4">
                <Button
                  type="submit"
                  className="flex-1 font-bold"
                  label="Sign Up"
                ></Button>
              </div>
            </form>
          </Card>
        </div>
        {/*Left Div Ends*/}
        {/*Right Div Starts*/}
        <div className="col-5 mt-6">
          <div style={{ height: "50px" }}></div>
          <div ref={rightDivRef}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Image
                src={signUpImage}
                imageStyle={{
                  width: "95%",
                  height: "95%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        {/*Right Div Ends*/}
        <div className="col-1"></div>
      </div>
    </>
  );
};
export default CompSignUp;
