import Image from "next/image";
import Button from "../button";

export default function index() {
  return (
    <div className="relative lg:h-screen pt-6">
      <div className="flex flex-col h-full items-center justify-between w-full relative z-10">
        <div className="px-4 lg:px-16 xl:container pb-10 h-full">
          <navbar className="flex  justify-between items-center">
            <h1 className="text-2xl font-bold uppercase flex">
              Creative Al{" "}
              <Image
                width={30}
                height={10}
                className="-mt-1 -rotate-12 "
                src="/icons/bulb-icon.png"
                alt="blub"
              />
              ens
            </h1>
            <div className="flex items-center">
              <Image
                width={30}
                height={20}
                src="/icons/menu.svg"
                alt="menu-icon"
              />
              <span className="uppercase font-medium ">Menu</span>
            </div>
            <div className="hidden md:flex">
              💬
              <a href="" className="uppercase font-medium underline">
                Let&apos;s talk
              </a>
            </div>
          </navbar>
          <div className="h-full justify-between flex flex-col">
          <div className="w-full flex items-center justify-center pt-24 ">
            <h1 className="text-center uppercase font-medium text-5xl lg:text-7xl 2xl:text-8xl">
              <i>W</i>e design for <i>a</i>liens
            </h1>
          </div>
          <div className="flex pt-8 2xl:pt-14 gap-10 md:gap-6 lg:gap-16 flex-col-reverse lg:flex-row justify-center items-center">
            <div>
              <Button Color={'white'} Text="Our Works"  />
            </div>
            <div className="text-center md:w-4/6 lg:text-left lg:w-80 text-xl 2xl:text-2xl leading-7 ">
              Creative Alien is a multidisciplinary 
              creative studio at a intersection of art, 
              design and technology.
            </div>
          </div>
          <div className="h-full flex my-6 w-full items-center  justify-end flex-col">
            <span className="leading-3">explore more</span>
            <Image
              width={20}
              height={10}
              src="/icons/menu-2.svg"
              alt="menu-icon"
            />
          </div>
          </div>
        </div>
        <div className="flex gap-8 md:gap-0 py-6 h-full flex-col md:flex-row px-4 md:px-16 md:h-28 bg-black bg-opacity-5 backdrop-blur-sm  w-full items-center justify-center">
          <div className="w-full md:w-72  items-center justify-center  h-full flex flex-col ">
            <h1 className="text-3xl md:text-5xl font-normal">50%</h1>
            <span className="mt-2 text-xs">More cost effective</span>
          </div>
          <div className="w-full md:w-72  md:border-r md:border-l border-black border-opacity-20 items-center justify-center  h-full flex flex-col ">
            <h1 className="text-3xl md:text-5xl font-normal">12x</h1>
            <span className="mt-2 text-xs">Faster ramp up</span>
          </div>
          <div className="w-full md:w-72 items-center justify-center  h-full flex flex-col ">
            <h1 className="text-3xl md:text-5xl font-normal">3x</h1>
            <span className="mt-2 text-xs">More output</span>
          </div>
        </div>
      </div>
      <Image
        className="absolute z-0 w-full h-full "
        layout="fill"
        objectFit="cover"
        src="/bg/hero-bg-new.jpg"
        alt="background"
      />
    </div>
  );
}
