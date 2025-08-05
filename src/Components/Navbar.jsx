import React from "react";
import { navList } from "../Constance";

function Navbar() {
  return (
    <>
      <div className='flex justify-between items-start py-10 bg-[#d8d9db] px-14 h-40'>
        <div className='flex items-center'>
          <img className='w-28 h-20' src='./img/logo-2.png' alt='logo' />
          <span>Coffee</span>
        </div>
        <div className='bg-white px-10 py-4 rounded-full shadow-2xl shadow-gray-500'>
          <ul className='flex gap-10'>
            {navList.map((nav) => (
              <li
                className='cursor-pointer font-bold hover:text-orange-400'
                key={nav.id}>
                {nav.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Card</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
