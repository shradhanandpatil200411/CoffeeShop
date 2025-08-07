import { useGSAP } from "@gsap/react";
import { navList } from "../utils/data";
import gsap from "gsap";

function Navbar() {
  useGSAP(() => {
    gsap.from("#bg-cup-2", {
      x: 200,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".nav-text", {
      scrollTrigger: {
        trigger: "#about-us",
        start: "-200 top",
        end: "bottom bottom",

        scrub: true,
      },
      color: "white",
      duration: 0.5,
      ease: "power1",
    });
  }, []);
  return (
    <>
      <div className='fixed flex z-50 w-full  justify-between items-center backdrop-blur-lg px-20 h-20 overflow-hidden'>
        <div className='flex items-center'>
          <img className='w-28 h-20' src='./img/logo-2.png' alt='logo' />
          <div className='font-poppins-bold font-bold text-3xl'>
            <span className='nav-text font-roboto'>Cof</span>
            <span className='text-orange-500 font-roboto'>fee</span>
          </div>
        </div>
        <div className='bg-white px-10 py-4 rounded-full '>
          <ul className='flex gap-10'>
            {navList.map((nav) => (
              <li
                className='cursor-pointer hover:text-orange-400 font-poppins font-bold tracking-wide transition-all duration-300 ease-in-out'
                key={nav.id}>
                {nav.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='items-center'>
          <h1 className='nav-text font-bold text-xl'>Card</h1>
        </div>
        {/* <div id='bg-cup-2' className='absolute z-10 -right-25  top-0 '>
          <img
            className='h-[190px] opacity-20 '
            src='/img/coffee-cup-bg.png'
            alt='img'
          />
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
