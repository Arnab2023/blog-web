import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const author = localStorage.getItem("userID");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(authorID);
    try {
      const response = await axios.post("http://localhost:8001/auth/post", {
        title,
        summary,
        content,
        cover,
        author,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="post-body">
      <div className="post-container">
        <h1>CREATE POST</h1>
        <form className="content-form" onSubmit={onSubmit}>
          <div className="post-form-input">
            <label htmlFor="title" className="post-label">
              Title
            </label>
            <input
              className="post-inp"
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="post-form-input">
            <label htmlFor="summary" className="post-label">
              Summary
            </label>
            <textarea
              className="post-inp txarea"
              type="text"
              id="summary"
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
            />
          </div>

          <div className="post-form-input">
            <label htmlFor="img-url" className="post-label">
              Image Url
            </label>
            <input
              className="post-inp"
              type="text"
              id="img-url"
              value={cover}
              onChange={(event) => setCover(event.target.value)}
            />
          </div>

          <div className="post-form-input">
            <label htmlFor="content" className="post-label">
              Content
            </label>
            <textarea
              className="post-inp txarea"
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <button className="post-btn" type="submit">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
