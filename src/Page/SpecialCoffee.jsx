import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CarouselContainer from "../Components/CarouselContainer";
import { specialCoffee } from "../utils/data";

function SpecialCoffee() {
  useGSAP(() => {
    gsap.from(".coffee-beans-left", {
      scrollTrigger: {
        trigger: "#coffee-product",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
      x: -300,
      duration: 0.5,
      ease: "power1.inOut",
      rotate: 360,
      scale: 4,
    });
    gsap.from(".coffee-beans-right", {
      scrollTrigger: {
        trigger: "#coffee-product",
        start: "center center",
        end: "bottom 400",
        scrub: true,
      },
      x: 300,
      duration: 0.5,
      ease: "power1.inOut",
      rotate: 360,
      scale: 4,
    });
    gsap.to(".coffee-leaves", {
      scrollTrigger: {
        trigger: "#coffee-product",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
      scale: 2,
      duration: 2,
      ease: "power1",
    });
  }, []);

  return (
    <>
      <div id='coffee-product' className=' relative mt-20 '>
        <div className=' text-center  my-10'>
          <h1 className='text-5xl font-bold'>Our Special Coffee</h1>
        </div>
        <div className='absolute -left-40 top-50 -rotate-12'>
          <img
            className='w-96 opacity-60'
            src='/img/coffee-cup-bg.png'
            alt='bg-img'
          />
        </div>
        <div>
          <CarouselContainer productsDetails={specialCoffee} />
        </div>
        <div className='coffee-beans-left absolute top-0 -left-25'>
          <img
            className='w-60  rotate-45'
            src='/img/coffee-beans.png'
            alt='img'
          />
        </div>
        <div className='coffee-beans-right absolute -bottom-30 right-0'>
          <img
            className='w-40 z-40  rotate-12'
            src='/img/coffee-beans.png'
            alt='img'
          />
        </div>
        <div className='coffee-leaves absolute z-0 top-20 left-80 '>
          <img
            className='w-96 -z-10'
            src='/img/coffee-multi-Leaves.png'
            alt='leaves-img'
          />
        </div>
      </div>
    </>
  );
}

export default SpecialCoffee;
