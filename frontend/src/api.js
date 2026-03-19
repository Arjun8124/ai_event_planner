import axios from "axios";

const api = axios.create({
	baseURL: "https://ai-event-planner-backend-wgwu.onrender.com",
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

export const getHistory = async () => {
	const res = await api.get("/history");
	return res.data;
};

export const generateResponse = async (query) => {
	const res = await api.post("/generate", { query });
	return res.data;
};

export const deleteChat = async (id) => {
	const res = await api.delete(`/history/${id}`);
	return res.data;
};
