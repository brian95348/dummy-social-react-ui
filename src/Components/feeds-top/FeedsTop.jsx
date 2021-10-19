
import React from 'react'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'
import './FeedsTop.css'

function FeedsTop() {
  return (
    <div className="first-wrapper-div">
            <div className='first-div' >
                <img src="/assets/profiles/IMG-20210101-WA0003.jpg" alt=""/>
            <input type="text" placeholder="What's on your mind Brian?"/> 
            </div>
        <div className='second-div'>
            <div className="option">
                <PermMedia htmlColor="red" className="icon" />
                <span>Photo or Video</span>
            </div>
            <div className="option">
                <Label htmlColor="blue" className="icon" />
                <span>Tag</span>
            </div>
            <div className="option">
                <Room htmlColor="green" className="icon" />
                <span>Location</span>
            </div>
            <div className="option">
                <EmojiEmotions htmlColor="goldenrod" className="icon" />
                <span>Feelings</span>
            </div>
            <button>Share</button>
        </div>
        </div>
  )
}

export default FeedsTop
