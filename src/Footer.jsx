const Footer = () => {
  const today = new Date();

  return (
    <footer className="flex flex-col text-center bg-teal-600 mt-10">
      <h1 className="text-8xl font-extrabold text-center text-red-700">
        Footer
      </h1>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
