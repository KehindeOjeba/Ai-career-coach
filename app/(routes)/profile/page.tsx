import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div>
      <h2>My Personal Profile</h2>
        <UserProfile/>
    </div>
  )
}

export default Profile