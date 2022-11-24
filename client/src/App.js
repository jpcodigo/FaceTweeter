import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Link to='/newpost'>New post</Link>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/newpost' exact component={NewPost} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
