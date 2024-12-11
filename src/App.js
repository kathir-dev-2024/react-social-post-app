import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useWindowSize from "./hooks/useWindowSize";
import Header from "./Header";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import Home from "./Home";
import Editpost from "./Editpost";

function App() {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const [posts, setposts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const [search, setsearch] = useState("");
  const [searchresults, setsearchresults] = useState([]);
  const [posttitle, setposttitle] = useState("");
  const [postbody, setpostbody] = useState("");
  const [edittitle, setedittitle] = useState("");
  const [editbody, seteditbody] = useState("");

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Filter posts based on the search query
  useEffect(() => {
    const filteredresults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setsearchresults([...filteredresults].reverse());
  }, [posts, search]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newpost = { id, title: posttitle, datetime, body: postbody };
    setposts([...posts, newpost]);
    setposttitle("");
    setpostbody("");
    navigate("/");
  };

  const handledelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setposts(updatedPosts);
    navigate("/");
  };

  const handleedit = (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedpost = { id, title: edittitle, datetime, body: editbody };
    setposts(posts.map((post) => (post.id === id ? updatedpost : post)));
    setedittitle("");
    seteditbody("");
    navigate("/");
  };

  return (
    <div className="App">
      <Header title={"KATHIR SOCIAL MEDIA"} width={width} />
      <Nav search={search} setsearch={setsearch} />

      <Routes>
        <Route path="/" element={<Home searchresults={searchresults} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                handlesubmit={handlesubmit}
                posttitle={posttitle}
                setposttitle={setposttitle}
                postbody={postbody}
                setpostbody={setpostbody}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handledelete={handledelete} />}
          />
        </Route>
        <Route
          path="/edit/:id"
          element={
            <Editpost
              posts={posts}
              handleedit={handleedit}
              editbody={editbody}
              seteditbody={seteditbody}
              edittitle={edittitle}
              setedittitle={setedittitle}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
