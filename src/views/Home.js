import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Counter from "../components/Counter";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Image } from "primereact/image";
import logo from "../assets/logo1.png"; // with import
<link rel="stylesheet" href="https://unpkg.com/primeflex@^3/primeflex.css">
  {" "}
</link>;
export const Home = () => {
  return (
    <div>
      <Counter> </Counter>{" "}
    </div>
  );
};
