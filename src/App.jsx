import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetailsPage from "./components/PostDetailsPage";
import EditPostPage from "./components/EditPostPage";
import MissingPage from "./components/MissingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        <Route exac path="/add-post" element={<AddPost />} />
        <Route exact path="/post/:id" element={<PostDetailsPage />} />
        <Route exact path="/edit-post" element={<EditPostPage />} />
        <Route exact path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
