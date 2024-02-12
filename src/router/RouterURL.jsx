// routerURL.js
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import NewPost from "../NewPost";
import PostPage from "../PostPage";
import About from "../About";
import Missing from "../Missing";

export default function RouterURL({
  posts,
  postBody,
  postTitle,
  setPostBody,
  setPostTitle,
  searchResults,
  handleDelete,
  handleSubmit
}) {
  return (
    <Routes>
      <Route path="/" element={<Home posts={searchResults} />} />
      <Route path="home" element={<Home posts={searchResults} />} />
      <Route
        path="post"
        element={
          <NewPost
            postBody={postBody}
            postTitle={postTitle}
            setPostBody={setPostBody}
            setPostTitle={setPostTitle}
            handleSubmit={handleSubmit}
          />
        }
      />
      <Route
        path="post/:id"
        element={<PostPage posts={posts} handleDelete={handleDelete} />}
      />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}
