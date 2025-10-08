import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import WelcomeBanner from '../dashboard/_components/WelcomeBanner'

const Profile = () => {
  return (
    <div>
      <WelcomeBanner/>
      <div className='flex justify-center items-center'>
        <UserProfile/>
        </div>
    </div>
  )
}

export default Profile