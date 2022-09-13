import './App.css';
import Posts from './Post/Posts';
import {
  Routes,
  Route
} from "react-router-dom";
import PostDetails from './Post/PostDetails';
import EditPost from './Post/EditPost';
import AddPost from './Post/AddPost';
import Layout from './SharedComponents/Layout';

function App() {
  return (
    <div className="p-3 mb-2 bg-primary text-white">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Posts />}/> 
          <Route path='post'>
            <Route path='add-new-post' element={<AddPost />} /> 
            <Route path="edit-post/:postId" element={<EditPost />} />
            <Route path=":postId" element={<PostDetails />} />   
          </Route> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
