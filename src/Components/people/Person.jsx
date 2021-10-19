import React from 'react'
import './Person.css'

function Person(props) {
    const {username, profilePicture} = props.person
  return (
    <div className="person">
        <img src={profilePicture} alt=""/>
        <span>{username}</span>
    </div>
  )
}

export default Person
