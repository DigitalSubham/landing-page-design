import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";

const MultiFeature = () => {
  const data = [
    {
      type: "text",
      title: "Flexibility and Robustness",
      desc: "Our on-demand mobile app development services offer utmost flexibility, allowing you to upgrade the capacity as per your evolving needs.",
    },
    {
      type: "img",
      source: "/multi1.png",
    },
    {
      type: "text",
      title: "Enhanced User Experience",
      desc: "Our on-demand app development includes great interfaces for mobile and web, ensuring a great client experience for all users.",
    },
    {
      type: "img",
      source: "/multi2.png",
    },
    {
      type: "text",
      title: "Domain Expertise",
      desc: "Benefit from our extensive experience in the home service app development industry, as we are pioneers in providing innovative solutions.",
    },
    {
      type: "img",
      source: "/multi3.png",
    },
    {
      type: "text",
      title: "Global Payment Acceptance",
      desc: "Our services support new generation payment gateways & allow for easy integration of additional gateways based on your business needs.",
    },
    {
      type: "img",
      source: "/multi4.png",
    },
    {
      type: "text",
      title: "Pre-Packaged Solution",
      desc: "Our Ready made app development services provide a quick time to market without requiring significant time or financial investment.",
    },
  ];
  return (
    <div className="MultiFeatureContainer">
      <Wrapper>
        <div className="MultiFeatureContainer2">
          {data.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "img" ? (
                  <div
                    className="image-multi-container "
                    style={{
                      backgroundImage: `url(${d.source})`,
                    }}
                  ></div>
                ) : (
                  <div className="rectangle-multi-div">
                    <h4 className="MultiFeature-h4">{d.title}</h4>
                    <p className="MultiFeature-desc">{d.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default MultiFeature;
