import React from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="home">
      <h1>All Posts</h1>
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <Feed key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p>
          No posts to display... <Link to="/add-post">Create Post</Link>
        </p>
      )}
    </main>
  );
};

export default Home;
