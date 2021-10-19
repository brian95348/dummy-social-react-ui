import React from 'react'
import Header from '../../Components/Header/Header'
import SidebarLeft from '../../Components/sidebar-left/SidebarLeft'
import Profile from '../../Components/profile/Profile'
import './Profile.css'

function ProfilePage() {
  return (
    <>
      <Header />
      <section className="profile-page-body">
        <SidebarLeft />
        <Profile />
      </section>
    </>
  )
}

export default ProfilePage
