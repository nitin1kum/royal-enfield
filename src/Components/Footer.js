import React, { useState } from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { FaChevronDown} from "react-icons/fa";
import footerData from '../Data/Footer_data';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [footerNav, setFooterNav] = useState(0);
  return (
    <div className='h-fit w-screen bg-footer-bg px-2 sm:px-6'>
      <div className="social-handles p-6 flex justify-center sm:justify-end sm:border-b border-gray-600">
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <p>Join The conversation</p>
          <div className="social-logo flex gap-4">
          <IoLogoFacebook  className='h-7 w-7 hover:fill-sky-900' />
          <IoLogoTwitter   className='h-7 w-7'/>
          <IoLogoYoutube   className='h-7 w-7 hover:fill-hover'/>
          <IoLogoInstagram className='h-7 w-7 text-transparent insta-logo'/>
          <IoLogoLinkedin  className='h-7 w-7 hover:fill-sky-700' />
          </div>
        </div>
      </div>
      <div className="footer-body sm:border-b sm:border-gray-600 p-3 sm:p-6 grid  sm:gap-8 lg:grid-cols-4 sm:grid-cols-4">
        {footerData.map((data,index1)=>{
          return(
            <div>
            <h2 className={footerNav === index1 +1 ? 'text-base sm:text-xl text-hover sm:text-black font-bold my-3 sm:my-4 flex gap-2 items-center'  : 'text-base sm:text-xl  font-medium my-3 sm:my-4 flex gap-2 items-center' }onClick={e=>{
              if(footerNav){
                setFooterNav(0)
              }
              else{
                setFooterNav(index1 + 1)
              }
              }}><FaChevronDown className={footerNav === index1+1 ? "text-[12px] sm:hidden -rotate-180 transition-all duration-500" : "text-[12px] sm:hidden rotate-0 transition-all duration-500"}/>{data.heading}</h2>
            <ul className={footerNav === index1+1 ? "block px-6":'hidden sm:block'}>
              {data.li.map((items,index2)=>{
                return(
                  <li className={'text-[13px] font-medium text-gray-600 leading-7 transition-all duration-100 ease-in-out hover:text-hover'}><Link>{items}</Link></li>
                );
              })}
            </ul>
          </div>
          );
        })}
      </div>
      <div className="footer-end flex flex-col sm:flex-row sm:p-6 p-3 justify-between">
        <p className='sm:text-xs font-medium text-[10px]'>© {new Date().getFullYear()}. Royal Enfield. | *T&C apply. Images shown here may differ from the actual product.</p>
        <div>
          <ul className='flex sm:text-xs text-[8px] mt-2 sm:mt-0'>
            <li className='hover:text-hover transition-all duration-100 border-r pr-2 border-gray-600'><Link>Private Import Policy</Link></li>
            <li className='hover:text-hover transition-all duration-100 border-r px-2 border-gray-600'><Link>Privacy</Link></li>
            <li className='hover:text-hover transition-all duration-100 border-r px-2 border-gray-600'><Link>Terms & Conditions</Link></li>
            <li className='hover:text-hover transition-all duration-100 pl-2'><Link>CookiesSitemap</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer