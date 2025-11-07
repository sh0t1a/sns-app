import React, { useEffect, useState } from 'react';
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import {Posts} from "../../dummyData";
import axios from "axios";

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  // 1回取得
  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/6905940af9ff6816023baabb"
      );
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
        {/* {Posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))} */}
      </div>
    </div>
  )
}

