import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:8080/posts').then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div>
      {postList.map((post) => {
        return (
          <div className="post" key={post.id} onClick={() => navigate('/')}>
            <div className="title">{ post.title }</div>
            <div className="body">{ post.postText }</div>
            <div className="footer">{ post.username }</div>
          </div>
        )
      })}
    </div>
  )
}

export default Home