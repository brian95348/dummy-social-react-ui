import React from 'react'
import {RssFeed,WorkOutline,School,
        Event,HelpOutline, Group, Bookmark,
        PlayCircleFilledOutlined, Chat} from '@material-ui/icons'
import './SidebarLeft.css'
import Person from '../people/Person'
import {onlinePeople} from '../../data'


function SidebarLeft() {
  return (
    <section className="sidebar-left-wrapper">
        <div className="options">
            <div className="option">
                <RssFeed className="icon" />
                <span> Feed</span>
            </div>
            <div className="option">
                <HelpOutline className="icon" />
                <span>Questions</span>
            </div>
            <div className="option">
                <Chat className="icon" />
                <span>Chats</span>
            </div>
            <div className="option">
                <PlayCircleFilledOutlined className="icon" />
                <span>Videos</span>
            </div> 
            <div className="option">
                <Group className="icon" />
                <span>Groups</span>
            </div>
            <div className="option">
                <Bookmark className="icon" />
                <span>Bookmarks</span>
            </div>  
            <div className="option">
                <WorkOutline className="icon" />
                <span>Jobs</span>
            </div>
            <div className="option">
                <Event className="icon" />
                <span>Events</span>
            </div>
            <div className="option">
                <School className="icon" />
                <span>Courses</span>
            </div>
            <button>Show More</button>
        </div>
        <div className="contacts">
            {onlinePeople.map(person => {
                return <Person key={person.id} person={person} />
            })}           
        </div>
    </section>
  )
}

export default SidebarLeft
