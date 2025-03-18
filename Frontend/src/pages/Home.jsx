import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Features from '../components/FeatureCrad'
import ExploreMenu from './HomePages/ExploreMenu'

const Home = () => {
  return (
    <div className='mx-auto max-w-7xl flex flex-col gap-10'>
        <Navbar/>
        <Hero/>
        <ExploreMenu/>
        <Features/>
    </div>
  )
}

export default Home