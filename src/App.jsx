import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetailsPage from "./components/PostDetailsPage";
import EditPostPage from "./components/EditPostPage";
import MissingPage from "./components/MissingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", body: "Post 1 Content" },
    { id: 2, title: "Post 2", body: "Post Two Body" },
    { id: 3, title: "Post 3", body: "Post 3 Content" },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const newPost={id, title:postTitle, body:postBody}
    const allPosts=[...posts, newPost]
    setPosts(allPosts)
    setPostTitle("")
    setPostBody("")
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home posts={posts} setPosts={setPosts} />}
        />
        <Route exact path="/post" element={<Post />} />
        <Route
          exac
          path="/add-post"
          element={
            <AddPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route exact path="/post/:id" element={<PostDetailsPage />} />
        <Route exact path="/edit-post" element={<EditPostPage />} />
        <Route exact path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
