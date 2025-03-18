import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Features from '../components/FeatureCrad'

const Home = () => {
  return (
    <div className='mx-auto max-w-7xl flex flex-col gap-5'>
        <Navbar/>
        <Hero/>
        <Features/>
    </div>
  )
}

export default Home