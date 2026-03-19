export default function Sidebar({
	history,
	activeChat,
	setActiveChat,
	onClickNewChat,
	handleDelete,
}) {
	return (
		<aside className="sidebar">
			<button className="new-chat-btn" onClick={onClickNewChat}>
				+ New Chat
			</button>
			<div className="chat-history">
				<h4>Chat History</h4>
				{history.map((chat) => {
					return (
						<div
							className={`chat-item ${chat.id === activeChat ? "active" : ""}`}
							key={chat.id}
							onClick={() => setActiveChat(chat.id)}
						>
							<span>{chat.query}</span>
							<button
								className="delete-btn"
								onClick={() => handleDelete(chat.id)}
							>
								✕
							</button>
						</div>
					);
				})}
			</div>
		</aside>
	);
}
