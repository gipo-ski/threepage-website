import Nav from "./Nav";

const Header = ({ title, search, setSearch }) => {
  return (
    <header className="flex justify-between text-red-200 p-2 bg-teal-600">
      <h1 className="text-3xl text-start px-10">{title}</h1>
      <Nav search={search} setSearch={setSearch} />
    </header>
  );
};

export default Header;
