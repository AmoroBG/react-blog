import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetailsPage from "./components/PostDetailsPage";
import EditPostPage from "./components/EditPostPage";
import MissingPage from "./components/MissingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Post />
      <AddPost />
      <PostDetailsPage />
      <EditPostPage />
      <MissingPage />
      <Footer />
    </div>
  );
}

export default App;
