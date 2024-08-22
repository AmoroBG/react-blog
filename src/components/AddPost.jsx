import React from "react";

const AddPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <main className="add-post">
      <h2>Add Post</h2>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <div className="post title">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="post-body">
          <label htmlFor="body">Body:</label>
          <textarea
            id=""
            cols="30"
            rows="10"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default AddPost;
