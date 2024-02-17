import { useContext } from "react";

import DataContext from "./context/DataContext";
import Feed from "./Feed";

const Home = () => {
	const { searchResults, fetchError, isLoading } = useContext(DataContext);

	return (
		<main className='w-full flex-1 p-4 overflow-y-auto bg-white'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>Home</h1>
			{isLoading && (
				<p className='text-4xl text-center mt-11'>Loading Post...</p>
			)}
			{!isLoading && fetchError && (
				<p className='text-red-600 mt-4'>{fetchError}</p>
			)}
			{!isLoading &&
				!fetchError &&
				(searchResults.length ? (
					<Feed posts={searchResults} />
				) : (
					<p className='statusMsg'>No posts to display.</p>
				))}
		</main>
	);
};

export default Home;
