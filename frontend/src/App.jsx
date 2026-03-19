import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import { useEffect, useState } from "react";
import { deleteChat, generateResponse, getHistory } from "./api";

export default function App() {
	const [history, setHistory] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeChat, setActiveChat] = useState(null);
	const [query, setQuery] = useState("");

	//loading all the history
	useEffect(() => {
		const fetchHistory = async () => {
			try {
				setLoading(true);
				const data = await getHistory();
				setHistory(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchHistory();
	}, []);

	//generating response
	async function handleGenerate(query) {
		if (!query.trim()) return;

		try {
			setLoading(true);
			const data = await generateResponse(query);
			setHistory((prev) => [data, ...prev]);
			setActiveChat(data.id);
			setQuery("");
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	//resetting the chat
	function onClickNewChat(e) {
		e.preventDefault();
		setActiveChat(null);
		setQuery("");
	}

	//deleting the chat
	async function handleDelete(id) {
		try {
			await deleteChat(id);
			setHistory((prev) => prev.filter((chat) => chat.id !== id));
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="app-container">
			<Navbar />
			<div className="content-wrapper">
				<Sidebar
					history={history}
					activeChat={activeChat}
					setActiveChat={setActiveChat}
					onClickNewChat={onClickNewChat}
					handleDelete={handleDelete}
				/>
				<Mainbar
					loading={loading}
					query={query}
					setQuery={setQuery}
					activeChat={activeChat}
					setLoading={setLoading}
					history={history}
					handleGenerate={handleGenerate}
				/>
			</div>
		</div>
	);
}
