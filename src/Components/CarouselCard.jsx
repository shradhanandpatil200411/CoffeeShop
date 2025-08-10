import MainButton from "./MainButton";

function CarouselCard({ name, img, description, price }) {
  return (
    <>
      <div className='carousel-item'>
        <div className='bg-white rounded-2xl text-black px-4 py-4 h-[460px] flex flex-col justify-around items-center w-[90%]'>
          <div className=' '>
            <img src={img} alt='Hot-coffee' className=' w-[200px] h-[250px] ' />
          </div>
          <div className=' '>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>{description}</p>
          </div>
          <div className='flex justify-between w-full items-center text-ellipsis '>
            <p className='font-bold text-2xl'>{price}</p>
            <MainButton name='Order Now' />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
