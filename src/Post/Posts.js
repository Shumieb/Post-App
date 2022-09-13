import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard';
import {Link } from 'react-router-dom'

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

    const getAllPosts = () => {
        axios.get(BASE_URL)
            .then(function (response) {
                //console.log(response.data);
                setPosts(response.data);
            })
            .catch(function (err) {
                setError("Error fetching data");
            })
            .then(function () {
                setLoading(false);
            });       
    }

    useEffect(()=>{
        getAllPosts();
    }, [])


  return (
    <main className='container d-flex flex-column align-items-center justify-content-center py-4 '>
        <h2 className='text-center mb-5'>Posts App</h2>
        <Link to='/post/add-new-post'><p className='btn btn-light mb-2 btn-lg text-primary fw-bold'>Add A New Post</p></Link>
        
        { loading && !error && <p className='text-center'>Loading...</p>}

        { !loading && error && <p className='text-center'>{error}</p>}

        { !loading && !error && posts.length && 
            <ul className='py-4 d-flex flex-column align-items-center justify-content-center '>
                { posts.map(post => {
                    return <li key={post.id} className="my-2" style={{width: "100%"}}><PostCard post={post}/></li>
                })}
            </ul>        
        }

    </main>
  )
}

export default Posts