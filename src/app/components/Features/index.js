import React from "react";
import "./index.css";
import Wrapper from "../Common/Wrapper";
const Features = () => {
  const data = [
    {
      title: "Customer Tech",
      description:
        "Allow Your Customers to Explore, Reserve, and make Payments for Services through customized Applications and Website",
    },
    {
      title: "Service Provider Tech",
      description:
        "Efficient mobile application for service providers to manage multiple bookings in an instant.",
    },
    {
      title: "Management Tech",
      description:
        "Manage your home service marketplace with assurance to improve business efficiency and accelerate growth.",
    },
  ];
  return (
    <div className="featureContainer">
      <Wrapper>
        <div className="featureContainer2">
          <div className="leftFeatureContainer">
            {data.map((d, i) => {
              return (
                <div key={i} className="">
                  <h3 className="featureTitle">{d.title}</h3>
                  <p className="featureDescription"> {d.description}</p>
                </div>
              );
            })}
          </div>
          <div className="featureImageParent">
            <div className="featureImage"></div>
            <div className="groupDots"></div>
            <div className="orangeBox"></div>
            <div className="blueBox"></div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Features;
