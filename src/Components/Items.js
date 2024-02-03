import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


const Items = (props) => {
  const [fixed, setFixed] = useState(false);
  const [swiper , setSwiper] = useState(null);
  const [slideIndex , setSlideIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  let scrollPos = 0;
  const scroll = useRef();
  const handleClick = (e) => {
    let elemScroll = scroll.current.offsetTop;
    let elemHeight = scroll.current.clientHeight;
    if ((window.scrollY >= elemScroll) && (window.scrollY <= elemScroll + elemHeight)) {
      setFixed(true);
      setShowLogo(true);
    }
    else {
      setFixed(false);
    }
    if(window.scrollY <= elemScroll){
      setShowLogo(false)
    }

    const pos = e.currentTarget;
    if (scrollPos > pos.scrollY) {
      setShow(true)
    }
    else if (scrollPos < pos.scrollY) {
      setShow(false)
    }
    scrollPos = window.scrollY
  }
  useEffect(() => {
    window.addEventListener('scroll', (e) => handleClick(e))

    return () => {
      window.removeEventListener('scroll', (e) => handleClick(e))
    }
  }, [])

  return (
    <div ref={scroll}>
      <div className={fixed ? show ? "sec3-header fixed flex-col sm:flex-row sm:bg-zinc-900 sm:top-[72px] top-[49px] w-full text-white  transition-all duration-700 delay-100 ease-in-out sm:py-5 flex sm:gap-6 sm:px-6 items-center z-10" : "sec3-header w-full flex-col sm:flex-row  transition-all duration-700 delay-100 sm:bg-zinc-900 ease-in-out fixed top-0 text-white  sm:py-5 flex sm:gap-6 sm:px-6 items-center z-10" : "sec3-header w-full flex-col sm:flex-row sm:bg-zinc-900 transition-all duration-700 delay-100 ease-in-out text-white  sm:py-5 flex sm:gap-6 sm:px-6 items-center"}>
        <div className={showLogo ? "w-52 transition-all bg-zinc-900 hidden sm:block duration-700 ease-in-out overflow-hidden" : "sec3-logo w-0 hidden sm:block transition-all bg-zinc-900 duration-700 ease-in-out overflow-hidden"}>
          <img className='w-52 h-7 object-contain' src="/images/logo.svg" alt="" />
        </div>
        <h1 className='text-2xl bg-black sm:bg-zinc-900 sm:bg-none py-2 sm:py-0 sm:px-0 px-6 text-center w-full sm:w-min font-bold'>Motorcycles</h1>
        <ul className='flex bg-zinc-900  items-center py-2 sm:py-0 sm:px-0 px-0 text-sm sm:text-base w-full overflow-x-scroll scroll overflow-y-hidden'>
          {props.data.headers.map((name , index) => {
            return (
              <li className={(index >= slideIndex) ?( (slideIndex === index) ? 'font-medium cursor-default border-r-2 border-white text-hover hover:text-hover transition-all max-w-[500px] duration-200 px-6 leading-4 my-2 whitespace-nowrap' : 'font-medium cursor-pointer hover:text-hover max-w-[500px] transition-all duration-200 border-r-2 border-white px-6 leading-4 my-2 whitespace-nowrap') : "font-medium border-r-2 hover:text-hover border-white px-3 text-transparent max-w-0 overflow-hidden transition-all duration-200 leading-4 my-0 whitespace-nowrap"} onClick={e=>{
                swiper.slideTo(index);
              }}>{name}</li>
            )
          })}
        </ul>
      </div>
      <Swiper
        freeMode={true}
        speed={1000}
        onActiveIndexChange={(swiper) => {
          setSlideIndex(swiper.activeIndex)
        }}
        onSwiper={(swiper)=>{
          setSwiper(swiper);
        }}
        className='h-full w-full'
      >
        {props.data.swiper_img.map((link) => {
          return (
            <SwiperSlide>
              <div className='relative'>
                <div className="details absolute bottom-1/3 font-medium left-20 z-10 text-black px-4 py-2 bg-white">
                  Know More
                </div>
                <img className='h-[120vw] sm:h-[800px] w-full object-cover' src={link} alt="" />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Items