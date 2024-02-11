import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="flex flex-col gap-2 m-4 p-4 mx-auto w-8/12 rounded bg-slate-200">
      <Link to={`/post/${post.id}`}>
              <h2 className="text-2xl">{post.title}</h2>
              <p className="text-sm">{ post.datetime}</p>
          </Link>
          <p className="text-xl">{(post.body).length <= 25
              ? post.body
              : `${(post.body).slice(0, 25)}...`}
          </p>
          <hr className="my-4"/>
      {/* Post */}
    </article>
  );
};

export default Post;
