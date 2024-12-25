import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";

const ProviderTech = () => {
  const data = [
    {
      title: "Task Notifications",
      desc: "Professionals receive comprehensive notifications containing customer details and estimated payout.",
    },
    {
      title: "Delivery Verification",
      desc: "Service providers can scan barcodes, add notes, images, and collect digital signatures as proof of delivery.",
    },
    {
      title: "Optimized Routing",
      desc: "Effortless navigation with the shortest and fastest routes to ensure punctual arrival.",
    },
    {
      title: "Earnings Tracking",
      desc: "Service agents can easily monitor their daily, weekly, and monthly earnings.",
    },
  ];
  return (
    <div className="providerTechContainer">
      <Wrapper>
        <p className="providerTechHeader">Customer Tech</p>
        <div>
          <div
            style={{
              backgroundImage: `url(${"/providerTech.png"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100px",
              width: "fit",
              borderRadius: "15px",
            }}
          ></div>
          <div className="providerTechParentDiv">
            {data.map((d, i) => {
              return (
                <div className="providerTechDiv">
                  <p>{d.title}</p>
                  <p>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProviderTech;
