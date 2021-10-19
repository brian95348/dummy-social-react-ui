import React from 'react'
import './SidebarRight.css'
import {onlinePeople} from '../../data'
import Online from '../online/Online'

function SidebarRight() {
  return (
    <section className="sidebar-right-wrapper">
        <div className="reminder">
            <div className="birthday">
                <img src="/assets/present.jpeg" alt=""/>
                <p> <strong>3stina</strong>  and 3 <strong>other friends</strong> have a birthday today</p>
            </div>
            <img src="" alt=""/>
        </div>
        <div className="ad">
             <p className="p1">Made to Perfection</p>
            <p className="p2">Explore 4K now!</p> 
        </div>
        <div className="online-people">
            <h3>Online friends</h3>
             {onlinePeople.map(user=>{
                 return <Online key={user.id} user={user} />
             })}    
        </div>
    </section>
  )
}

export default SidebarRight
