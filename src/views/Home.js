import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";

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
    </div>
  );
};
