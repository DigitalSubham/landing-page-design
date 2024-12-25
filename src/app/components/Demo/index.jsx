import React from "react";
import "./index.css";
import Wrapper from "../Common/Wrapper";

const Demo = () => {
  return (
    <div className="demoContainer">
      <Wrapper>
        <div className="demoContainer2">
          <div className=""></div>
          <div className="rightDemoContainer">
            <p className="find-out-how">
              Find out how Stackkaroo can help you expand your Home-Services
              Business.
            </p>
            <h3 className="book-your-personalized">
              Book Your Personalized Demo Today
            </h3>
            <button className="rectangle-div">
              <span className="request-a-demo">Request a Demo</span>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Demo;
