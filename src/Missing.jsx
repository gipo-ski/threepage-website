import { Link } from "react-router-dom";

const Missing = () => {
  return (
		<main className='w-full flex-1 p-4 overflow-y-auto bg-white'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				Missing
			</h1>
			<h2 className='text-3xl mt-4 pb-4 '>Page not Found</h2>
			<p className='mt-4'>Well, That's Disappointing.</p>
			<p>
				<Link to='/' className="font-bold underline underline-offset-8 cursor-pointer">Visit Our Homepage</Link>
			</p>
		</main>
	);
};

export default Missing;
