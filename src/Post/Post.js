import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard';

function Post() {
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
    <main className='container'>
        <h2 className='text-center mb-4'>Posts App</h2>
        
        { loading && !error && <p className='text-center'>Loading...</p>}

        { !loading && error && <p className='text-center'>{error}</p>}

        { !loading && !error && posts.length && 
            <ul className='d-flex flex-column align-items-center justify-content-center post-container py-4'>
                { posts.map(post => {
                    return <li key={post.id} className="my-4" style={{width: "70%"}}><PostCard post={post}/></li>
                })}
            </ul>        
        }

    </main>
  )
}

export default Post