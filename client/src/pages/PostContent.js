import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

const PostContent = () => {
  const [postContent, setPostContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8001/auth/post/${id}`
        );
        setPostContent(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <br />
      <br />
      <h1 className="title">{postContent.title}</h1>
      <img className="postimg" src={postContent.cover} alt="" />
      <p className="pcon">{postContent.content}</p>
      {/* Render other post details */}
    </div>
  );
};

export default PostContent;
