import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import RouterURL from "./router/RouterURL";
import Header from "./Header";
// import Nav from "./Nav";
import Footer from "./Footer";
import api from "./api/posts";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const navigate = useNavigate();

	//get - CRUD:READ
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await api.get("/posts");
				setPosts(response.data);
			} catch (error) {
				if (error.response) {
					// error logs from axios: The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log(`Error: ${error.message}`);
				}
				console.log(error.config);
			}
		};

		fetchPosts();
	}, []);

	useEffect(() => {
		const filteredResults = posts.filter(
			(post) =>
				post.body.toLowerCase().includes(search.toLowerCase()) ||
				post.title.toLowerCase().includes(search.toLowerCase())
		);
		setSearchResults(filteredResults.reverse());
	}, [posts, search]);

	//delete - CRUD:DELETE
	const handleDelete = async (id) => {
		try {
			await api.delete(`/posts/${id}`);
			const postsList = posts.filter((post) => post.id !== id);
			setPosts(postsList);
			navigate("/");
		} catch (error) {
			if (error.response) {
				// error logs from axios: The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log(`Error: ${error.message}`);
			}
			console.log(error.config);
		}
	};

	//post -  CRUD:CREATE
	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
		const datetime = format(new Date(), "MMMM dd, yyyy pp");
		const newPost = { id, title: postTitle, datetime, body: postBody };
		try {
			const response = await api.post("/posts", newPost);
			const allPosts = [...posts, response.data];
			setPosts(allPosts);
			setPostTitle("");
			setPostBody("");
			navigate("/");
		} catch (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log(`Error: ${error.message}`);
			}
			console.log(error.config);
		}
	};

	return (
		<main className='App'>
			<Header
				title={"My Header"}
				search={search}
				setSearch={setSearch}
			/>
			{/* <Nav search={search} setSearch={setSearch} /> */}
			<RouterURL
				posts={posts}
				postBody={postBody}
				postTitle={postTitle}
				setPostBody={setPostBody}
				setPostTitle={setPostTitle}
				handleDelete={handleDelete}
				handleSubmit={handleSubmit}
				searchResults={searchResults}
			/>
			<Footer />
		</main>
	);
}

export default App;
