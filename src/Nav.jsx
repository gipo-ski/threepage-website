import { Link } from "react-router-dom";


const Nav = ({ search, setSearch }) => {
  return (
    <nav className="flex flex-1 justify-end ">
      <form
        className="text-xl text-center text-red-700"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search" className="hidden">
          Search Posts
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 mx-1 border rounded shadow-md"
        />
        {/* Nav */}
      </form>
      <ul className="flex justify-end text-xl text-white bg-slate-400 ">
        <li className="border px-10 py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="border px-10 py-2">
          <Link to="/post">Post</Link>
        </li>
        <li className="border px-10 py-2">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
