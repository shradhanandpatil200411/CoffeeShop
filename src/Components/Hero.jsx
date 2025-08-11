import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainButton from "./MainButton";
import { SplitText } from "gsap/all";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    // const split = SplitText.create("#tag-line", {
    //   type: "chars,words,line",
    // });

    // tl.to("#hero-img-1", {
    //   y: 1000,
    //   duration: 1.2,
    //   ease: "bounce.out",
    // });

    tl.to("#hero-img-2", {
      x: -450,
      duration: 2,
      delay: 0.5,
      ease: "elastic.out",
    });

    tl.from("#splash-img-1", {
      opacity: 1,
      ease: "power1",
      duration: 1,
    });

    // tl.from(split.chars, {
    //   x: 2,
    //   autoAlpha: 0,
    //   stagger: 0.05,
    // });
  }, []);
  return (
    <>
      <div className='bg-[#d8d9db] relative lg:pt-40 md:pt-40 pt-30 lg:h-[620px] md:h-[620px] h-[500px] lg:px-20 md:px-20 px-5 overflow-hidden '>
        <div className='lg:w-7/12 md:7/12 relative z-20 w-full '>
          <h1 className='font-[montilla] lg:text-6xl md:text-6xl text-xl  font-semibold tracking-wide  lg:leading-[4.5rem] md:leading-[4.5rem] '>
            Good Coffee Will Always Find The Audience
          </h1>
          <p
            id='tag-line'
            className='font-[montilla] lg:my-10 md:my-10 my-5 w-8/12 '>
            We provide a variety of unique and Best Coffee
          </p>
          <MainButton name='Order Now' />
        </div>
        <div
          id='bg-cup-img'
          className='absolute z-10 -left-[22%] rotate-12 top-25'>
          <img
            className='h-[550px] opacity-15 '
            src='/img/coffee-cup-bg.png'
            alt='img'
          />
        </div>
        <div className='absolute lg:5/12 md:5/12 right-0 h-full top-20 flex w-5/12'>
          {/* <img
            id='hero-img-1'
            className='w-8/12 absolute -top-[170%] z-10'
            src='/img/hero-cup-img-1.png'
            alt='coffee-cup'
          /> */}
          <img
            id='#splash-img-1'
            src='/img/image (2).png'
            alt='img'
            className='absolute '
          />
          <img
            id='hero-img-2'
            className='absolute -right-96 w-9/12 pt-28 -rotate-12 '
            src='/img/hero-cup-img-2.png'
            alt='coffee-cup'
          />
          <img
            id='#splash-img-2'
            src='/img/image (3).png'
            alt='img'
            className='absolute top-44'
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
