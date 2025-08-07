import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainButton from "./MainButton";
import { SplitText } from "gsap/all";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    const split = SplitText.create("#tag-line", {
      type: "chars,words,line",
    });

    tl.to("#hero-img-1", {
      y: 900,
      duration: 1.2,
      ease: "bounce.out",
    });

    tl.to("#hero-img-2", {
      x: -400,
      duration: 1,
      ease: "elastic.out",
    });
    tl.from(split.chars, {
      x: 2,
      autoAlpha: 0,
      stagger: 0.05,
    });
  }, []);
  return (
    <>
      <div className='bg-[#d8d9db] relative pt-40 h-[620px] px-20 overflow-hidden '>
        <div className='w-7/12 relative z-20 '>
          <h1 className='font-[montilla] text-6xl  font-semibold tracking-wide  leading-[4.5rem] '>
            Good Coffee Will Always Find The Audience
          </h1>
          <p id='tag-line' className='font-[montilla] my-10'>
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
        <div className='absolute right-0  h-full top-20 flex w-5/12'>
          <img
            id='hero-img-1'
            className='w-8/12 absolute -top-[150%] z-10'
            src='/img/hero-cup-img-1.png'
            alt='coffee-cup'
          />
          <img
            id='hero-img-2'
            className='absolute -right-96  w-6/12 pt-50 '
            src='/img/hero-cup-img-2.png'
            alt='coffee-cup'
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
