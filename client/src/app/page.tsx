'use client'

import Courses from '@/pages/Courses'
import HeroSection from '@/pages/HeroSection'
import React from 'react'
import Footer from './Component/Footer'
import Gallery from './(users)/gallery/page'



function page() {
  return (
    <>
        <HeroSection/>   
         <Courses/>
         <Gallery/>
         <Footer/>
    </>
  )
}

export default page
