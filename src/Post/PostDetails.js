import React from 'react'
import {Link } from 'react-router-dom'

const PostDetails = () => {
  return (
    <div className='container' style={{height: "93vh"}}>
        <h2 className='text-center mb-5 mt-4'>Post title</h2>
        <div className='center-items w-50'>
            <p className='text-left p-2 mb-4 fs-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus, impedit quidem minima iure consequuntur error.
            </p>
        </div>
        <div className='d-flex justify-content-center'>
            <Link to='/posts/edit-post/1'><button className='btn btn-light'>Edit Post</button></Link>
            <button className='btn btn-danger mx-3'>Delete Post</button>
        </div>
    </div>
  )
}

export default PostDetails