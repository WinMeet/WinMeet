import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";

const AuthenticatedNavbar = () => {
  const navigate = useNavigate();

  const navigateToRoute = (routeName) => {
    navigate(routeName);
  };

  const start = (
    <Button
      className="text-4xl font-bold hover:bg-white"
      label="WinMeet"
      text
      onClick={() => navigateToRoute("/dashboard")}
    />
  );

  const end = (
    <div className="flex gap-3">
      <Button
        className="font-bold"
        onClick={() => navigateToRoute("/dashboard")}
        label="Home"
        icon="pi pi-home"
      />
      <Button
        // TODO : Implement help
        className="font-bold"
        onClick={(e) => navigateToRoute()}
        label="Help"
        icon="pi pi-question-circle"
      />
      <Button
        // TODO : Implement account
        className="font-bold"
        onClick={() => navigateToRoute("/account")}
        label="Account"
        icon="pi pi-user"
      />
      <Button
        // TODO : Implement help
        className="font-bold"
        onClick={(e) => navigateToRoute()}
        label="Log Out"
        icon="pi pi-sign-out"
      />
    </div>
  );

  return (
    <div>
      <Menubar className="bg-transparent" start={start} end={end} />
      <Divider></Divider>
    </div>
  );
};

export default AuthenticatedNavbar;
