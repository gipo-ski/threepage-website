import { Link } from "react-router-dom";
import { useContext } from "react";

import DataContext from "./context/DataContext";

const Nav = () => {
	const { search, setSearch } = useContext(DataContext);

	return (
		<nav className='w-full bg-slate-400 flex flex-row justify-between items-center'>
			<form
				className='w-10/12 p-4 text-xl text-center text-red-700'
				onSubmit={(e) => e.preventDefault()}
			>
				<label
					htmlFor='search'
					className='absolute -left-[99999px]'
				>
					Search Posts
				</label>
				<input
					id='search'
					type='text'
					placeholder='Search Posts'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className='w-full text-xl p-1 px-4 mx-1 border rounded shadow-md outline-none'
				/>
			</form>
			{/* <ul className='flex justify-end text-xl text-white bg-slate-400 '> */}
			<ul className='w-10/12 p-4 text-center mx-1 flex flex-nowrap justify-end items-center list-none text-xl text-white'>
				<li className='border px-2 py-1 mx-0.5 text-white  hover:text-[#333] hover:bg-[#eee] focus:bg-[#eee] focus:text-[#333] rounded'>
					<Link
						to='/'
						className='text-white decoration-0 hover:cursor-pointer focus:cursor-pointer hover:text-[#333] hover:bg-[#eee]'
					>
						Home
					</Link>
				</li>
				<li className='border px-2 py-1 mx-0.5 text-white  hover:text-[#333] hover:bg-[#eee] focus:bg-[#eee] focus:text-[#333] rounded'>
					<Link
						to='/post'
						className='text-white decoration-0 hover:cursor-pointer focus:cursor-pointer hover:text-[#333] hover:bg-[#eee]'
					>
						Post
					</Link>
				</li>
				<li className='border px-2 py-1 mx-0.5 text-white  hover:text-[#333] hover:bg-[#eee] focus:bg-[#eee] focus:text-[#333] rounded'>
					<Link
						to='/about'
						className='text-white decoration-0 hover:cursor-pointer focus:cursor-pointer hover:text-[#333] hover:bg-[#eee]'
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
