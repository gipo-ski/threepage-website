import { useContext } from "react";

import DataContext from "./context/DataContext";
import Feed from "./Feed";

const Home = () => {
	const { searchResults, fetchError, isLoading } = useContext(DataContext);

	return (
		<main className='flex flex-col h-100vh'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>Home</h1>
			{isLoading && (
				<p className='statusMsg text-4xl text-center mt-11'>Loading Post...</p>
			)}
			{!isLoading && fetchError && (
				<p className='statusMsg text-red-600'>{fetchError}</p>
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
