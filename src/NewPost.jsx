const NewPost = ({
  postBody,
  postTitle,
  setPostBody,
  setPostTitle,
  handleSubmit,
}) => {
  return (
    <main className="flex flex-col">
      <h1 className="text-8xl font-extrabold text-center text-red-700 mt-11">
        NewPost
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/2 mx-auto"
      >
        <label htmlFor="postTitle" className="">
          Title:
        </label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="px-4 py-2 mb-4 border rounded shadow-md"
        />
        <label htmlFor="postBody" className="">
          Post:
        </label>
        <textarea
          id="postBody"
          cols="300"
          rows="10"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="px-4 py-2 mb-4  border rounded shadow-md"
        />
        <button
          type="submit"
          className="text-white text-xl border-2 bg-red-300 px-4 hover:bg-red-400 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
