import React from "react";

function MainButton({ name }) {
  return (
    <div className='relative group w-40 h-12  cursor-pointer border border-[#ff5300] rounded-lg overflow-hidden'>
      <img
        className='-left-40 group-hover:left-0 transition-all duration-150 ease-in-out absolute w-48 h-12 text-center   pr-4 '
        src='/img/button-bg.png'
        alt='img'
      />
      <button className='absolute top-[50%] cursor-pointer left-[37%] -translate-x-[30%]  -translate-y-[50%] text-orange-500 group-hover:text-white font-semibold text-lg'>
        {name}
      </button>
    </div>
  );
}

export default MainButton;
