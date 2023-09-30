import React from "react";
import Navbar from "../components/navbar";
import Post from "../components/Post";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8001/auth/post");
        setPostsData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {postsData.map((post) => (
        <Post
          key={post._id}
          _id={post._id}
          title={post.title}
          summary={post.summary}
          cover={post.cover}
          content={post.content}
          author={post.author}
        />
      ))}
    </>
  );
};

export default Home;
