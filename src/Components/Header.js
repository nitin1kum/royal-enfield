import React, { useEffect, useState } from "react";
import {
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoSearchOutline,
  IoCloseOutline,
  IoChevronBackOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiAccountCircleLine } from "react-icons/ri";
import Login from "./Login";
import Languages from "./Languages";
import NavTags from '../Data/NavTags';
import NavCards from "./NavCards";


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [navTag, setNavTag] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [show, setShow] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const [popup, setPopup] = useState({
    login: false,
    language: false,
  });
  let scrollPos = 0;

  const handeClick = (e) => {
    if (!showNav) {
      const pos = e.currentTarget;
      if (scrollPos > pos.scrollY) {
        setShow(true)
      }
      else if (scrollPos < pos.scrollY) {
        setShow(false)
      }
      scrollPos = window.scrollY
    }
  }

  const Cards = (data) => {
    console.log(data)
    return (
      <div className="card bg-zinc-800 my-3 overflow-hidden rounded-lg">
        <img className="w-full h-80 object-cover" src={data.data.img_link} alt="" />
        <h2 className="text-center font-semibold m-2">{data.data.name}</h2>
        <div className="flex justify-center gap-3 m-3">
          <p className="py-1 px-5 bg-hover text-white">Explore</p>
          <p className="py-1 px-5  border-2 border-white">Book a Test Ride</p>
        </div>
      </div>
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => handeClick(e))
    return (() => {
      window.removeEventListener('scroll', (e) => handeClick(e))
    })
  }, [scrollPos])

  return (
    <>
      <div className={!showNav ? (show ? "header-container bg-nav-bg fixed top-0 z-50 w-full transition-all duration-700 delay-100 ease-in-out h-fit text-base text-white flex justify-between items-center py-3 xl:py-6 sm:py-3 px-3 sm:px-3 lg:px-6 font-medium" : "header-container sm:px-3 py-3 lg:px-6 transition-all duration-700 delay-100 ease-in-out items-center bg-nav-bg fixed -top-24 z-50 w-full  h-fit text-base text-white flex justify-between px-3 font-medium"): "header-container bg-nav-bg fixed top-0 z-50 w-full transition-all duration-700 delay-100 ease-in-out h-fit text-base text-white flex justify-between items-center py-3 xl:py-6 sm:py-3 px-3 sm:px-3 lg:px-6 font-medium"}>
        <Link className="logo xl:h-6 sm:h-3 lg:h-5 h-3">
          <img className="h-full w-full object-contain" src="/images/logo.svg" alt="" />
        </Link>
        <div className="header-items hidden sm:block">
          <ul className="flex xl:gap-6 lg:gap-3 sm:gap-2 items-center">
            <li>
              <Link className="lg:text-xs xl:text-base sm:text-[10px]">Motorcycles</Link>
            </li>
            <li className="relative drop-down">
              <div>
                <Link className="flex items-center gap-1 lg:gap-2 lg:text-xs xl:text-base sm:text-[10px]">
                  Shop The Lock
                  <i>
                    <IoChevronDownOutline />
                  </i>
                </Link>
              </div>
              <ul className="absolute pt-6 bg-nav-bg w-min p-2 gap-4 leading-4 hidden">
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Genuine Motorcycle Accessories</Link>
                </li>
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Apparel</Link>
                </li>
              </ul>
            </li>
            <li className="relative drop-down">
              <div>
                <Link className="flex items-center gap-1 lg:gap-2 lg:text-xs xl:text-base sm:text-[10px]">
                  Service
                  <i>
                    <IoChevronDownOutline />
                  </i>
                </Link>
              </div>
              <ul className="absolute pt-6 bg-nav-bg w-min p-2 leading-4 hidden">
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Overview</Link>
                </li>
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Service Cost Calculator</Link>
                </li>
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Book a Service</Link>
                </li>
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Service History</Link>
                </li>
              </ul>
            </li>
            <li className="relative drop-down">
              <div>
                <Link className="flex items-center gap-1 lg:gap-2 lg:text-xs xl:text-base sm:text-[10px]">
                  Rides
                  <i>
                    <IoChevronDownOutline />
                  </i>
                </Link>
              </div>
              <ul className="absolute pt-6 bg-nav-bg w-min p-2 leading-4 hidden">
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Rides and Events</Link>
                </li>
                <li className="p-2">
                  <Link className="lg:text-xs xl:text-base sm:text-[10px]">Rentals</Link>
                </li>
              </ul>
            </li>
            <li className="relative drop-down">
              <div>
                <Link className="flex items-center gap-1 lg:gap-2 lg:text-xs xl:text-base sm:text-[10px]">
                  Our World
                  <i>
                    <IoChevronDownOutline />
                  </i>
                </Link>
              </div>
              <ul className="absolute pt-6 bg-nav-bg w-min p-2 leading-4 hidden">
                <li className="p-2">
                  <Link>Overview</Link>
                </li>
                <li className="p-2">
                  <Link>Custom World</Link>
                </li>
                <li className="p-2">
                  <Link>RE App</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="lg:text-xs xl:text-base sm:text-[10px]">Support </Link>
            </li>
            <li>
              <Link className="lg:text-xs xl:text-base sm:text-[10px]">Locate Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex xl:gap-6 lg:gap-3 gap-3">
          <div
            className={popup.login ? "sm:flex text-transparent sm:text-white items-center hidden xl:text-base lg:text-xs sm:text-[10px] gap-2 cursor-pointer text-hover" : "flex text-transparent sm:text-white xl:text-base sm:text-[10px] lg:text-xs items-center gap-2 cursor-pointer"}
            onClick={() => {
              document.body.style.overflowY = !popup.login ? "hidden" : "auto"
              document.body.style.height = !popup.login ? "100vh" : "auto"
              setPopup((prev) => {
                return {
                  ...prev,
                  login: !prev.login,
                  language: false
                }
              })
            }}
          >
            Login
            <i className={popup.login ? " rotate-180 transition-all text-white duration-700 ease-in-out" : "transition-all text-white duration-700 ease-in-out"}>
              <IoChevronDownOutline className="hidden sm:block" />
              <RiAccountCircleLine className="block sm:hidden h-5 w-5" />
            </i>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={(event) => {
              setSearchBar(true);
            }}
          >
            <i>
              <IoSearchOutline className="xl:h-6 xl:w-6 sm:h-3 sm:w-3 h-5 w-5" />
            </i>
          </div>
          <div className={popup.language ? "flex xl:text-base lg:text-xs text-xs items-center sm:gap-2 gap-1 cursor-pointer text-hover" : "flex text-xs items-center xl:text-base lg:text-xs gap-1 sm:gap-2 cursor-pointer"}
            onClick={() => {
              document.body.style.overflowY = !popup.language ? "hidden" : "auto"
              document.body.style.height = !popup.language ? "100vh" : "auto"
              setPopup((prev) => {
                return {
                  ...prev,
                  language: !prev.language,
                  login: false
                }
              })
            }}>
            En
            <i className={popup.language ? " rotate-180 transition-all duration-700 ease-in-out" : "transition-all duration-700 ease-in-out"}>
              <IoChevronDownOutline />
            </i>
          </div>
          <div className="relative flex items-center justify-center sm:hidden" onClick={e => {
            setShowNav(!showNav)
            document.body.style.overflowY = !showNav ? "hidden" : "auto"
            document.body.style.height = !showNav ? "100vh" : "auto"
          }}>
            {!showNav ? <RxHamburgerMenu className="h-6 w-6" /> : <IoCloseOutline className="h-6 w-6 cursor-pointer" />}
          </div>
        </div>
        <div
          className={
            searchBar
              ? "transition-all duration-500 opacity-100 flex bg-nav-bg items-center px-2  lg:w-[80%] w-full right-0 translate-x-0 absolute"
              : "transition-all duration-500 opacity-0 bg-nav-bg flex item-center right-0 lg:w-[80%] w-full translate-x-full absolute"
          }
        >
          <input
            className=" flex-grow bg-nav-bg outline-none lg:text-xs xl:text-base text-xs"
            type="text"
            placeholder="Search For Anything"
          />
          <i onClick={(event) => setSearchBar(false)}>
            <IoCloseOutline className=" h-8 w-8 cursor-pointer" />
          </i>
        </div>
      </div>


      <div className={popup.login ? "log-in" : "login-page hidden"}>
        <Login />
      </div>

      <div className={popup.language ? "language" : "language hidden"}>
        <Languages />
      </div>

      <div className={showNav ? "nav-dropdown bg-zinc-950 w-screen h-screen sm:hidden" : "nav-dropdown bg-zinc-950 w-screen sm:hidden h-screen hidden"}>
        <div className="nav-headers scroll overflow-y-scroll h-[calc(100vh-140px)]">
          <ul className="p-3 flex flex-col gap-4 pt-20 text-white " >
            <li className="px-2 py-3 bg-zinc-800 flex justify-between items-center w-full" onClick={e => {
              setShowCard(true)
              setNavTag('motorcycles')
            }}>Motorcycle <IoChevronForwardOutline /></li>
            <li className="px-2 py-3 bg-zinc-800 flex justify-between items-center w-full" onClick={e => {
              setShowCard(true)
              setNavTag('shop-the-lock')
            }}>Shop The Lock <IoChevronForwardOutline /></li>
            <li className="px-2 py-3 bg-zinc-800 flex justify-between items-center w-full" onClick={e => {
              setShowCard(true)
              setNavTag('service')
            }}>Service <IoChevronForwardOutline /></li>
            <li className="px-2 py-3 bg-zinc-800 flex justify-between items-center w-full" onClick={e => {
              setShowCard(true)
              setNavTag('rides')
            }}>Rides <IoChevronForwardOutline /></li>
            <li className="px-2 py-3 bg-zinc-800 flex justify-between items-center w-full" onClick={e => {
              setShowCard(true)
              setNavTag('our-world')
            }}>Our World <IoChevronForwardOutline /></li>
            <li className="px-2 py-3 bg-zinc-800">Support</li>
            <li className="px-2 py-3 bg-zinc-800">Locate Us</li>
          </ul>
          <div className={showCard ? "nav-cards inset-0 absolute h-fit w-full z-10 bg-zinc-950 pt-20 pb-[139.2px] px-3 text-white" : "nav-cards inset-0 absolute h-fit w-full z-10 bg-zinc-950 pt-20 pb-[139.2px] px-3 hidden text-white"}>
            <span className="flex justify-start gap-2 items-center " onClick={e => setShowCard(false)}><IoChevronBackOutline /> Back</span>
            <div id="cards-container" className="min-h-screen">
              {NavTags.map((data) => {
                if (data.header === navTag) {
                  return (
                    <>
                      {data.data.map((item, index) => {
                        return (
                          <Cards data={item} />
                        )
                      })}
                    </>
                  )
                }
              })}
            </div>
          </div>
        </div>

        <div className="bg-black w-full fixed bottom-0 z-50 p-4 text-white">
          <div className="px-2 py-3 mb-2 text-center border-2 border-white">Book a Test Ride</div>
          <div className="px-2 py-3 bg-hover text-center">Configure Now</div>
        </div>
      </div>
    </>
  );
};

export default Header;
