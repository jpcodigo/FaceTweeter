import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Post from './pages/Post';

function App() {
  
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/newpost'>New Post</Link>
        </div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/newpost' exact element={<NewPost />} />
          <Route path='/post/:id' exact element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
