import React from 'react'
import {Link } from 'react-router-dom'

const PostCard = ({post}) => {
  return (
    <div className="card pt-4" style={{width: "100%"}}>
        <div className="card-body py-2">
            <h5 className="card-title text-primary pb-1">{post.title}</h5>
            <p className="card-text text-primary fs-5 border-start border-primary border-3 ps-2">
                { `${post.body.substring(0, 1).toUpperCase()}${post.body.substring(1, 30)}...`}
            </p>
            <p className='btn btn-primary pb-2 mt-2'><Link to={`${post.id}`} className="text-white fs-6">View Post</Link></p>
        </div>
    </div>
  )
}

export default PostCard