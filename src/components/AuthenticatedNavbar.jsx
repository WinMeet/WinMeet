import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";
import { removeToken } from "utils/token_manager";

const AuthenticatedNavbar = () => {
  const navigate = useNavigate();

  const navigateToRoute = (routeName) => {
    navigate(routeName);
  };

  const handleLogout = () => {
    removeToken();
    navigateToRoute("/");
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
        className="font-bold"
        onClick={() => navigateToRoute("/pending")}
        label="Pending"
        icon="pi pi-ticket"
      />
      <Button
        // TODO : Implement help
        className="font-bold"
        onClick={() => navigateToRoute("/help")}
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
        className="font-bold"
        onClick={handleLogout}
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
