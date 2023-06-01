import Image from "next/image";

export default function Home() {
  return (
    <div className="relative pt-6">
      <div className=" w-full relative z-10">
        <div className="px-4 lg:px-16 xl:container">
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
            <div className="flex">
              💬{" "}
              <a href="" className="uppercase font-medium underline">
                Let's talk
              </a>
            </div>
          </navbar>
          <div className="w-full flex items-center justify-center pt-24 ">
            <h1 className="text-center uppercase font-medium text-7xl">
              <i>W</i>e design for <i>a</i>liens
            </h1>
          </div>
          <div className="flex pt-8 space-x-16 justify-center items-center">
            <div>
              <button className="rounded-full hover:-translate-y-1 duration-150 ease-in-out text-emerald-500 text-xs bg-white text-center flex items-center justify-center space-x-2 font-medium uppercase py-3 px-6">
                <span> Our works </span>
                <Image
                  width={15}
                  height={12}
                  src="/icons/arrow.svg"
                  alt="arrow"
                />
              </button>
            </div>
            <div className="text-left text-xl leading-7 ">
              Creative Alien is a multidisciplinary <br />
              creative studio at a intersection of art, <br />
              design and technology.
            </div>
          </div>
          <div className="flex my-12 w-full items-center  justify-center flex-col">
            <span className="leading-3">explore more</span>
            <Image
              width={20}
              height={10}
              src="/icons/menu-2.svg"
              alt="menu-icon"
            />
          </div>
        </div>
        <div className="flex px-16 h-28 bg-black bg-opacity-5 backdrop-blur-sm  w-full items-center justify-center">
          <div className="w-72  items-center justify-center  h-full flex flex-col ">
            <h1 className="text-5xl font-normal">50%</h1>
            <span className="mt-2 text-xs">More cost effective</span>
          </div>
          <div className="w-72 border-r border-l border-black border-opacity-20 items-center justify-center  h-full flex flex-col ">
            <h1 className="text-5xl font-normal">12x</h1>
            <span className="mt-2 text-xs">Faster ramp up</span>
          </div>
          <div className="w-72 items-center justify-center  h-full flex flex-col ">
            <h1 className="text-5xl font-normal">3x</h1>
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
