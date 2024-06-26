import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrackRecord from "../components/TrackRecord";
import ScrollToTop from "../components/ScrollToTop";
import Testimonial from "../components/Testimonial";
import Feedback from "../components/Feedback";
import ActiveSlider from "../components/ActiveSlider";
import Countries from "../components/Countries";
import Universities from "../components/Universities";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
// import WhyUs from "../components/WhyUs";
import Map from "../components/Map";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrackRecord />
      <ScrollToTop />
      <Testimonial />
      <Feedback />
      <ActiveSlider />
      <Countries />
      {/* <WhyUs /> */}
      <Universities />
      <FAQ />
      <Map />
      <Questions />
      <Footer />
    </main>
  );
};

export default Home;
