import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useContext } from "react";

import DataContext from "./context/DataContext";
import Nav from "./Nav";

const Header = ({ title}) => {
	const { width } = useContext(DataContext)
	
	return (
		<header className='flex justify-between text-red-200 p-2 bg-teal-600 mb-10'>
			<h1 className='text-3xl text-start ml-10'>{title}</h1>
			<Nav />
			{width < 768 ? (
				<FaMobileAlt className='text-4xl' />
			) : width < 922 ? (
				<FaTabletAlt className='text-4xl' />
			) : (
				<FaLaptop className='text-4xl' />
			)}
		</header>
	);
};

export default Header;
