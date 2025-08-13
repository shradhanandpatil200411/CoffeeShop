import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import AboutUs from "./Page/AboutUs";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useGSAP(() => {
    gsap.to("#crsr", {
      left: x,
      top: y,
      ease: "power4",
    });
  }, [x, y]);

  return (
    <div
      onMouseMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}>
      <div
        id='crsr'
        className='w-8 h-8 border border-white fixed z-20 rounded-full -translate-x-[50%] -translate-y-[50%] mix-blend-difference'></div>
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
