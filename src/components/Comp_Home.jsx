import React, { useRef, useEffect } from "react";
import "my.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import { TabView, TabPanel } from "primereact/tabview";
import calendarImage from "assets/calendar.svg";
import sales from "assets/sales.svg";
import customer from "assets/customer.svg";
import recruting from "assets/recruting.svg";
import marketing from "assets/marketing.svg";
import it from "assets/it.svg";
import education from "assets/education.svg";
import team from "assets/team.svg";
import data from "assets/data.svg";
import { Divider } from "primereact/divider";
const CompHome = () => {
  function navigateToRoute(route, e) {
    e.preventDefault();
    window.location.href = route;
  }
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const leftDivHeight = leftDivRef.current.clientHeight;
    rightDivRef.current.style.height = `${leftDivHeight}px`;
  }, []);

  const start = (
    <Button
      className="text-4xl m-2"
      label="WinMeet"
      text
      onClick={(e) => navigateToRoute("/", e)}
    />
  );
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
        <Menubar className="bg-transparent" start={start} end={end} />
      </div>

      {/*Grid Start*/}
      <div className="grid pb-4">
        <Divider />
        <div className="col-1"></div>
        {/*Left Div Starts*/}
        <div className="col-5">
          <div ref={leftDivRef}>
            <Card className="shadow-6">
              <div>
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
              className="hidden md:inline-flex flex justify-content-center"
              src={calendarImage}
              imageStyle={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        {/*Right Div Ends*/}
        <div className="col-1"></div>

        <div className="col-2"></div>
      </div>
      {/*Grid End*/}
      <div>
        {/**tab view for where to use winmeet */}
        <div className="grid pt-5">
          <div className="col-2" />
          <div className="col-8">
            <div className="font-bold text-7xl md:text-center flex align-items-center justify-content-center pt-5 pb-5">
              Designed for teams who conduct meetings at scale{" "}
            </div>
            <div className="card  pt-5">
              <TabView className="myp-tabview-nav">
                <TabPanel header="Sales">
                  <div className="grid p-3">
                    <div className="col-6 text-3xl ">
                      <p className="font-bold"> Increase revenue </p>
                      <p className="text-lg">
                        {" "}
                        Schedule high-value meetings in seconds and use
                        scheduling to your advantage.
                      </p>
                      <p className="font-bold"> Accelerate your sales cycle</p>
                      <p className="text-lg">
                        {" "}
                        Maintain deal momentum and eliminate scheduling friction
                        at all stages of your sales cycle.
                      </p>
                      <p className="font-bold"> Close more transactions </p>
                      <p className="text-lg">
                        {" "}
                        Tailor reminder and follow-up sequences to drive
                        transactions along, link with sales tools, and eliminate
                        logistical responsibilities so you can focus on selling.
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className="hidden md:inline-flex pt-5 flex align-items-center justify-content-end"
                        src={sales}
                        imageStyle={{
                          maxWidth: "100%",
                          maxHeight: "90%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Marketing">
                  <div className="grid p-3">
                    <div className="col-6 text-3xl ">
                      <p className="font-bold"> Increase the pipeline </p>
                      <p className="text-lg">
                        {" "}
                        Quickly convert marketing leads into scheduled meetings.
                      </p>
                      <p className="font-bold"> Enhance lead response times</p>
                      <p className="text-lg">
                        {" "}
                        Get a competitive advantage by rapidly qualifying,
                        routing, and booking leads.
                      </p>
                      <p className="font-bold"> Increase conversion rates </p>
                      <p className="text-lg">
                        {" "}
                        Minimize sales funnel friction to close more
                        transactions. To get more efficient meetings and more
                        sales. Then watch the rates of the graphs.
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className="hidden md:inline-flex pt-5"
                        src={marketing}
                        imageStyle={{
                          maxWidth: "100%",
                          maxHeight: "90%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Customer Success">
                  <div className="grid p-3">
                    <div className="col-6 text-3xl">
                      <p className="font-bold"> Increase retention </p>
                      <p className="text-lg">
                        {" "}
                        Bring all of your professionals together and interact
                        with clients at every point of their journey to
                        establish long-term relationships.
                      </p>
                      <p className="font-bold"> Improve your reaction times</p>
                      <p className="text-lg">
                        {" "}
                        Book time quickly to meet clients' requirements and
                        assist them in self-serve to help them achieve their
                        goals.
                      </p>
                      <p className="font-bold">
                        {" "}
                        Increase NPS and customer satisfaction{" "}
                      </p>
                      <p className="text-lg">
                        {" "}
                        Using reminder and follow-up processes, you may improve
                        client happiness and engagement by changing the way you
                        organize meetings.
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className="hidden md:inline-flex pt-5"
                        src={customer}
                        imageStyle={{
                          maxWidth: "100%",
                          maxHeight: "90%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Recruting">
                  <div className="grid p-3">
                    <div className="col-6 text-3xl">
                      <p className="font-bold"> Hire more effectively </p>
                      <p className="text-lg">
                        {" "}
                        Spend less time juggling schedules and more time meeting
                        with applicants.
                      </p>
                      <p className="font-bold">
                        {" "}
                        Accelerate your recruiting process
                      </p>
                      <p className="text-lg">
                        {" "}
                        Book interviews in seconds and save time.
                      </p>
                      <p className="font-bold">
                        {" "}
                        Enhance the candidate experience.{" "}
                      </p>
                      <p className="text-lg">
                        {" "}
                        UReduce friction and turn your recruitment process into
                        a competitive advantage.
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className="hidden md:inline-flex pt-5"
                        src={recruting}
                        imageStyle={{
                          maxWidth: "100%",
                          maxHeight: "90%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="IT">
                  <div className="grid p-3">
                    <div className="col-6 text-3xl">
                      <p className="font-bold"> Schedule automation </p>
                      <p className="text-lg">
                        {" "}
                        Maintain compliance with your security needs and
                        decrease risk throughout the organization.
                      </p>
                      <p className="font-bold">
                        {" "}
                        With simplicity, implement and govern
                      </p>
                      <p className="text-lg">
                        {" "}
                        Remove the need for manual implementation and management
                        of user access and permissions on the platform.
                      </p>
                      <p className="font-bold">
                        {" "}
                        Increase team adoption and ROI.{" "}
                      </p>
                      <p className="text-lg">
                        {" "}
                        Collaborate with our team to onboard, drive adoption,
                        and establish success indicators in order to create more
                        value quicker.
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className="hidden md:inline-flex pt-5"
                        src={it}
                        imageStyle={{
                          maxWidth: "100%",
                          maxHeight: "90%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Education">
                  <div className="grid p-3">
                    <div className="col-6 text-3xl">
                      <p className="font-bold">
                        {" "}
                        With automatic scheduling, you can make more important
                        contacts
                      </p>
                      <p className="text-lg">
                        {" "}
                        Spend more time with students, whether advising,
                        tutoring, career planning, or counseling.
                      </p>
                      <p className="font-bold">
                        {" "}
                        Improve communication and coordination
                      </p>
                      <p className="text-lg">
                        {" "}
                        Make your calendar more available to students and
                        prospects by allowing them to reserve time when it is
                        most needed.
                      </p>
                      <p className="font-bold">
                        {" "}
                        Improve the educational experience{" "}
                      </p>
                      <p className="text-lg">
                        {" "}
                        Concentrate on what is most important: helping and
                        engaging with your kids so they may achieve.
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className="hidden md:inline-flex pt-5"
                        src={education}
                        imageStyle={{
                          maxWidth: "100%",
                          maxHeight: "90%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
      {/**img and message part */}
      <div>
        <div className="grid">
          <div className="col-2 "></div>
          <div className="col-8">
            {/**grid system */}
            <div className="grid">
              <div className="col-6 ">
                <Image
                  className="hidden md:inline-flex pt-5"
                  src={team}
                  imageStyle={{
                    maxWidth: "100%",
                    maxHeight: "90%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="col-6 text-3xl">
                <p className="font-bold"> Schedule as a group </p>
                <p className="text-lg">
                  {" "}
                  WinMeet will adjust to your and your team's schedule
                  preferences. Co-host a client call with a colleague, send out
                  email reminders and follow-ups, and make sure everything is
                  integrated with your favorite software tools.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 "></div>
        </div>
      </div>
      <div>
        <div className="grid">
          <div className="col-2 "></div>
          <div className="col-8">
            {/**grid system */}
            <div className="grid">
              <div className="col-6 text-3xl">
                <p className="font-bold"> Hit your number</p>
                <p className="text-lg">
                  {" "}
                  High-value meetings are the lifeblood of your business.
                  Increase revenue, retain customers, and land recruits with the
                  #1 scheduling automation platform.
                </p>
              </div>
              <div className="col-6 ">
                <Image
                  className="hidden md:inline-flex pt-5"
                  src={data}
                  imageStyle={{
                    maxWidth: "100%",
                    maxHeight: "90%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-2 "></div>
        </div>
      </div>
    </>
  );
};
export default CompHome;
