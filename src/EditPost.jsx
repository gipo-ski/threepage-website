import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import DataContext from "./context/DataContext";

const EditPost = () => {
	const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } =
		useContext(DataContext);

	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	useEffect(() => {
		if (post) {
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	}, [post, setEditTitle, setEditBody]);

	return (
		<main className='w-full flex-1 p-4 overflow-y-auto bg-white'>
			{editTitle && (
				<>
					<h1 className='text-8xl font-extrabold text-center text-red-700'>
						EditPost
					</h1>
					<form
						onSubmit={(e) => e.preventDefault()}
						className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'
					>
						<label
							htmlFor='postTitle'
							className=''
						>
							Title:
						</label>
						<input
							id='postTitle'
							type='text'
							required
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
							className='px-4 py-2 mb-4 border rounded shadow-md'
						/>
						<label
							htmlFor='postBody'
							className=''
						>
							Post:
						</label>
						<textarea
							id='postBody'
							cols='300'
							rows='10'
							required
							value={editBody}
							onChange={(e) => setEditBody(e.target.value)}
							className='px-4 py-2 mb-4 border rounded shadow-md'
						/>
						<button
							type='submit'
							onClick={() => handleEdit(post.id)}
							className='text-white text-xl border-2 bg-red-300 px-4 hover:bg-red-400 py-2 rounded'
						>
							Submit
						</button>
					</form>
				</>
			)}
			{!editTitle && (
				<>
					<h2>Post Not Found</h2>
					<p>Well, That's Disappointing.</p>
					<p>
						<Link to='/'>Visit Our Homepage</Link>
					</p>
				</>
			)}
		</main>
	);
};

export default EditPost;
