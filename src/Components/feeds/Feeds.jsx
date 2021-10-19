import React from 'react'
import './Feeds.css'
import FeedsTop from '../feeds-top/FeedsTop'
import Post from '../Posts/Posts'
import {postsData} from '../../data'

function Feeds() {
  return (
    <section className="feeds">
        <FeedsTop />
        <div className="posts">
            {postsData.map(post => {
            return <Post key={post.id} post={post}  />
        })} 
        </div>        
    </section>
  )
}

export default Feeds
