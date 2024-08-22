import React from "react";

const Feed = ({ post }) => {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body.length <= 100 ? post.body : post.body.slice(0, 100)}</p>
    </li>
  );
};

export default Feed;
