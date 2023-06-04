
import Slider from '../sliderOne';
import Image from "next/image";

export default function secondSection() {
  return (
    <div className="flex justify-center flex-col py-20  w-full bg-black">
      <div className=" px-4 lg:px-16 xl:container  flex justify-center items-center flex-col w-full">
        <h1 className="text-center w-full uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-4xl lg:text-5xl  2xl:text-8xl">
          <i>W</i>orkng <br /> progress
        </h1>

      </div>
      <div className='flex mt-28 w-full lg:flex-row flex-col justify-between items-center gap-40 lg:gap-10'>
        <div className='relative w-full flex items-start justify-end h-full pt-10 pb-24 pl-16 pr-12 '>
          <div className='relative z-10'
          >
            <p className='py-6 text-xl '>
              01
            </p>
            <h1 className='text-4xl'>User Research</h1>
            <p className='py-6 text-xl lg:w-72 xl:w-80  '>
              On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum sur un texte générique comme Du texte. Du texte. Du texte. est quil possède une distributio
            </p>
          </div>
          <Image
            className="absolute z-0 h-full w-full"
            layout="fill"
            objectFit="cover"
            src="/bg/hero-bg-new.webp"
            alt="background"
          />
        </div>
        <div className='w-full px-4 md:px-0 md:pl-20 lg:pl-0'>
          <Slider />
        </div>
      </div>

    </div>
  )
}
