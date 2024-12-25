import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Wrapper>
        <div className="footerInnerContainer">
          <div>
            <div className="outerBorder">
              <div className="innerBorder">
                <div className="innerImageDiv">
                  {" "}
                  <Image src={"/customer.png"} alt="customer" fill />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="mainHeader">
                <p className="headerText headerFlex">
                  Email{" "}
                  <Image
                    src={"/emal.svg"}
                    alt="customer"
                    width={30}
                    height={30}
                    // layout="responsive"
                  />
                </p>
                <p className="normalText">info@stackkaroo.com</p>
              </div>
              <div className="headerText headerFlex">
                Address{" "}
                <Image
                  src={"/location.svg"}
                  alt="customer"
                  width={30}
                  height={30}
                  // layout="responsive"
                />
              </div>
              <div className="mainHeader">
                <p className="headerText">Office 1 location</p>
                <p className="normalText">
                  6, IGM Hospital Lane, Agartala, Tripura -799001
                </p>
                <p className="normalText">Phone: - +91-7085548881</p>
              </div>
              <div className="mainHeader">
                <p className="headerText">Office 2 location</p>
                <p className="normalText">
                  Jatioarilo, Rahania, Mahanga, Cuttack - 754204
                </p>
                <p className="normalText">Phone: - +91-7401588425</p>
              </div>
              <div className="mainHeader">
                <p className="headerText">Hours</p>
                <p className="normalText">Mon to Fri: 9:30 am to 7:30 pm</p>
                <p className="normalText">Sat: 9:30 am to 02 pm</p>
              </div>
            </div>
            <div className="headerText">
              You will get a Reply within 24 Hours from our Customer Support
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
