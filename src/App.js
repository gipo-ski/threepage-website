import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import RouterURL from "./router/RouterURL";
import Header from "./Header";
// import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "January 1, 2024",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam obcaecati!",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "February 1, 2024",
      body: "Lorem, aspernatur ipsa eligendi ratione ex ea quia magnam doloribus est provident voluptatum ",
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "March 1, 2024",
      body: "Lorem, ipsum dolor sit amet",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "April 1, 2024",
      body: "Lorem, consectetur adipisicing elit.Maiores doloribus est provident voluptatum exercitationem consequuntur dolore labore eveniet ullam obcaecati!",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setpostTitle] = useState("");
  const [postBody, setpostBody] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  const handleSubmit = () => {
    
  }

  return (
    <>
      <Header title={"My Header"} search={search} setSearch={setSearch} />
      {/* <Nav search={search} setSearch={setSearch} /> */}
      <RouterURL
        posts={posts}
        postBody={postBody}
        postTitle={postTitle}
        setPostBody={postBody}
        setPostTitle={postTitle}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
}

export default App;
