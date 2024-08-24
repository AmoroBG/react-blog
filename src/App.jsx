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
import apiRequest from "./apiRequest";
import api from "./api/posts";

function App() {
  const Navigate = useNavigate();
  const API_URL = "http://localhost:3500/posts";

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setPosts(searchPosts.reverse());
  }, [search]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const newPost = { id, title: postTitle, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      Navigate("/");
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const allPosts = posts.filter((post) => post.id !== id);
      setPosts(allPosts);
      Navigate("/");
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const handleEdit = async (id) => {
    const updatedPost = { id: id, title: editTitle, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const allPosts = posts.map((post) =>
        post.id === id ? response.data : post
      );
      setPosts(allPosts);
      setEditTitle("");
      setEditBody("");
      Navigate("/");
    } catch (err) {
      setFetchError(err.message);
    }
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
