import React from "react";
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Password } from "primereact/password";

let Dash = () => {
  const [value, setValue] = useState("");
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
                className="border-round m-2 hover:bg-blue-500 hover:text-white bg-white text-blue-800 border-white"
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
                className="border-round m-2 hover:bg-blue-500 hover:text-white bg-white text-blue-800 border-white"
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
                className="border-round m-2 hover:bg-blue-500 hover:text-white bg-white text-blue-800 border-white"
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
                className="border-round m-2 hover:bg-blue-500 hover:text-white bg-white text-blue-800 border-white"
              />
            </div>
          </div>
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />
        <div className="grid p-3">
          <div className="col-2 bg-blue-500">{/**first col */}</div>
          <div className="col-8"></div>
          <div className="col-2 bg-blue-500"></div>
        </div>
      </div>
    </>
  );
};
export default Dash;
