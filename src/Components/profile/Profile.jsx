import React from 'react'
import './Profile.css'
import Feeds from '../feeds/Feeds'
import {postsData} from '../../data'

function Profile() {
  return (
    <section className="profile-page-wrapper">
        <div className="profile-zone">
            <span>
                <img src="/assets/profiles/IMG_20210520_141636.jpg" alt=""/>
                <h1>Brian Zulu</h1>
                <p>formlessness</p>
            </span>
        </div>
        <div className="profile-page-info">
        <div className="feeds">
            <Feeds />
        </div>
        <div className="user">
            <div className="user-info">
                <h4>User Information</h4>
                <p>City: Amsterdam</p>
                <p>From: Madrid</p>
                <p>Relationship: Single</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Profile