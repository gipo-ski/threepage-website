import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

import useAxiosFetch from "../hooks/useAxiosFetch";
import useWindowSize from "../hooks/useWindowSize";
import RouterURL from "../router/RouterURL";
import api from "../api/posts";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const [editTitle, setEditTitle] = useState("");
	const [editBody, setEditBody] = useState("");
	const { width } = useWindowSize();
	const navigate = useNavigate();

	const { data, fetchError, isLoading } = useAxiosFetch(
		"http://localhost:3500/posts"
	);

	useEffect(() => {
		const filteredResults = posts.filter(
			(post) =>
				post.body.toLowerCase().includes(search.toLowerCase()) ||
				post.title.toLowerCase().includes(search.toLowerCase())
		);
		setSearchResults(filteredResults.reverse());
	}, [posts, search]);

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

	//put, edit - CRUD:EDIT
	const handleEdit = async (id) => {
		const datetime = format(new Date(), "MMMM dd, yyyy pp");
		const updatedPost = { id, title: editTitle, datetime, body: editBody };
		try {
			const response = await api.put(`/posts/${id}`, updatedPost);
			setPosts(
				posts.map((post) => (post.id === id ? { ...response.data } : post))
			);
			setEditTitle("");
			setEditBody("");
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

	//delete - CRUD:DELETE
	const handleDelete = async (id) => {
		try {
			await api.delete(`/posts/${id}`);
			const postsList = posts.filter((post) => post.id !== id);
			setPosts(postsList);
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
		<DataContext.Provider
			value={{
				width,
				search,
				setSearch,
				posts,
				postBody,
				postTitle,
				setPostBody,
				setPostTitle,
				editBody,
				editTitle,
				setEditBody,
				setEditTitle,
				handleEdit,
				handleDelete,
				handleSubmit,
				searchResults,
				fetchError,
				isLoading,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
