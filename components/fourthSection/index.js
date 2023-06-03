"use client";
import React, { useRef, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper';

import './styles.css'

// install Swiper modules
SwiperCore.use([Navigation]);


export default function Index() {
    return (
        <div className=" relative bg-black">
            <div className="py-12 relative flex flex-col items-center justify-center ">
                <div className="px-4 flex relative flex-col justify-center items-center">
                    <h1 className="text-center w-full uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-4xl lg:text-5xl  2xl:text-8xl">
                        <i>c</i>ustomer <br /> reviews
                    </h1>        </div>
                <div className="mainDiv mt-6 ">
                    <Swiper
                        slidesPerView={'auto'} slidesPerGroupSkip={3} grabCursor={true} loopFillGroupWithBlank={true} loop={true}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}

                        breakpoints={{
                            // when window width is >= 320px
                            "320": {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            // when window width is >= 480px
                            "480": {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            // when window width is >= 640px
                            "640": {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            "1024": {
                                slidesPerView: 1,
                                spaceBetween: 32,
                                slidesPerGroup: 1,
                            },
                            "1336": {
                                slidesPerView: 1,
                                spaceBetween: 32
                            }
                        }}
                        className="swiper mySwiper">
                        <SwiperSlide className="swiper-slide  ">
                            <div className="flex bg-black w-full  px-5 md:px-20 xl:w-3/4 flex-col items-center">
                                <p className="text-center  lg:text-left font-light text-2xl leading-8 text-gray-300"><span className="md:text-3xl xl:text-4xl">“</span> Frustration and Love can’t exist in the same place at the same time, so get real and start doing what you would rather be doing in life. Love your life. All of it. Even the heavy shit that happened to you when you were 8. All of it was and is perfect. <span className="md:text-3xl xl:text-4xl">”</span></p>
                                <div className="mt-16 md:mt-14 xl:mt-6 flex justify-start w-full items-center space-x-4">
                                    <div className="w-12 h-12  rounded-full bg-white p-1">
                                        <img className="object-cover w-full h-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_8_avatar.png" alt="avatar" />
                                    </div>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base font-semibold leading-none text-gray-300">Rowan Aguilar</p>
                                        <p className="text-base leading-none text-gray-400">HR Manager</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="flex bg-black w-full  px-5 md:px-20 xl:w-3/4 flex-col items-center">
                                <p className="text-center  lg:text-left font-light text-2xl leading-8 text-gray-300"><span className="md:text-3xl xl:text-4xl">“</span> Frustration and Love can’t exist in the same place at the same time, so get real and start doing what you would rather be doing in life. Love your life. All of it. Even the heavy shit that happened to you when you were 8. All of it was and is perfect. <span className="md:text-3xl xl:text-4xl">”</span></p>
                                <div className="mt-16 md:mt-14 xl:mt-6 flex justify-start w-full items-center space-x-4">
                                    <div className="w-12 h-12  rounded-full bg-white p-1">
                                        <img className="object-cover w-full h-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_8_avatar.png" alt="avatar" />
                                    </div>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base font-semibold leading-none text-gray-300">Rowan Aguilar</p>
                                        <p className="text-base leading-none text-gray-600">HR Manager</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="flex bg-black w-full  px-5 md:px-20 xl:w-3/4 flex-col items-center">
                                <p className="text-center  lg:text-left font-light text-2xl leading-8 text-gray-300"><span className="md:text-3xl xl:text-4xl">“</span> Frustration and Love can’t exist in the same place at the same time, so get real and start doing what you would rather be doing in life. Love your life. All of it. Even the heavy shit that happened to you when you were 8. All of it was and is perfect. <span className="md:text-3xl xl:text-4xl">”</span></p>
                                <div className="mt-16 md:mt-14 xl:mt-6 flex justify-start w-full items-center space-x-4">
                                    <div className="w-12 h-12  rounded-full bg-white p-1">
                                        <img className="object-cover w-full h-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_8_avatar.png" alt="avatar" />
                                    </div>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base font-semibold leading-none text-gray-300">Rowan Aguilar</p>
                                        <p className="text-base leading-none text-gray-600">HR Manager</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button aria-label="back" className="swiper-button-prev  rounded-full lg:bg-gray-300">
                        <img className=" " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_svg.svg" alt="back" />
                    </button>
                    <button aria-label="next" className=" swiper-button-next rounded-full lg:bg-emerald-400">
                        <img className="  transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_svg.svg" alt="next" />
                    </button>
                </div>

            </div>
        </div>


    )
}
