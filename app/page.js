import Hero from '../components/hero/index';
import FirstSection from '../components/firstSection/index';
import SecondSection from '@/components/secondSection';
import ThirdSection  from '@/components/thirdSection';
import FourthSection from '@/components/fourthSection';
import FifthSection from '@/components/fifthSection/index';
import Newsletter from '@/components/newsletter'; 


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Newsletter/>
    </main>
  )
}
