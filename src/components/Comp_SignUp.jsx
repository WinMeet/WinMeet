import React, { useRef, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Menubar } from "primereact/menubar";
import { Message } from "primereact/message";
import { Image } from "primereact/image";
import { SignUpRequestModel } from "data/models/sign_up/sign_up_request_model";
import { signup } from "data/api/api";
import signUpImage from "assets/signup.svg";
import { Divider } from "primereact/divider";
import { useFormik } from "formik";

const CompSignUp = () => {
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
        onClick={(e) => navigateToRoute("/login", e)}
        label="Log In"
        className="m-2"
      />
    </div>
  );

  const formik = useFormik({
    initialValues: SignUpRequestModel.empty(),
    validationSchema: SignUpRequestModel.validationSchema,

    onSubmit: async (SignUpRequestModel) => {
      alert(JSON.stringify(SignUpRequestModel, null, 2));
      const response = await signup(SignUpRequestModel);
      console.log(response);
    },
  });

  return (
    <>
      <div className="col-10 col-offset-1">
        <Menubar className="bg-transparent" start={start} end={end} />
      </div>
      <Divider />
      <div className="grid">
        <div className="col-1"></div>
        {/*Left Div Starts*/}
        <div className="col-5" ref={leftDivRef}>
          <Card className="shadow-6 flex justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <p className="text-4xl">Sign Up</p>
              <span className="p-input-icon-left">
                <InputText
                  placeholder="Name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <div className="flex justify-content-start pt-2">
                  {formik.touched.name && formik.errors.name ? (
                    <Message severity="error" text={formik.errors.name} />
                  ) : null}
                </div>
                <InputText
                  className="flex"
                  placeholder="Surname"
                  name="surname"
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                />
                <div className="flex justify-content-start pt-2">
                  {formik.touched.surname && formik.errors.surname ? (
                    <Message severity="error" text={formik.errors.surname} />
                  ) : null}
                </div>
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
                <p>Have an account?</p>
                <Button
                  label="Log In"
                  size="sm"
                  onClick={(e) => navigateToRoute("/login", e)}
                  link
                />
              </div>
              <div className="flex pt-4">
                <Button
                  type="submit"
                  className="flex-1"
                  label="Sign Up"
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
              src={signUpImage}
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
export default CompSignUp;
