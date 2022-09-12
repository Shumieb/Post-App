import './App.css';
import Post from './Post/Post';
import {
  Routes,
  Route
} from "react-router-dom";
import PostDetails from './Post/PostDetails';
import EditPost from './Post/EditPost';

function App() {
  return (
    <div className="p-3 mb-2 bg-primary text-white">
      <Routes>
        <Route path="posts" element={<Post />}/>
        <Route path="posts/:postId" element={<PostDetails />} />   
        <Route path="posts/edit-post/:postId" element={<EditPost />} />     
      </Routes>
    </div>
  );
}

export default App;
