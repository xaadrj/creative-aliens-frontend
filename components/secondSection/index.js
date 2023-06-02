import Image from "next/image";
import Button from "../button";

export default function secondSection() {
  return (
    <div className="flex justify-center w-full bg-black">
      <div className=" px-4 lg:px-16 xl:container flex justify-center items-center flex-col w-full">
        <h1 className="text-center uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-4xl lg:text-5xl  2xl:text-8xl">
          <i>R</i>ecent <br /> works
        </h1>
        <p className="text-center md:w-4/9 text-gray-300 lg:w-96 mt-8 mb-10 font-light text-xl 2xl:text-2xl leading-7 ">
          Creative Alien is a multidisciplinary creative studio at a
          intersection of art, design and technology.
        </p>
        <div className="flex justify-stretch items-center w-full gap-4 md:gap-6 lg:gap-10 flex-col">
          <div className="flex gap-4 md:gap-6 lg:gap-10 flex-col md:flex-row justify-stretch items-center w-full ">
            <div className="w-full group relative">
              <img
                className="h-96 object-cover w-full"
                src="/images/image-2.jpg"
                alt="image-2"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150  w-full h-full flex items-center justify-center top-0 ">
                <Button Color={"backdrop"} Text={"view project"} />
              </div>
              <div className="flex absolute top-5 px-6 text-gray-200 justify-between w-full items-center">
                <h6 className="uppercase"> • web design</h6>
                <h6 className="uppercase"> • 2021</h6>
              </div>
            </div>
            <div className="w-full group relative">
              <img
                className="h-96 object-cover w-full"
                src="/images/image-3.jpg"
                alt="image-3"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150  w-full h-full flex items-center justify-center top-0 ">
                <Button Color={"backdrop"} Text={"view project"} />
              </div>
              <div className="flex absolute top-5 px-6 text-gray-200 justify-between w-full items-center">
                <h6 className="uppercase"> • brainstoming</h6>
                <h6 className="uppercase"> • 2021</h6>
              </div>
            </div>
          </div>
          <div className="w-full group  relative">
            <img
              className="h-96 object-cover w-full"
              src="/images/image-4.jpg"
              alt="image-3"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150  w-full h-full flex items-center justify-center top-0 ">
              <Button Color={"backdrop"} Text={"view project"} />
            </div>
            <div className="flex absolute top-5 px-6 text-gray-200 justify-between w-full items-center">
              <h6 className="uppercase"> • web design</h6>
              <h6 className="uppercase"> • 2021</h6>
            </div>
          </div>
        </div>
        <div className="py-12">
          <Button Color={"white"} Text={"Our work"} />
        </div>
      </div>
    </div>
  );
}
