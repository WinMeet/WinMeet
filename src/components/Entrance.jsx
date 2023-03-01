import React from "react";
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import chrome from "../assets/chrome.png";
import { Password } from "primereact/password";

let Entrance = () => {
  const [value, setValue] = useState("");
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
              <div>
                {/*input and button */}
                <div className="p-inputgroup pt-4">
                  <InputText placeholder="E-mail" />

                  <Password
                    className="pl-2"
                    placeholder="Password"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />

                  <Button
                    label="Log in"
                    className="bg-blue-500 ml-2 hover:bg-blue-600"
                  />
                </div>
                <p className="text-xl">
                  Don’t have an account?{" "}
                  <a className="text-blue-500 text-xl" href="../SignUp">
                    {/*Sign up page connected*/}
                    Sign Up
                  </a>
                </p>
              </div>
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
export default Entrance;
