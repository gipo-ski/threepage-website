import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main>
      <h1 className="text-8xl font-extrabold text-center text-red-700 mt-11">
        PostPage
      </h1>
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button
              className="text-white text-xl border-2 bg-red-300 px-4 hover:bg-red-400 py-2 rounded"
              onClick={handleDelete}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, That's Disappointing!</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
