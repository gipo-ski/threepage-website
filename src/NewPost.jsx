import { useContext } from "react";

import DataContext from "./context/DataContext";

const NewPost = () => {
	const { postBody, postTitle, setPostBody, setPostTitle, handleSubmit } =
		useContext(DataContext);

	return (
		<main className='w-full flex-1 p-4 overflow-y-auto bg-white'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				NewPost
			</h1>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'
			>
				<label
					htmlFor='postTitle'
					className='mt-4'
				>
					Title:
				</label>
				<input
					id='postTitle'
					type='text'
					required
					value={postTitle}
					onChange={(e) => setPostTitle(e.target.value)}
					className='w-full min-h-12 font-sans text-xl px-4 py-2 mb-4 mr-1 outline-none border rounded shadow-md'
				/>
				<label
					htmlFor='postBody'
					className='mt-4'
				>
					Post:
				</label>
				<textarea
					id='postBody'
					cols='300'
					rows='10'
					required
					value={postBody}
					onChange={(e) => setPostBody(e.target.value)}
					className='w-full min-h-12 font-sans text-xl px-4 py-2 mb-4 mr-1 outline-none border rounded shadow-md'
				/>
				<button
					type='submit'
					className='mt-4 h-12 min-w-12 text-white text-xl cursor-pointer bg-red-300 px-4 hover:bg-red-400 py-2 rounded'
				>
					Submit
				</button>
			</form>
		</main>
	);
};

export default NewPost;
