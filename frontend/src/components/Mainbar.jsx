export default function Mainbar({
	loading,
	query,
	setQuery,
	activeChat,
	handleGenerate,
	history,
}) {
	const selectedChat = history.find((chat) => chat.id === activeChat);
	const response = selectedChat?.response;

	async function handleClick(e) {
		e.preventDefault();
		if (!query.trim()) return;
		await handleGenerate(query);
	}

	return (
		<main className="mainbar">
			<div className="chat-container">
				<div className="messages">
					{!response && (
						<div className="message welcome">
							<p>
								👋 Welcome to AI Event Concierge! How can I assist you today?
							</p>
						</div>
					)}
					{selectedChat && (
						<div className="message user">
							<p>{selectedChat.query}</p>
						</div>
					)}
					{response && (
						<div className="message assistant">
							<div>
								<strong>🏨 {response.venue_name}</strong>
								<p>
									<strong>Location:</strong> {response.location}
								</p>
								<p>
									<strong>Estimated Cost:</strong> {response.estimated_cost}
								</p>
								<p>
									<strong>Reason:</strong> {response.justification}
								</p>
							</div>
						</div>
					)}
				</div>
				<div className="input-area">
					<input
						type="text"
						placeholder="Type your message here..."
						className="chat-input"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
					/>
					<button
						className="send-btn"
						onClick={handleClick}
						disabled={loading || !query.trim()}
					>
						{loading ? "Loading..." : "Send"}
					</button>
				</div>
			</div>
		</main>
	);
}
