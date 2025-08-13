import MainButton from "./MainButton";

function CarouselCard({ name, img, description, price }) {
  return (
    <>
      <div className='carousel-item'>
        <div className='bg-white rounded-2xl text-black lg:h-[550px] md:h-[550px] h-[600px] flex flex-col  items-center lg:w-[90%] md:w-[90%] '>
          <div className='w-full h-[60%]'>
            <img
              src={img}
              alt='Hot-coffee'
              className='w-full h-full rounded-t-2xl '
            />
          </div>
          <div className='px-4 py-4'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>{description}</p>
          </div>
          <div className='flex justify-between w-full items-center text-ellipsis px-4 py-2'>
            <p className='font-bold text-2xl'>{price}</p>
            <MainButton name='Order Now' />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
