import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import AboutUs from "./Page/AboutUs";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
}

export default App;
