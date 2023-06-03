import Hero from '../components/hero/index';
import FirstSection from '../components/firstSection/index';
import SecondSection from '@/components/secondSection';
import ThirdSection  from '@/components/thirdSection';
import FourthSection from '@/components/fourthSection';


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    </main>
  )
}
