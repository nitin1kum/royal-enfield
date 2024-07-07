import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, FreeMode, EffectCoverflow } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { RiToolsLine } from "react-icons/ri";
import { FaMapMarked } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import 'swiper/css'
import 'swiper/css/pagination'
import itemsData from '../Data/Items_data';
import Items from './Items';
import Tags from '../Data/Tags';

const Home = () => {
  return (
    <>
      <div className="first-section relative w-full">
        <div>
          <video autoPlay muted loop className='h-[110vw] sm:h-[900px] object-cover w-full'>
            <source src='https://www.royalenfield.com/content/dam/royal-enfield/shotgun-650/landing/shotgun-650-new.mp4' type='video/mp4' />Get a better browser</video>
        </div>
        <div className='relative sm:absolute text-white sm:top-1/2 bg-black py-6 px-3 sm:bg-transparent sm:ml-48 sm:-translate-y-1/2 left-0'>
          <h2 className='sm:text-3xl text-xl font-bold'>Shotgun 650</h2>
          <p className='sm:py-3 py-6 font-semibold'>Inspired by custom. For Custom.</p>
          <button className='px-6 py-2 bg-white text-black font-semibold text-sm cursor-pointer'>Explore</button>
        </div>
      </div>
      <div className="second-section relative h-[110vw] sm:h-[700px] select-none">
        <div className="navigation-button ">
          <FaChevronLeft className='text-1xl absolute h-full flex items-center ml-3 z-10 navigation-prev-button  cursor-pointer text-white' />
          <FaChevronRight className='text-1xl absolute h-full flex items-center mr-3 z-10 right-0 navigation-next-button cursor-pointer  text-white' />
        </div>
        <Swiper
          freeMode={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          speed={1000}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: '.navigation-next-button',
            prevEl: '.navigation-prev-button'
          }}
          pagination={true}
          className='h-full w-full'
        >
          <SwiperSlide>
            <div className='relative'>
              <div className="details absolute bottom-1/3 font-medium left-20 z-10 text-black px-4 py-2 bg-white">
                Know More
              </div>
              <img className='h-[110vw] sm:h-[700px] w-full object-cover' src="images/himalayan-home-motorcycle.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[110vw] sm:h-[700px]'>
              <img className='h-full w-full object-cover' src="images/gma-home.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[110vw] sm:h-[700px]'>
              <img className='h-full w-full object-cover' src="images/shotgun-650-motorcycle.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[700px]'>
              <img className='h-full w-full object-cover' src="images/reown.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[110vw] sm:h-[700px]'>
              <img className='h-full w-full object-cover' src="images/bullet-350-new.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="news-section">
        <div className='bg-zinc-900 py-4 text-center text-white font-semibold text-2xl'>
          News And Media
        </div>
        <div className="news-container gap-0">
          <Swiper
            modules={[FreeMode, Navigation]}
            freeMode={true}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                loop: 'false'
              },
              650: {
                slidesPerView: 2,
                loop: 'false'

              }
            }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className='relative h-[250px] overflow-hidden'>
                <img className='h-full w-full object-cover brightness-75 hover:scale-[1.15] transition-all duration-1000 ease-in-out' src="images/wing-man-new-banner.jpeg" alt="" />
                <h2 className='absolute bottom-0 font-bold text-white text-lg m-4'>Royal Enfield Himalayan 350 : First Ride </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[250px] overflow-hidden'>
                <img className='h-full w-full object-cover brightness-75 hover:scale-[1.15] transition-all duration-1000 ease-in-out' src="images/service-cost-calculator.jpg" alt="" />
                <h2 className='absolute bottom-0 font-bold text-white text-lg m-4'>Royal Enfield Himalayan 350 : First Ride </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[250px] overflow-hidden'>
                <img className='h-full w-full object-cover brightness-75 hover:scale-[1.15] transition-all duration-1000 ease-in-out' src="images/shotgun-650-motorcycle.jpg" alt="" />
                <h2 className='absolute bottom-0 font-bold text-white text-lg m-4'>Royal Enfield Himalayan 350 : First Ride </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[250px] overflow-hidden'>
                <img className='h-full w-full object-cover brightness-75 hover:scale-[1.15] transition-all duration-1000 ease-in-out' src="images/reown.jpg" alt="" />
                <h2 className='absolute bottom-0 font-bold text-white text-lg m-4'>Royal Enfield Himalayan 350 : First Ride </h2>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
      <div className="third-section">
        {itemsData.map((data,index) => {
          return (
            <Items data={data} key={index} id={index} />
          )
        })}
      </div>
      <div className="fourth-section">
        <div className='bg-zinc-900 py-4 text-center text-white font-semibold text-2xl'>Popular Tags</div>
        <div className="tags-container relative">
        <div className="tag-navigation-button ">
          <FaChevronLeft className='text-[12px]  absolute h-full flex items-center ml-3 z-10 tag-navigation-prev-button  cursor-pointer text-white' />
          <FaChevronRight className='text-[12px] absolute h-full flex items-center mr-3 z-10 right-0 tag-navigation-next-button cursor-pointer  text-white' />
        </div>
          <Swiper
            loop={true}
            slidesPerView={1}
            breakpoints={{
              1024:{
                slidesPerView: 4
              },
              750:{
                slidesPerView: 3
              },
              500:{
                slidesPerView:2
              }
            }}
            modules={[Navigation]}
            navigation={{
              nextEl:".tag-navigation-next-button",
              prevEl:".tag-navigation-prev-button"
            }}
          >
            {Tags.map((data, index) => {
              return (
                <SwiperSlide>
                  <div className='w-full h-96'>
                    <Swiper
                      autoplay={{
                        delay: (4000 + 50 * index)
                      }}
                      loop={true}
                      modules={[Autoplay]}
                    >
                      {data.data.map((items => {
                        return (
                          <SwiperSlide>
                            <div className='relative h-full w-full text-white hover:text-hover cursor-pointer'>
                              <img className='w-full h-96 object-cover brightness-75' src={items.img_link} alt="" />
                              <div className='absolute flex justify-center items-center text-white hover:text-white font-bold text-3xl top-0 h-full w-full'>
                                #{items.social_handle}
                              </div>
                              <div className="social-handle absolute bottom-0 flex justify-end items-center py-4 text-lg font-semibold  bg-gray-950 bg-opacity-70 w-full">
                                @{items.heading} <RiInstagramFill className='h-8 w-8 mx-4 hover:text-sky-800' />
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                      )}

                    </Swiper>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="fifth-section grid sm:grid-cols-3 grid-cols-2 bg-white sm:bg-black p-3 sm:p-10 sm:px-24 sm:gap-6 gap-3 lg:bg-zinc-900 text-black sm:text-gray-400">
        <div className='flex justify-center items-center flex-col cursor-auto bg-gray-100  sm:bg-zinc-900 p-2'>
          <TbHandClick className='sm:h-10 h-6 w-6 sm:w-10 sm:my-4 my-2' />
          <span className='flex sm:mr-6 mr-2 text-center items-center hover:text-hover transition-all duration-500'>Book a Test Ride <FaChevronRight className='ml-2 h-3 w-3' /></span>
        </div>
        <div className='flex justify-center items-center flex-col cursor-pointer bg-gray-100 sm:bg-zinc-900 p-2'>
          <FaMapMarked className='sm:h-10 h-6 w-6 sm:w-10 sm:my-4 my-2' />
          <span className='flex items-center sm:mr-6 mr-2 text-center hover:text-hover transition-all duration-500'>Find a Store<FaChevronRight className='ml-2 h-3 w-3' /></span>
        </div>
        <div className='flex justify-center items-center flex-col cursor-pointer bg-gray-100 sm:bg-zinc-900 p-2'>
          <RiToolsLine className='sm:h-10 h-6 w-6 sm:w-10 sm:my-4 my-2 text-xs' />
          <span className='flex  items-center sm:mr-6 mr-2 text-center hover:text-hover transition-all duration-500'>Book a Sevice<FaChevronRight className='ml-2 h-3 w-3' /></span>
        </div>
        <div className='flex justify-center sm:hidden items-center flex-col cursor-pointer bg-gray-100 am:bg-zinc-900 p-2'>
          <GiPathDistance className='sm:h-10 h-6 w-6 sm:w-10 sm:my-4 my-2 text-xs' />
          <span className='flex  items-center sm:mr-6 mr-2 text-center hover:text-hover transition-all duration-500'>Ride Out<FaChevronRight className='ml-2 h-3 w-3' /></span>
        </div>
      </div>
    </>
  )
}

export default Home 