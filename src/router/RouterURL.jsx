// routerURL.js
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import NewPost from "../NewPost";
import PostPage from "../PostPage";
import About from "../About";
import Missing from "../Missing";
import EditPost from "../EditPost";

export default function RouterURL({
  posts,
  postBody,
  postTitle,
  setPostBody,
  setPostTitle,
  editBody,
  editTitle,
  setEditBody,
  setEditTitle,
  searchResults,
  handleDelete,
  handleSubmit,
  handleEdit
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
        path="edit/:id"
        element={
          <EditPost
            posts={posts}
            editBody={editBody}
            editTitle={editTitle}
            setEditBody={setEditBody}
            setEditTitle={setEditTitle}
            handleEdit={handleEdit}
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
