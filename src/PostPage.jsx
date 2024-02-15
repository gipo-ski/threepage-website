import { useParams, Link } from "react-router-dom";
import { useContext } from "react";

import DataContext from "./context/DataContext";

const PostPage = () => {
	const { posts, handleDelete } = useContext(DataContext);
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	return (
		<main className='flex flex-col gap-4 w-8/12 mx-auto h-svh'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				PostPage
			</h1>
			<article className='flex flex-col m-4 p-4 mx-auto w-8/12 rounded bg-slate-200 '>
				{post && (
					<>
						<h2 className='text-2xl font-extrabold'>{post.title}</h2>
						<p>{post.datetime}</p>
						<p className='text-xl'>{post.body}</p>
						<Link to={`/edit/${post.id}`}>
							<button className='text-center text-white text-xl border-2 bg-red-300 px-4 mt-4 hover:bg-red-400 focus:bg-red-500 py-2 rounded'>
								Edit Post
							</button>
						</Link>
						<button
							className='text-center text-white text-xl border-2 bg-red-300 px-4 mt-4 hover:bg-red-400 focus:bg-red-500 py-2 rounded'
							onClick={() => handleDelete(post.id)}
						>
							Delete Post
						</button>
					</>
				)}
				{!post && (
					<>
						<h2>Post Not Found</h2>
						<p>Well, That's Disappointing!</p>
						<p>
							<Link to='/'>Visit Our Homepage</Link>
						</p>
					</>
				)}
			</article>
		</main>
	);
};

export default PostPage;
