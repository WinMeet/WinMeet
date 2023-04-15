import React, { useRef } from "react";
import AuthenticatedNavbar from "components/AuthenticatedNavbar";

const CompAccount = () => {
  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  return (
    <div>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
        </div>
      </div>
    </div>
  );
};

export default CompAccount;
