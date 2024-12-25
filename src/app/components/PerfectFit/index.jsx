import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";
import Image from "next/image";

const PerFectFit = () => {
  const data = [
    {
      title: "Onsite Hiring",
      desc: "If you prefer to have your home service app developed in front of you, at your office, onsite hiring is the ideal choice.",
      source: "/computer.svg",
    },
    {
      title: "Offsite Hiring",
      desc: "For those who do not wish to supervise or bear the overhead charges, offsite hiring is the recommended option.",
      source: "/worker.svg",
    },
    {
      title: "Hybrid Hiring",
      desc: "It combines the benefits of both onsite & offsite hiring, making it suitable for individuals who desire a combination of both.",
      source: "/coworkers.svg",
    },
    {
      title: "Fixed Hiring",
      desc: "If you have a fixed budget and are looking to develop a handyman app similar to Uber for your business, the fixed hiring model is tailored for you.",
      source: "/fixed.svg",
    },
    {
      title: "Dedicated Hiring",
      desc: "When time is limited and you require a speedy app development process, dedicated hiring models are the most effective.",
      source: "/dedication.png",
    },
    {
      title: "Hourly Basis",
      desc: "The preferred model for many, this option allows you to pay for the number of hours the developers dedicate to your project.",
      source: "/24.svg",
    },
  ];
  return (
    <div className="perfectFitContainer">
      <Wrapper>
        <p className="perfectHeader">
          Finding the Perfect Fit: How Stackkaroo's Engagement and Hiring Models
          Benefit Home-Services Business Owners
        </p>
        <p className="perfectDesc">
          Stackkaroo provides a range of engagement and hiring models for home
          service business owners to choose from based on their preferences.
        </p>
        <div className="parent-perfect-div">
          {data.map((d, i) => {
            return (
              <div key={i}>
                <div className="perfect-div">
                  <div>
                    <div className="perfect-div-img">
                      <Image
                        alt={d.source}
                        src={d.source}
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="perfectInnerHeader">{d.title}</p>
                    <p className="perfectInnerdesc">{d.desc}</p>
                  </div>
                  <div className="virtualDiv"></div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="perfectHeader">
          Stay Ahead of the Competition with Stackkaroo's Advanced All-in-one
          Tech Suite for Your Home Services Business
        </p>
        <p className="perfectDesc">
          Why Settle for Anything Less? Use Stackkaroo's Development Service to
          Make Your Home Services Business Better. Enhance the management of
          your Home Services Business by gaining access to a wide range of tools
          that cater to both your staff and customers
        </p>
      </Wrapper>
    </div>
  );
};

export default PerFectFit;
