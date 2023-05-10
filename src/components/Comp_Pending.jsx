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
import AuthenticatedNavbar from "components/AuthenticatedNavbar";

const CompPending = () => {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Vote" icon="pi pi-check" />
    </div>
  );
  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
        </div>
      </div>
      {/* Event vote starts */}
      <div className="card">
        {/* Event vote starts first*/}
        <div className="card flex ">
          <Card
            title="Title"
            subTitle="Subtitle"
            footer={footer}
            header={header}
            className="md:w-25rem"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
        {/* Event vote starts second*/}
        <div className="card flex ">
          <Card
            title="Title"
            subTitle="Subtitle"
            footer={footer}
            header={header}
            className="md:w-25rem"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};
export default CompPending;
