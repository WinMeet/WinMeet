import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";

const UnauthenticatedNavbar = () => {
  const navigate = useNavigate();

  const navigateToRoute = (routeName) => {
    navigate(routeName);
  };

  const start = (
    <Button
      className="text-4xl font-bold hover:bg-white"
      label="WinMeet"
      text
      onClick={() => navigateToRoute("/")}
    />
  );

  const end = (
    <div>
      <Button
        className="m-2 font-bold"
        label="Log In"
        onClick={(e) => navigateToRoute("/login", e)}
      />
      <Button
        onClick={(e) => navigateToRoute("/signup", e)}
        label="Sign Up"
        className="m-2 font-bold"
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

export default UnauthenticatedNavbar;
