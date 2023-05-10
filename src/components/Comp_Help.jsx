import React, { useRef, useEffect } from "react";
import "my.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import AuthenticatedNavbar from "components/AuthenticatedNavbar";
import { Accordion, AccordionTab } from "primereact/accordion";

const CompHelp = () => {
  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
          <div className="grid col-offset-1">
            <div className="grid col-6 ">
              <div className="text-3xl ">
                <p className="font-bold"> How To Create Meeting </p>
                <p className="text-xl font-bold">
                  {" "}
                  Opening Creat Meeting Screen{" "}
                </p>
                <p className="text-lg">
                  {" "}
                  what you need to create a new meeting.
                </p>
                <p className="text-lg">
                  {" "}
                  First of all, you need to be on the home screen. Then press
                  the "+" (plus) icon at the bottom right of the page.
                </p>
                <p className="text-lg">
                  {" "}
                  After that, a screen will come up to welcome you. Fill in the
                  required sections on this screen (screen shown on the right).
                </p>
              </div>
            </div>
            <div className="grid col-6 ">
              <p>İmage of the plus and Creat event screen</p>
            </div>
          </div>
          {/* second row */}

          <div className="grid col-offset-1">
            <div className="grid col-6 ">
              <p>İmage of Creat event screen</p>
            </div>
            <div className="grid col-6 ">
              <div className="text-3xl ">
                <p className="text-xl font-bold">
                  {" "}
                  Filling The Creat Meeting Screen{" "}
                </p>
                <p className="text-lg">
                  {" "}
                  On the meeting creation screen that opens, there is an
                  information section that will be required for a meeting.
                </p>
                <p className="text-xl font-bold"> Event Details</p>
                <p className="text-lg">- Event Name:</p>
                <p className="text-lg">
                  {" "}
                  In this field the user enters the name of the event for other
                  participants. The name entered is the name that will appear on
                  the calendar. This field is a required field.
                </p>
                <p className="text-lg">- Event Description:</p>
                <p className="text-lg">
                  {" "}
                  In this field, the user writes the description of the meeting.
                  This field tells what the meeting is about and what it
                  includes. It is not a required field.
                </p>
                <p className="text-lg">- Event Location:</p>
                <p className="text-lg">
                  {" "}
                  In this field, the user writes the location of the meeting.
                  The user informs the participants about where the meeting
                  might be. It is not a required field.
                </p>
              </div>
            </div>
            {/* third row */}
            <div className="grid ">
              <div className="grid col-6 ">
                <div className="text-3xl ">
                  <p className="text-xl font-bold"> Event Date & Time</p>
                  <p className="text-lg">
                    {" "}
                    In the date and time field, the user decides when the
                    meeting will be.
                  </p>
                  <p className="text-lg">- Start Date & Time</p>
                  <p className="text-lg">
                    {" "}
                    In this field, the user enters the date & time they want the
                    meeting to start. The date & time entered cannot be earlier
                    than now. It is a required field.
                  </p>
                  <p className="text-lg">- End Date & Time</p>
                  <p className="text-lg">
                    {" "}
                    In this field, the user enters the date & time they want the
                    meeting to end. The entered date & time cannot be earlier
                    than the meeting start date & time . It is a required field.
                  </p>

                  <p className="text-lg">- Optional Dates & Times</p>
                  <p className="text-lg">
                    {" "}
                    In this field, the user enters the date and time options,
                    which can be backup or possible time. entries in this field
                    will be directed to the participants for voting. The result
                    of the voting will determine what date it is. is a required
                    field.
                  </p>
                </div>
              </div>
              <div className="grid col-6 ">
                <p>İmage of the plus and Creat event screen</p>
              </div>
            </div>
            <div className="grid col-offset-1">
              <div className="grid col-6 ">
                <p>İmage of Creat event screen</p>
              </div>
              <div className="grid col-6 ">
                <div className="text-3xl ">
                  <p className="text-xl font-bold"> Vote Due Date </p>
                  <p className="text-lg">
                    {" "}
                    In this field, the user can decide how long vote is
                    available for the optional times. This is the field that
                    must be entered to decide. The time entered must be earlier
                    than the first time specified for the meeting.
                  </p>

                  <p className="text-xl font-bold">Participants</p>
                  <p className="text-lg">
                    {" "}
                    In this area, the user decides on the participants. It is
                    ensured that you write the e-mail addresses of the users you
                    want to join and they can be added to the list by pressing
                    "Enter" after each e-mail. This field is a required field.
                  </p>
                  <p className="text-lg">
                    {" "}
                    After all the required fields are filled, press the "CREAT
                    EVENT" button at the bottom of the page and if you filled
                    everything correctly, your event will be created. If you
                    have a problem while creating the event, try repeating the
                    steps from the beginning.
                  </p>
                </div>
              </div>
            </div>
            {/* third row */}
            <div className="grid ">
              <div className="grid col-6 ">
                <div className="text-3xl ">
                  <p className=" font-bold"> Pending</p>
                  <p className="text-lg">
                    {" "}
                    In this area, the user will be able to choose the optional
                    dates and times of the incoming meeting invitations. From
                    the invitations in the "Pending" page, the user will choose
                    the most appropriate time at his own request and will use
                    the game. For this, it will be enough to find the most
                    suitable time for himself and click on the "Vote" button
                    under it.
                  </p>
                </div>
              </div>
              <div className="grid col-6 ">
                <p>İmage of the plus and Creat event screen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompHelp;
