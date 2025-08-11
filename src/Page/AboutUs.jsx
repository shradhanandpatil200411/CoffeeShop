import { useGSAP } from "@gsap/react";
import { aboutUsData } from "../utils/data";
import gsap from "gsap";
import MainButton from "../Components/MainButton";
import { SplitText } from "gsap/all";
import SpecialCoffee from "./SpecialCoffee";
import BreakfastContainer from "./BreakfastContainer";

function AboutUs() {
  useGSAP(() => {
    const tl = gsap.timeline();
    const split = SplitText.create(".about-text", {
      type: "chars,words,lines",
    });
    tl.from("#about-us", {
      scrollTrigger: {
        trigger: "#about-us",
        markers: false,
        start: "-200 center",
        end: "center center",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
    });

    tl.from(split.words, {
      scrollTrigger: {
        trigger: ".about-text",
        start: "-200 center",
        end: "top center",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      autoAlpha: 0,
      stagger: {
        amount: 0.05,
        from: "start",
      },
    });
  }, []);
  return (
    <>
      <div className='relative bg-[#1b1b1d] text-white  w-full  lg:px-20 md:px-20 px-5 py-20 overflow-hidden'>
        <div className='lg:flex md:flex flex flex-wrap lg:flex-nowrap md:flex-nowrap lg:gap-10 md:gap-10 gap-10'>
          {aboutUsData.map((details) => (
            <div
              id='about-us'
              key={details.id}
              className='leading-6 z-20 lg:w-1/2 md:w-1/2 w-5/12 flex flex-col items-center lg:items-start'>
              <div className='bg-[#262536] w-fit rounded-lg'>
                <img
                  className='w-16 px-2 py-2'
                  src={details.icon}
                  alt={details.name}
                />
              </div>
              <div className='mt-2 text-center lg:text-start w-fit'>
                <h1 className='font-bold text-sm  uppercase lg:text-lg md:text-lg'>
                  {details.name}
                </h1>
                <p className='hidden lg:block'>{details.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='relative flex flex-col-reverse lg:flex-row md:flex-row mt-10 w-full gap-10 z-20'>
          <div className=' lg:w-1/2 md:w-1/2 w-full '>
            <img
              className='w-full rounded-2xl'
              src='/img/about-us-img.png'
              alt='img'
            />
          </div>
          <div className='lg:w-1/2 md:w-1/2 w-full flex flex-col gap-5 text-center mt-5'>
            <h1 className='font-bold md:font-bold lg:text-5xl md:text-5xl text-2xl '>
              Best Coffee House In Your Home Town
            </h1>
            <p className='about-text font-medium text-lg leading-5 tracking-tight'>
              Our incredibly rate come from humble beginnings in yemen, where
              decades of political turmoil once forced local farmers to start
              growing khat, a narcotic native to the Arabian Peninsula.
            </p>
            <p className='about-text font-medium text-lg leading-5 tracking-tight'>
              The Dawoodi Bohara Community changed this, removing all the khat
              plants and replacing them with coffee, bringing this humble brew
              black to its roots.
            </p>
            <MainButton name='Read More' />
          </div>
        </div>
        <div className='absolute -right-20 top-42 rotate-12'>
          <img
            className='w-96 opacity-60'
            src='/img/coffee-cup-bg.png'
            alt='bg-img'
          />
        </div>
        <div>
          <SpecialCoffee />
        </div>
        <div>
          <BreakfastContainer />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
