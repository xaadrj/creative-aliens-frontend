import Image from "next/image";
import Button from '../button';

export default function FirstSection() {
  return (
    <div className='flex items-center justify-center bg-black py-6 md:py-20 xl:py-40 relative'>
      <div className='px-4 lg:px-16 xl:container flex-col flex items-center justify-center relative z-10  md:w-full'>
       <h1 className="text-center md:w-9/12 uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-4xl lg:text-5xl 2xl:leading-normal 2xl:text-6xl">
              <i>C</i>reative Aliens is design & technology firm working
            </h1>
            <Image
            className='py-6 px-5 md:px-0'
      width={500}
      height={500}
        src="/images/image-1.webp"
        alt="image-1"
      />
      <h1 className="text-center mb-10 md:w-8/12 uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-4xl lg:text-5xl 2xl:leading-normal 2xl:text-6xl">
             Globally from our offices based in russia
            </h1>
            <Button Text={'Know more'}/>
            </div>
  <Image
        className="absolute z-0 h-full w-full"
        layout="fill"
        objectFit="contain"
        src="/bg/section-bg.webp"
        alt="background"
      />
    </div>
  )
}
