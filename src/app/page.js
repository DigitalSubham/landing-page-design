import Advantages from "./components/Advantages";
import CustomerTech from "./components/CustomerTech";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import FAQS from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import ManagementTech from "./components/ManagementTech";
import MultiFeature from "./components/MultiFeature";
import PerFectFit from "./components/PerfectFit";
import ProviderTech from "./components/ProviderTech";
import UniqueFeatures from "./components/UniqueFeatures";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Demo />
      <Advantages />
      <UniqueFeatures />
      <MultiFeature />
      <Demo2 />
      <PerFectFit />
      <CustomerTech />
      <ProviderTech />
      <ManagementTech />
      <WhyUs />
      <FAQS />
      <Footer />
    </main>
  );
}
