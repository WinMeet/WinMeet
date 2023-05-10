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
                <p className="text-lg">
                  {" "}
                  what you need to create a new meeting. First of all, you need
                  to be on the home screen. Then press the "+" (plus) icon at
                  the bottom right of the page.After that, a screen will come up
                  to welcome you. Fill in the required sections on this screen
                  (screen shown on the right).
                </p>
                <p className="font-bold"> Accelerate your sales cycle</p>
                <p className="text-lg">
                  {" "}
                  Maintain deal momentum and eliminate scheduling friction at
                  all stages of your sales cycle.
                </p>
                <p className="font-bold"> Close more transactions </p>
                <p className="text-lg">
                  {" "}
                  Tailor reminder and follow-up sequences to drive transactions
                  along, link with sales tools, and eliminate logistical
                  responsibilities so you can focus on selling.
                </p>
              </div>
            </div>
            <div className="grid col-6 ">
              <p>ajdnkajndkas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompHelp;
