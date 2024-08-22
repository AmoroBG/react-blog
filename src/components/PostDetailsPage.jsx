import React from "react";
import { useParams } from "react-router-dom";

const PostDetailsPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="buttons">
        <button type="submit" className="edit">
          Edite
        </button>
        <button
          type="button"
          className="delete"
          onClick={() => handleDelete(post.id)}
        >
          Delet
        </button>
      </div>
    </main>
  );
};

export default PostDetailsPage;
