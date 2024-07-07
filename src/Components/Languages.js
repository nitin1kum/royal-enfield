import React from 'react'

const Languages = () => {
  return (
    <div className='w-full grid place-content-center h-screen overflow-y-scroll bg-black px-2 sm:py-16 sm:px-6'>
        <h1 className='sm:text-3xl font-bold text-white mb-16 w-full text-xl text-center'>Select Region</h1>
        <div className='h-fit w-full sm:w-[90%] lg:w-[70%] m-auto justify-center flex flex-wrap items-center gap-5 gap-y-20 sm:gap-10'>
            <div className='h-fit w-[45%] sm:w-[30%] lg:w-[20%]'>
                <img className='w-full h-full  object-contain'  src="https://www.royalenfield.com/content/dam/royal-enfield/india/maps/mobile/small/GLOBAL_MOB.png" alt="bullet-logo" />
                <p className='text-white font-medium my-2 text-center cursor-pointer hover:text-hover uppercase'>GLOBAL</p>
            </div>
            <div className='h-fit w-[45%] sm:w-[30%] lg:w-[20%]'>
                <img className='w-full h-full  object-contain' src="https://www.royalenfield.com/content/dam/royal-enfield/india/maps/mobile/small/GLOBAL_MOB.png" alt="bullet-logo" />
                <p className='text-white font-medium my-2 text-center cursor-pointer hover:text-hover uppercase'>Asia specific</p>
            </div>
            <div className='h-fit w-[45%] sm:w-[30%] lg:w-[20%]'>
                <img className='w-full h-full  object-contain' src="https://www.royalenfield.com/content/dam/royal-enfield/india/maps/mobile/small/GLOBAL_MOB.png" alt="bullet-logo" />
                <p className='text-white font-medium my-2 text-center cursor-pointer hover:text-hover uppercase'>europe</p>
            </div>
            <div className='h-fit w-[45%] sm:w-[30%] lg:w-[20%]'>
                <img className='w-full h-full  object-contain' src="https://www.royalenfield.com/content/dam/royal-enfield/india/maps/mobile/small/GLOBAL_MOB.png" alt="bullet-logo" />
                <p className='text-white font-medium my-2 text-center cursor-pointer hover:text-hover uppercase'>americas</p>
            </div>
            <div className='h-fit w-[45%] sm:w-[30%] lg:w-[20%]'>
                <img className='w-full h-full  object-contain' src="https://www.royalenfield.com/content/dam/royal-enfield/india/maps/mobile/small/GLOBAL_MOB.png" alt="bullet-logo" />
                <p className='text-white font-medium my-2 text-center cursor-pointer hover:text-hover uppercase'>middle ease & africa</p>
            </div>
        </div>
    </div>
  )
}

export default Languages