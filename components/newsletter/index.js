
import Button from '../button';

export default function Newsletter() {
  return (
    <div className="bg-black py-32 flex w-full lg:flex-row flex-col justify-start items-end gap-12 xl:gap-32 px-4 md:px-20 xl:px-40 2xl:px-40">
      <h1 className="text-left w-full uppercase text-gray-300 2xl:tracking-wide text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl">
        <i>J</i>oin our <br /> newsletter
      </h1>
      <div className='pb-2 xl:pb-4 flex justify-start items-start gap-4 xl:gap-8 flex-col w-full '>
        <input className='border-b w-full bg-transparent focus:border-emerald-500 text-gray-300 focus:outline-0  text-xl lg:text-2xl placeholder:text-xl lg:placeholder:text-2xl h-auto placeholder:font-light pb-3 ' type='email' placeholder='YOUR EMAIL' />
        <Button Text={'submit'} />
      </div>
    </div>
  )
}
