import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import meeting from "../assets/meetingtable.jpg";
let Counter = () => {
  return (
    <>
      <div>
        {/*menu*/}
        <div className="p-inputgroup m-0">
          <Button
            label="WinMeet"
            className="text-5xl bg-white border-white text-blue-800 ml-2"
          />
          <div className="absolute right-0 mr-5">
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "../Login";
              }}
              label="Log in"
              className="border-round m-2 hover:bg-blue-500 hover:text-white bg-white text-blue-800 border-white"
            ></Button>
            <Button
              label="Sign up"
              className="bg-blue-500 ml-2 border-round m-2 hover:bg-blue-600"
            />
          </div>
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />
      </div>
      {/*info card*/}
      <div className="grid ">
        <div className="col-5 flex flex-row flex-wrap card-container blue-container ">
          <Card className="ml-6 mt-3 shadow-5">
            <h3 className="text-7xl text-left text-blue-800 m-0">Easy</h3>
            <h3 className="text-7xl text-left text-blue-800 m-0">scheduling</h3>
            <h3 className="text-7xl text-left text-blue-500 m-0">ahead</h3>
            <div className="text-left">
              WinMeet is your scheduling automation platform for eliminating the
              back-and-forth emails for finding the perfect time and so much
              more.
            </div>
            {/*input and button */}
            <div className="p-inputgroup mt-5">
              <InputText placeholder="E-mail" />
              <Button
                label="Sign up"
                className="bg-blue-500 ml-2 hover:bg-blue-600"
              />
            </div>
          </Card>
        </div>
        <div className="col-5">
          <img
            src={meeting}
            alt="Logo"
            width={1000}
            height={500}
            className="shadow-5 border-round mr-4 ml-4 mt-5 hidden md:inline-flex"
          />
        </div>
      </div>
      {/* first row finish*/}

      <div class="card">
        <div class="flex align-items-center justify-content-center card-container ">
          <div class="p-3 w-30rem flex align-items-center justify-content-center border-round  font-bold text-6xl text-blue-800 mt-3">
            Simplified scheduling for more than 10,000,000 users worldwide
          </div>
        </div>
      </div>
      {/*second row finish*/}
    </>
  );
};
export default Counter;
