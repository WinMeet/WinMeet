import React, { useRef, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";

import calendarImage from "../assets/calendar.svg";

const CompHome = () => {
  function navigateToRoute(route, e) {
    e.preventDefault();
    window.location.href = route;
  }

  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const leftDivHeight = leftDivRef.current.clientHeight;
    rightDivRef.current.style.height = `${leftDivHeight}px`;
  }, []);

  const start = <p className="text-6xl m-2">WinMeet</p>;
  const end = (
    <div>
      <Button
        className="m-2"
        label="Log In"
        onClick={(e) => navigateToRoute("/login", e)}
      />
      <Button
        onClick={(e) => navigateToRoute("/signup", e)}
        label="Sign Up"
        className="m-2"
      />
    </div>
  );

  return (
    <>
      <div className="col-10 col-offset-1">
        <Menubar start={start} end={end} />
      </div>

      {/*Grid Start*/}
      <div className="grid">
        <div className="col-1"></div>
        {/*Left Div Starts*/}
        <div className="col-5 mt-6">
          <div ref={leftDivRef}>
            <Card className=" shadow-6">
              <div className="text-left">
                <p className="text-6xl text-blue-800 m-0">Easy</p>
                <p className="text-6xl text-blue-800 m-0">scheduling</p>
                <p className="text-6xl text-blue-400 m-0">ahead</p>
                <p className="text-lg  text-gray-600 m-0 mt-6">
                  WinMeet is your scheduling automation platform for eliminating
                  the back-and-forth emails for finding the perfect time and so
                  much more.
                </p>
              </div>
              <div className="p-inputgroup mt-6">
                <InputText placeholder="E-mail" />
                <Button
                  onClick={(e) => navigateToRoute("/signup", e)}
                  label="Sign Up"
                />
              </div>
            </Card>
          </div>
        </div>
        {/*Left Div Ends*/}
        {/*Right Div Starts*/}
        <div className="col-5 mt-6">
          <div ref={rightDivRef}>
            <Image
              src={calendarImage}
              imageStyle={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        {/*Right Div Ends*/}
        <div className="col-1"></div>
      </div>
      {/*Grid End*/}
    </>
  );
};
export default CompHome;
