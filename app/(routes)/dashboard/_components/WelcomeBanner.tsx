import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='p-5 bg-gradient-to-r from-[#f4b217] via-[#1dbfec] to-[#11221b] rounded-xl'>
       <h2 className='font-bold text-2xl text-white'>AI Career Coach Agent</h2> 
       <h5 className='text-white'>Smarter Career decisions starts here - get tailored advice, real-time market insights and a roadmap built just for you with the power of AI - Artificial Inteligence</h5>
       <Button variant={'outline'} className='mt-3 p-1'>Let's get started.</Button>
    </div>
  )
}

export default WelcomeBanner