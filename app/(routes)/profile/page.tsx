import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div>
      <h2>My Profile</h2>
        <UserProfile/>
    </div>
  )
}

export default Profile