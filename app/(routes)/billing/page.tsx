
import React from 'react'
import WelcomeBanner from '../dashboard/_components/WelcomeBanner'


const Billing = () => {
  return (
    <div className=''>
      <WelcomeBanner/>
        <h2 className='font-bold text-3xl text-center'>Choose Your Plan</h2>
        <p className='text-lg text-center text-gray-400'>Select a subscription bundle to get all AI Tools  </p>
       {/* <div><PricingTable/></div> */}
        
    </div>
  )
}

export default Billing