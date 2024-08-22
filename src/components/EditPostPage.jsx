import React from "react";
import { useParams } from "react-router-dom";

const EditPostPage = ({ posts, setEditTitle, setEditBody, handleEdit }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  return (
    <main className="edit-post">
      <h2>Edit Post</h2>
      <form className="add-post-form" onSubmit={(e) => e.preventDefault()}>
        <div className="post title">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            defaultValue={post.title}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </div>
        <div className="post-body">
          <label htmlFor="body">Body:</label>
          <textarea
            id=""
            cols="30"
            rows="10"
            defaultValue={post.body}
            onChange={(e) => setEditBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" onClick={() => handleEdit(post.id)}>
          Save
        </button>
      </form>
    </main>
  );
};

export default EditPostPage;
