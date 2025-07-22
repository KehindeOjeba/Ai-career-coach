import { PricingTable } from '@clerk/nextjs'
import React from 'react'


const Billing = () => {
  return (
    <div className=''>
        <h2 className='font-bold text-3xl text-center'>Choose Your Plan</h2>
        <p className='text-lg text-center text-gray-400'>Select a subscription bundle to get all AI Tools  </p>
       <div><PricingTable/></div>
        
    </div>
  )
}

export default Billing