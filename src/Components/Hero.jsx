import React from "react";

function Hero() {
  return (
    <>
      <div className='bg-[#d8d9db] relative  h-screen px-20 overflow-auto'>
        <div className='w-7/12 relative z-50 '>
          <h1 className='font-[montilla] text-6xl  font-semibold tracking-wide  leading-[4.5rem] '>
            Good Coffee Will Always Find The Audience
          </h1>
          <p className='font-[montilla] my-10'>
            We provide a variety of unique and Best Coffee
          </p>
          <div className='my-3'>
            <button className='border-amber-400 border px-4 py-2 text-xl cursor-pointer rounded-lg text-white font-semibold'>
              Order Now
            </button>
          </div>
        </div>
        <div className='absolute z-10 -left-65 rotate-12 -top-30 '>
          <img
            className='h-[550px] opacity-20 '
            src='/img/coffee-cup-bg.png'
            alt='img'
          />
        </div>
        <div className='absolute right-0 -top-16 flex w-5/12'>
          {/* <div>
            <img className=' ' src='/img/hero-cup-img-1.png' alt='img' />
          </div>
          <div>
            <img className=' ' src='/img/hero-cup-img-2.png' alt='img' />
          </div> */}
          <img src='/img/coffee-cup-hero-2.png' alt='coffee-cup' />
        </div>
        <div className='absolute z-10 right-0 rotate-12 -top-50 '>
          <img
            className='h-[350px] opacity-20 '
            src='/img/coffee-cup-bg.png'
            alt='img'
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
