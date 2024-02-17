const Footer = () => {
  const today = new Date();

  return (
		<footer className='w-full bg-teal-600 p-4 flex justify-between items-center'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				Footer
			</h1>
			<p>Copyright &copy; {today.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
