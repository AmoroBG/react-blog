import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetailsPage from "./components/PostDetailsPage";
import EditPostPage from "./components/EditPostPage";
import MissingPage from "./components/MissingPage";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const Navigate = useNavigate();

  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", body: "Post 1 Content" },
    { id: 2, title: "Post 2", body: "Post Two Body" },
    { id: 3, title: "Post 3", body: "Post 3 Content" },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setPosts(searchPosts.reverse());
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const newPost = { id, title: postTitle, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    Navigate("/");
  };

  const handleDelete = (id) => {
    const allPosts = posts.filter((post) => post.id !== id);
    setPosts(allPosts);
    Navigate("/");
  };

  const handleEdit = (id) => {
    const allPosts = posts.map((post) =>
      post.id === id ? { ...post, title: editTitle, body: editBody } : post
    );
    setPosts(allPosts);
    setEditTitle("/");
    setEditBody("/");
    Navigate("/");

    console.log("edited ", id);
  };

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
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
        <Route
          exact
          path="/post/:id"
          element={
            <PostDetailsPage posts={posts} handleDelete={handleDelete} />
          }
        />
        <Route
          exact
          path="/edit/:id"
          element={
            <EditPostPage
              editTitle={editTitle}
              editBody={editBody}
              setEditTitle={setEditTitle}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
              posts={posts}
              postTitle={postTitle}
              postBody={postBody}
            />
          }
        />
        <Route exact path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
