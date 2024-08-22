import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ post }) => {
  return (
    <li>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>
        {post.body.length <= 50 ? post.body : `${post.body.slice(0, 50)}...`}
      </p>
    </li>
  );
};

export default Feed;
