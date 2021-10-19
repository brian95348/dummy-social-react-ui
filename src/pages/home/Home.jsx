import React from 'react'
import Header from '../../Components/Header/Header'
import SidebarLeft from '../../Components/sidebar-left/SidebarLeft'
import SidebarRight from '../../Components/sidebar-right/SidebarRight'
import Feed from '../../Components/feeds/Feeds'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <section className="body">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </section>
    </>
  )
}

export default Home
