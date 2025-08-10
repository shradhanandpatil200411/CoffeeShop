import { breakfast, specialCoffee } from "../utils/data";
import CarouselContainer from "../Components/CarouselContainer";
import { useState } from "react";

function BreakfastContainer() {
  const [breakfastCategory, setBreakfastCategory] = useState(0);

  return (
    <>
      <div className='mt-32 '>
        <div className='text-center'>
          <h1 className='text-6xl font-bold'>Our Other Breakfast Iteam</h1>
        </div>
        <div className='mt-5 border-b-2 border-white'>
          <nav>
            <ul className='flex justify-around'>
              {breakfast[0].breakfastNav.map((nav, i) => (
                <li
                  key={i}
                  className='cursor-pointer hover:bg-[#ff5300] px-2 rounded-t-lg '
                  onClick={() => setBreakfastCategory(i)}
                  style={{
                    backgroundColor: breakfastCategory == i ? "#ff5300" : "",
                  }}>
                  {nav}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='mt-10'>
          <CarouselContainer productsDetails={specialCoffee} />
        </div>
      </div>
    </>
  );
}

export default BreakfastContainer;
