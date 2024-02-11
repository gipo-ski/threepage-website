import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className="flex flex-1 flex-col h-svh">
      <h1 className="text-8xl font-extrabold text-center text-red-700 mt-11">
        Home
      </h1>
      {posts.length ? (
      <Feed posts={posts} />
      ) : (
          <p className="mt-8">No Posts To Display.</p>
      )}
    </main>
  );
};

export default Home;
