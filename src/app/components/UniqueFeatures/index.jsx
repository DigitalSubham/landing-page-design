import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";
import Image from "next/image";

const UniqueFeatures = () => {
  const data = [
    {
      title: "Home Service Businesses: Embrace the Online Platform",
      description:
        "With Stackkaroo's home service software, you can provide your customers with the convenience of booking services online. This powerful dashboard allows you to efficiently manage your staff, bookings, and more.",
      source: "/Unique1.png",
    },
    {
      title: "Single Service Aggregator: Elevate Your Individual Service App",
      description:
        "Take your in-demand home services, such as plumbing, cleaning, mowing, and more, to new heights with Stackkaroo's app development solutions. Create a customized app that caters specifically to your service offering.",
      source: "/Unique3.png",
    },
    {
      title:
        "Multi Service Aggregator: Establish Your Home Service Marketplace",
      description:
        "Build a bridge between homeowners and trusted professionals by developing a home service app similar to TaskRabbit and HouseJoy. This multi-service aggregator model allows you to connect customers with a wide range of service providers, enhancing convenience and choice.",
      source: "/Unique2.png",
    },
  ];

  const data2 = [
    {
      title: "Engaging and Intuitive Interface",
      description:
        "We make apps that are simple to use and have a natural layout for the best user experience.",
    },
    {
      title: "Plug-In Integration",
      description:
        "To make your home service app better and more popular, we add the topm third-party tools.",
    },
    {
      title: "Customize for your Brand",
      description:
        "Our custom home service app development services are custom built just for your special brand.",
    },
  ];
  return (
    <div className="UniqueFeatureContainer">
      <div className="FeaturedImage"></div>
      <Wrapper>
        <div className="parent-rectangle-feature2-div">
          {data2.map((d, i) => {
            return (
              <div className="rectangle-feature2-div" key={i}>
                <h4 className="feature2-h4">{d.title}</h4>
                <p className="feature2-desc">{d.description}</p>{" "}
              </div>
            );
          })}
        </div>
        <div className="uniqueSecondContainer">
          <div className="uniqueHeadDesc">
            <p className="uniqueFeatureHeader">
              Customized Solutions Exploring the Diverse Business Models of
              Stackkaroo
            </p>
            <p className="uniqueFeatureDesc">
              Stackkaroo offers a range of business models tailored to meet the
              unique requirements and preferences of home service business
              owners.
            </p>
          </div>
          <div className="uniqueFeatureParentDiv">
            {data.map((d, i) => {
              return (
                <div className="ImageWhole" key={i}>
                  <div
                    style={{
                      backgroundImage: `url(${d.source})`,
                    }}
                    className="uniqueFeatureImage"
                  ></div>
                  <div className="rectangle-uniqueFeature-div">
                    <Image
                      className="uniqueImageMobile"
                      src={d.source}
                      alt={d.source}
                      height={200}
                      width={200}
                    />
                    <h4 className="uniqueFeature-h4">{d.title}</h4>
                    <p className="uniqueFeature-desc">{d.description}</p>{" "}
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

export default UniqueFeatures;
