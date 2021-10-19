import React from 'react'
import './Posts.css'
import {MoreVert} from '@material-ui/icons'

function Post(props) {
    console.log(props);
    const {username, profilePicture, postedAt,text, image, comments } = props.post;
  return (
            <div className="post">
                <div className="post-info">
                    <span className="wrapper">
                        <img src={profilePicture} alt=""/>
                        <span>{username}</span>
                        <span>{postedAt}</span>
                    </span>
                    <MoreVert className="icon"/>
            </div>
            <div className="post-content">
                <p className="post-message">{text}</p>
                <img src={image} alt=""/>
            <div className="post-stats">
                <span><img src="/assets/like.webp" alt=""/></span>
                <span>{comments} comments</span>
            </div>
            </div>
            </div>                 
  )
}

export default Post
