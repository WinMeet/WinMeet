import React, { useRef, useEffect } from "react";
import "my.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import AuthenticatedNavbar from "components/AuthenticatedNavbar";
import { Accordion, AccordionTab } from "primereact/accordion";
const CompPending = () => {
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Vote" icon="pi pi-check" />
    </div>
  );
  return (
    <>
      <div className="grid">
        <div className="col-10 col-offset-1">
          <AuthenticatedNavbar></AuthenticatedNavbar>
          {/* accordion starts */}
          <div className="card">
            <Accordion multiple activeIndex={[0]}>
              <AccordionTab header="Header I">
                {/* Event vote starts */}
                <div className="grid ">
                  {/* Event vote starts first*/}
                  <div className="card flex col-4 col_offset-1 justify-content-center">
                    <Card
                      title="Title"
                      subTitle="Subtitle"
                      footer={footer}
                      className="md:w-25rem"
                    >
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. s
                      </p>
                    </Card>
                  </div>
                  {/* Event vote starts second*/}
                  <div className="card flex col-4 col_offset-1 justify-content-center">
                    <Card
                      title="Title"
                      subTitle="Subtitle"
                      footer={footer}
                      className="md:w-25rem"
                    >
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </Card>
                  </div>
                  {/* Event vote starts third*/}
                  <div className="card flex col-4 col_offset-1 justify-content-center">
                    <Card
                      title="Title"
                      subTitle="Subtitle"
                      footer={footer}
                      className="md:w-25rem"
                    >
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </Card>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompPending;
