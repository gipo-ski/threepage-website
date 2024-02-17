import { useParams, Link } from "react-router-dom";
import { useContext } from "react";

import DataContext from "./context/DataContext";

const PostPage = () => {
	const { posts, handleDelete } = useContext(DataContext);
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	return (
		<main className='w-full flex-1 p-4 overflow-y-auto bg-white'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				PostPage
			</h1>
			<article className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'>
				{post && (
					<>
						<h2 className='text-2xl font-extrabold'>{post.title}</h2>
						<p className='text-sm mt-1'>{post.datetime}</p>
						<p className='text-xl my-4 mx-0'>{post.body}</p>
						<Link to={`/edit/${post.id}`}>
							<button className='h-12 mr-2 text-center text-white text-xl border-2 bg-teal-300 px-4 mt-4 hover:bg-teal-400 focus:bg-teal-500 py-2 rounded cursor-pointer'>
								Edit Post
							</button>
						</Link>
						<button
							className='h-12 min-w-12 mr-2 text-center text-white text-xl border-2 bg-red-300 px-4 mt-4 hover:bg-red-400 focus:bg-red-500 py-2 rounded cursor-pointer'
							onClick={() => handleDelete(post.id)}
						>
							Delete Post
						</button>
					</>
				)}
				{!post && (
					<>
						<h2 className='text-3xl mt-4 pb-4 '>Page not Found</h2>
						<p className='mt-4'>Well, That's Disappointing.</p>
						<p>
							<Link
								to='/'
								className='font-bold underline underline-offset-8 cursor-pointer'
							>
								Visit Our Homepage
							</Link>
						</p>
					</>
				)}
			</article>
		</main>
	);
};

export default PostPage;
