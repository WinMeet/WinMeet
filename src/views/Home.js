import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Image } from "primereact/image";
import logo from "../assets/logo1.png"; // with import
export const Home = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { label: "WinMeet" },
    { label: "Log-In", icon: "pi pi-fw pi-sign-in" },
    { label: "Register", icon: "pi pi-fw pi-pencil" },
  ];

  return (
    <div>
      <div className="card">
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
      </div>
      <div className="first row">
        <div className="image" align="left" display="inline-block">
          <Image src={logo} alt="Image Text" />
        </div>
        <div
          className="explain1"
          align="right"
          display="inline-block"
          style={{ display: "nline-block", align: "right" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
};
