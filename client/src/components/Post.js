import React from "react";
// import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, content, author }) {
  return (
    <div className="postbox">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img className="post-img" src={cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          {author.username}
          {/* <time>{formatISO9075(new Date(createdAt))}</time> */}
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
