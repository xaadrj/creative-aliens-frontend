"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css"

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <div className="relative">
    <div className="relative mx-4  md:mr-0 md:ml-40 xl:ml-40">
    <div className="h-full w-full">
      <Swiper
       breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        740: {
          width: 648,
          slidesPerView: 2,
        },
        1224: {
          slidesPerView: 3,
        },
      }}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className="w-full text-gray-400 h-full flex flex-col items-center">
            <div className="w-full group relative flex items-center justify-center">
            <img className="opacity-100 group-hover:opacity-0 " src="/images/image-9.jpg" alt="image-9"/>
            <div className="absolute p-4 xl:p-10 justify-center bg-gray-200 text-gray-900 text-left h-full w-full flex opacity-0 group-hover:opacity-100 items-start flex-col">
              <h1 className="text-2xl lg:text-3xl xl:text-5xl">8 Year Experience</h1>
             <p className="mt-3 xl:mt-6 text-light text-sm md:text-lg lg:text-xl">
          On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum sur un texte              </p>
            </div>
            </div>
            <h1 className="text-2xl lg:text-5xl uppercase mt-10 tracking-wider ">
              <i>J</i>ohn
            </h1>
           <p className="uppercase font-light md:text-2xl mt-4">product manager</p>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full text-gray-400 h-full flex flex-col items-center">
            <div className="w-full group relative flex items-center justify-center">
            <img className="opacity-100 group-hover:opacity-0 " src="/images/image-10.jpg" alt="image-9"/>
            <div className="absolute p-4 xl:p-10 justify-center bg-gray-200 text-gray-900 text-left h-full w-full flex opacity-0 group-hover:opacity-100 items-start flex-col">
              <h1 className="text-2xl lg:text-3xl xl:text-5xl">4 Year Experience</h1>
             <p className="mt-3 xl:mt-6 text-light text-sm md:text-lg lg:text-xl">
          On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum sur un texte              </p>
            </div>
            </div>
            <h1 className="text-2xl lg:text-5xl uppercase mt-10 tracking-wider ">
              <i>B</i>ell
            </h1>
           <p className="uppercase font-light md:text-2xl mt-4">UX specialist</p>
           </div>
            
            </SwiperSlide>
        <SwiperSlide>   <div className="w-full text-gray-400 h-full flex flex-col items-center">
            <div className="w-full group relative flex items-center justify-center">
            <img className="opacity-100 group-hover:opacity-0 " src="/images/image-11.jpg" alt="image-9"/>
            <div className="absolute p-4 xl:p-10 justify-center bg-gray-200 text-gray-900 text-left h-full w-full flex opacity-0 group-hover:opacity-100 items-start flex-col">
              <h1 className="text-2xl lg:text-3xl xl:text-5xl">4 Year Experience</h1>
             <p className="mt-3 xl:mt-6 text-light text-sm md:text-lg lg:text-xl">
          On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum sur un texte
              </p>
            </div>
            </div>
            <h1 className="text-2xl lg:text-5xl uppercase mt-10 tracking-wider ">
              <i>A</i>rine
            </h1>
           <p className="uppercase font-light md:text-2xl mt-4">Motion designer</p>
           </div>
           </SwiperSlide>
        <SwiperSlide>   <div className="w-full text-gray-400 h-full flex flex-col items-center">
            <div className="w-full group relative flex items-center justify-center">
            <img className="opacity-100 group-hover:opacity-0 " src="/images/image-12.jpg" alt="image-9"/>
            <div className="absolute p-4 xl:p-10 justify-center bg-gray-200 text-gray-900 text-left h-full w-full flex opacity-0 group-hover:opacity-100 items-start flex-col">
              <h1 className="text-2xl lg:text-3xl xl:text-5xl">2 Year Experience</h1>
             <p className="mt-3 xl:mt-6 text-light text-sm md:text-lg lg:text-xl">
          On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum sur un texte              </p>
            </div>
            </div>
            <h1 className="text-2xl lg:text-5xl uppercase mt-10 tracking-wider ">
              <i>E</i>den
            </h1>
           <p className="uppercase font-light md:text-2xl mt-4">Web Developer</p>
           </div>
           
           </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
  );
}

