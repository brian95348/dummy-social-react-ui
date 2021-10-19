import React from 'react'
import './Online.css'

function Online(props) {
    const {username, profilePicture} = props.user
  return (
    <div className="person">
        <img src={profilePicture} alt=""/>
        <span>{username}</span>
        <span className="online-badge"></span>
    </div>
  )
}

export default Online
