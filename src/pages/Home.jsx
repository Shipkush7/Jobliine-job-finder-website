/* eslint-disable no-unused-vars */

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Recommended_Jobs from '../components/Recommended_Jobs'
import Top_company from '../components/Top_company'
import Featured_job from '../components/Featured_job'
import Why_customer from '../components/Why_customer'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
         <Navbar />
         <Hero />
         <Recommended_Jobs />
         <Top_company />
         <Featured_job />
         <Why_customer />
          <Footer /> 
    </div>
  )
} 
