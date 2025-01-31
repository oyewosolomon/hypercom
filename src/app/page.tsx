import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import LandingPage from "./components/Landing";
import ExploreWorld from "./components/Hotels";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
     <LandingPage/>
      <AboutUs/>
      <Services/>
      <ExploreWorld/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactUs/>

    </>
  );
}
