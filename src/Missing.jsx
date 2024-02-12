import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="flex flex-col bg-slate-300">
      <h1 className="text-8xl font-extrabold text-center text-red-700">
        Missing
      </h1>
      <h2 className="text-3xl pb-4 ">Page not Found</h2>
      <p>Well, That's Disappointing.</p>
      <p>
        <Link to="/">Visit Our Homepage</Link>
      </p>
    </main>
  );
};

export default Missing;
