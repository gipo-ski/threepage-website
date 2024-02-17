import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} className="mt-4 pb-4 border-b-4 border-b-[lightgray]"/>
      ))}
      {/* Feed */}
    </>
  );
};

export default Feed;
