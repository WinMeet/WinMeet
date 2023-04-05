import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Divider } from "primereact/divider";

const CompAccount = () => {
  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  function navigateToRoute(route, e) {
    e.preventDefault();
    window.location.href = route;
  }
  const start = (
    <Button
      className="text-4xl font-bold hover:bg-white"
      label="WinMeet"
      text
      onClick={(e) => navigateToRoute("/dashboard", e)}
    />
  );

  const end = (
    <div className="flex gap-3">
      <Button
        className="font-bold"
        onClick={(e) => navigateToRoute("/dashboard", e)}
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
        onClick={(e) => navigateToRoute()}
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
      {/* menu starts here */}
      <div className="grid">
        <div className="col-10 col-offset-1">
          <Menubar className="bg-transparent" start={start} end={end} />
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default CompAccount;
