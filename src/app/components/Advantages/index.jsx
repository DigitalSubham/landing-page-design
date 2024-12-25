import React from "react";
import Wrapper from "../Common/Wrapper";
import "./index.css";

const Advantages = () => {
  const data = [
    {
      title: "Security",
      description:
        "At Stackkaroo, our developers always look after the safety of your apps for a relaxed and reliable experience.",
    },
    {
      title: "Scalable",
      description:
        "We make solutions that not just keep in mind what you need now, but also plan for your future requirements",
    },
    {
      title: "On-Premise Implementation",
      description:
        "With our Ready app dev agency, host app on private servers for full control over data,",
    },
    {
      title: "Better Customer Retention",
      description:
        "Our main goal when providing home services is to keep users coming back and engaged.",
    },
  ];
  return (
    <div className="advContainer">
      <Wrapper>
        <div className="">
          <div className="key-advantages-of">
            Key Advantages of Home services App Development Services by
            Stackkaroo
          </div>
          <div className="advContainer2">
            <div></div>
            <div className="parent-rectangle-adv-div">
              {data.map((d, i) => {
                return (
                  <div className="rectangle-adv-div" key={i}>
                    <h4 className="">{d.title}</h4>
                    <p className="">{d.description}</p>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Advantages;
