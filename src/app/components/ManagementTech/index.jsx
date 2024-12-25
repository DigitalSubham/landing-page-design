import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";

const ManagementTech = () => {
  const data = [
    {
      title: "Advanced Analytics",
      desc: "Integrated analytics system to oversee service orders and gain insights into customer behaviors.",
    },
    {
      title: "Efficient Management and Co-ordination",
      desc: "Maintain control over service listings and providers in your marketplace with an approval mechanism.",
    },
    {
      title: "Marketing Campaigns",
      desc: "Maximize business revenue and multiply profits using built-in online marketing features.",
    },
    {
      title: "Discounts and Promotions",
      desc: "Create multiple discounts and promotional coupons to encourage repeat requests.",
    },
  ];
  return (
    <div className="managementTechContainer">
      <Wrapper>
        <p className="managementTechHeader">Management Tech</p>
        <div>
          <div
            style={{
              backgroundImage: `url(${"/managementTech.png"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100px",
              width: "fit",
              borderRadius: "15px",
            }}
          ></div>
          <div className="managementTechParentDiv">
            {data.map((d, i) => {
              return (
                <div className="managementTechDiv">
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

export default ManagementTech;
