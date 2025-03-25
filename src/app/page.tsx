import AboutUs from "./components/About";
import LandingPage from "./components/Landing";
import ExploreWorld from "./components/Hotels";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import CarRental from "./components/CarRental";
import HeroSection from "./components/Landing";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
     <HeroSection/>
      <AboutUs/>
      <Services/>
      <ExploreWorld/>
      <CarRental/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
