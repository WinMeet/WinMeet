import React from "react";
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

const CompSignUp = () => {
  const [value, setValue] = useState("");
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
              <div>
                <div className="">
                  <InputText placeholder="E-mail" />
                  <div className="pt-3">
                    <Password
                      placeholder="Password"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="pt-4">
                    <Button
                      label="Sign Up"
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
            </Card>
          </div>
          <div className="col-4 "></div>
        </div>
      </div>
    </>
  );
};
export default CompSignUp;
