import React from 'react'

import PartnerCompany from './PartnerCompany'
import logo1 from "../assets/images/logo1.svg"
import logo2 from "../assets/images/logo2.svg"
import logo3 from "../assets/images/logo3.svg"
import logo4 from "../assets/images/logo4.svg"

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";


const PartnerCompanies = () => {
  return (
    <div className='partner-companies'>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        className="mySwiper"

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
         
        }}
      >
        <SwiperSlide >
        <PartnerCompany  companyLogo={logo1}/>
        </SwiperSlide>
        <SwiperSlide >
        <PartnerCompany  companyLogo={logo2}/>
        </SwiperSlide>
        <SwiperSlide>
        <PartnerCompany  companyLogo={logo3}/>
        </SwiperSlide>
        <SwiperSlide>
        <PartnerCompany  companyLogo={logo4}/>
        </SwiperSlide>
      </Swiper>
    </div>
   

  )
}

export default PartnerCompanies