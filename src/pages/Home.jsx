import Hero from '../components/home/Hero'
import TrustedBy from '../components/home/TrustedBy'
import CompanyIntro from '../components/home/CompanyIntro'
import ServicesOverview from '../components/home/ServicesOverview'
import AWSArchitecture from '../components/home/AWSArchitecture'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Industries from '../components/home/Industries'
import Process from '../components/home/Process'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <CompanyIntro />
      <ServicesOverview />
      <AWSArchitecture />
      <FeaturedProjects />
      <Industries />
      <Process />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTASection />
      <Newsletter />
    </>
  )
}
