import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";

const CustomerTech = () => {
  const data = [
    {
      title: "Enhanced Login Experience",
      desc: "Simplified login process through Google, Facebook, & other social platforms.",
      src: "customer1.png",
    },
    {
      title: "Efficient Search and Filtering",
      desc: "Customers can easily find and filter home services based on prices, ratings, and location.",
      src: "customer2.png",
    },
    {
      title: "Convenient Booking",
      desc: "Customers have the flexibility to instantly book, cancel, or schedule services for a later time.",
      src: "customer3.png",
    },
    {
      title: "Discounts and Promotions",
      desc: "Generate various discounts and promotional coupons to entice repeat requests.",
      src: "customer4.png",
    },
  ];
  return (
    <div className="customerTechContainer">
      <Wrapper>
        <p className="customerTechHeader">Customer Tech</p>
        <div>
          <div className="customerTechParentDiv">
            {data.map((d, i) => {
              return (
                <div className="customerTechDiv">
                  <div
                    style={{
                      backgroundImage: `url(${d.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100px",
                      width: "fit",
                      borderRadius: "15px",
                    }}
                  ></div>
                  <div>
                    <p>{d.title}</p>
                    <p>{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CustomerTech;
