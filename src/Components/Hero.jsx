import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainButton from "./MainButton";
import { SplitText } from "gsap/all";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#hero-img-2", {
      y: -200,
      duration: 2,
      delay: 0.5,
      ease: "elastic.out",
    });

    tl.from("#splash-img-2 , #splash-img-1", {
      opacity: 0,
      ease: "sine.out",
      duration: 1,
    });
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
            className='font-[montilla] lg:my-10 md:my-10 my-5 w-8/12 text-sm lg:text-lg md:text-lg'>
            We provide a variety of unique and Best Coffee
          </p>
          <MainButton name='Order Now' />
        </div>
        <div
          id='bg-cup-img'
          className='absolute z-10 -left-[22%] rotate-12 top-25'>
          <img
            className='h-[550px] opacity-15 '
            src='https://ik.imagekit.io/shradhanandpatil/Coffee/img/coffee-cup-bg.png?updatedAt=1754923689042'
            alt='img'
          />
        </div>
        <div className='absolute lg:5/12 md:5/12 right-0 h-full top-20 flex w-5/12'>
          <img
            id='splash-img-1'
            src='https://ik.imagekit.io/shradhanandpatil/Coffee/img/image%20(2).png?updatedAt=1755065609119'
            alt='img'
            className='absolute w-full top-20 lg:top-0 lg:right-0 lg:rotate-0 right-2 -rotate-12'
          />
          <img
            id='hero-img-2'
            className='absolute lg:right-13 md:right-13 right-0 z-20 lg:w-9/12 md:w-9/12 w-full  pt-28 '
            src='https://ik.imagekit.io/shradhanandpatil/Coffee/img/hero-cup-img-2.png?updatedAt=1754923689854'
            alt='coffee-cup'
          />
          <img
            id='splash-img-2'
            src='https://ik.imagekit.io/shradhanandpatil/Coffee/img/image%20(3).png?updatedAt=1755065608969'
            alt='img'
            className='absolute top-44 z-20'
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
