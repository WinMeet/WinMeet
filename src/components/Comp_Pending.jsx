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
  return (
    <>
      <AuthenticatedNavbar></AuthenticatedNavbar>
      <div>test ajdbajaadh</div>
    </>
  );
};
export default CompPending;
