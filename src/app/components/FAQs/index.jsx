import React from "react";
import Wrapper from "../Common/Wrapper";

const FAQS = () => {
  const data = [
    {
      title:
        "I am a Painting business owner and I am interested in finding a mobile app that can improve my business. How can the team at Stackkaroo assist me?",
      desc: "Stackkaroo can help you by learning what your business needs are for a mobile app. We can help with the things that would be good for your painting business. Stackkaroo can customize phone apps just for your company. This will make sure it does what you want and helps your business be better and give your customers a good experience.",
    },
    {
      title:
        "What is the cost of building an on-demand home service application with Stackkaroo?",
      desc: "Stackkaroo offers affordable prices for making apps or websites for home-service business. The price to make a home service app with Stackkaroo can change based on things like the client's business objectives, how it should look and any special features it needs. Talking to Stackkaroo about your needs is the best way to find out how much it will cost to make the app.",
    },
    {
      title:
        "Does Stackkaroo include an E-wallet feature in the home-service or handyman app development that they offer?",
      desc: "Yes, Stackkaroo puts an E-wallet feature in the home-service app/website development. An E-wallet feature lets users pay easily and safely for services they use inside the app.",
    },
    {
      title:
        "How long does it typically take for Stackkaroo to develop a fully functional home-service app?",
      desc: "The time it takes for Stackkaroo to make a home-service app that works is based on some things like what are the client's objectives, how hard it is, the extra features it has and what changes are needed. But usually, it takes about 2 to 6 months on average.",
    },
    {
      title:
        "Can Stackkaroo offer a Demo of any of their previously developed home-service apps?",
      desc: "Yes, Stackkaroo can show you our past home-service app demos. We have a collection of successful projects that can be shown to possible customers. This shows the skills and knowledge of our proficient designers and developers.",
    },
    {
      title: "Is post-launch technical support provided by Stackkaroo?",
      desc: "Yes, Stackkaroo provides help with technical problems after outhome-service apps/websites are launched. We know that regular care and changes are needed to keep the app working well. We give quick help and fix any technical problems that might happen after the app starts running.",
    },
  ];
  return (
    <div>
      <Wrapper>
        <div>FAQs</div>
        <div>
          Find quick answers to common questions. Contact us for further
          assistance
        </div>
        <div>{}</div>
      </Wrapper>
    </div>
  );
};

export default FAQS;
