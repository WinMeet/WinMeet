import React from "react";
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Avatar } from 'primereact/avatar';
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
              window.location.href = "../";
            }}
            label="WinMeet"
            className="text-5xl bg-white border-white text-blue-800 ml-2"
          />
          <div>{/**menu account and other tabs */}
        <div className="absolute right-0 mr-5">
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "../Login";
              }}
              label="Log in"
              className="border-round m-2 hover:bg-blue-500 hover:text-white bg-white text-blue-800 border-white"
            ></Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "../SignUp";
              }}
              label="Sign up"
              className="bg-blue-500 ml-2 border-round m-2 hover:bg-blue-600"
            />
            <Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
          </div>
          
        </div>
        
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />
        
    </div>
     
    </>
  );
};
export default Dash;
