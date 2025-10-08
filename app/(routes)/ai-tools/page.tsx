import React from 'react'
import AiToolsList from '../dashboard/_components/AiToolsList'
import WelcomeBanner from '../dashboard/_components/WelcomeBanner'

const AiTools = () => {
  return (
    <div>
      <WelcomeBanner/>
        <h2 className='font-bold  text-2xl '></h2>
        <AiToolsList/>
    </div>
  )
}

export default AiTools