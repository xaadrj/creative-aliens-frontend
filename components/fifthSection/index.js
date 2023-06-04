import FifthSlide from './fifthSlide';

export default function FifthSection() {
  return (
    <div className='bg-black relative flex flex-col gap-20 pb-20'>
      <div className="px-4 w-full flex relative flex-col justify-center items-center">
        <h1 className="text-center w-full uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-4xl lg:text-5xl  2xl:text-8xl">
          <i>E</i>xpert <br /> members
        </h1>        </div>
      <FifthSlide />
      <img
        className="absolute top-0 left-0 object-cover md:object-contain h-full"
        src="/bg/section-bg.png"
        alt="background"
      />
    </div>
  )
}