import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='p-5 bg-gradient-to-r from-[#199bf8] via-[#b8edfc] to-[#2130fd] rounded-xl'>
       <h2 className='font-bold text-2xl text-white'>AI Career Coach</h2> 
       <h5 className='text-white'>Smarter Career decisions starts here - get tailored advice, real-time market insights and a roadmap built just for you with the power of AI</h5>
       <Button variant={'outline'} className='mt-3 border'>Let's get started.</Button>
    </div>
  )
}

export default WelcomeBanner