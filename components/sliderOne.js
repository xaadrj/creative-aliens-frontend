"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <div className="relative">
    <div className="h-full w-full">
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        className="mySwiper"
        modules={[Autoplay]}
      >
        <SwiperSlide>
            <div className="bg-white h-full pb-5">
            <div className="h-96 px-8 relative ">
            <img  className="h-full relative object-cover -mt-20 w-full" src='/images/image-5.jpg'  alt="image 5" />
            <span className="absolute bottom-5 right-0 left-0 text-center text-white text-2xl ">User Research</span>
            </div>
            <p  className="text-sm px-8 mt-3 text-gray-500"> On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche d</p>
            <a href="#" className="mt-6 uppercase text-xs font-bold flex items-center justify-center text-emerald-500 gap-1">Learn more <img className="w-3 h-3" src="/icons/arrow.svg" /></a>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="bg-white h-full pb-5">
            <div className="h-96 px-8 relative ">
            <img  className="h-full relative object-cover -mt-20 w-full" src='/images/image-6.jpg'  alt="image 6" />
            <span className="absolute bottom-5 right-0 left-0 text-center text-white text-2xl ">User Research</span>
            </div>
            <p  className="text-sm px-8 mt-3 text-gray-500"> On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche d</p>
            <a href="#" className="mt-6 uppercase text-xs font-bold flex items-center justify-center text-emerald-500 gap-1">Learn more <img className="w-3 h-3" src="/icons/arrow.svg" /></a>
            </div></SwiperSlide>
        <SwiperSlide><div className="bg-white h-full pb-5">
            <div className="h-96 px-8 relative ">
            <img  className="h-full relative object-cover -mt-20 w-full" src='/images/image-7.jpg'  alt="image 7" />
            <span className="absolute bottom-5 right-0 left-0 text-center text-white text-2xl ">User Research</span>
            </div>
            <p  className="text-sm px-8 mt-3 text-gray-500"> On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche d</p>
            <a href="#" className="mt-6 uppercase text-xs font-bold flex items-center justify-center text-emerald-500 gap-1">Learn more <img className="w-3 h-3" src="/icons/arrow.svg" /></a>
            </div></SwiperSlide>
        <SwiperSlide><div className="bg-white h-full pb-5">
            <div className="h-96 px-8 relative ">
            <img  className="h-full relative object-cover -mt-20 w-full" src='/images/image-8.jpg'  alt="image 8" />
            <span className="absolute bottom-5 right-0 left-0 text-center text-white text-2xl ">User Research</span>
            </div>
            <p  className="text-sm px-8 mt-3 text-gray-500"> On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche d</p>
            <a href="#" className="mt-6 uppercase text-xs font-bold flex items-center justify-center text-emerald-500 gap-1">Learn more <img className="w-3 h-3" src="/icons/arrow.svg" /></a>
            </div></SwiperSlide>
      </Swiper>
    </div>
    <style >
        {`
          
  .swiper {
    width: 100%;
    height: auto;
    padding-top : 40px;
  }

  .swiper-slide img {
    object-fit : cover; 
    width : 100%;
}
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: start;
  }
  
  .swiper-slide a img {
      object-fit : contain; 
      width : auto;
  }

  @media (min-width: 640px) { 
  
  .swiper-slide {
    width: 50%;
  }
  
  .swiper-slide:nth-child(2n) {
    width: 50%;
  }
  
  .swiper-slide:nth-child(3n) {
    width: 50%;
  }
}
  
        `}

        
    </style>
    </div>
  );
}

