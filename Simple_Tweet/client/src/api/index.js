import { axios } from "./axios";

const api = {
  auth: {
    signup: (payload) => axios.post("/api/signup", payload),
    login: (payload) => axios.post("/api/login", payload),
  },
  user: {
    me: (token) =>
      axios.get("/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    all: (token) =>
      axios.get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    following: (token) =>
      axios.get("/api/following", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    followers: (token) =>
      axios.get("/api/followers", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    follow: (payload, token) =>
      axios.post("/api/follow", payload, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  },
  tweet: {
    post: (payload, token) =>
      axios.post("/api/tweets", payload, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    all: (token) =>
      axios.get("/api/tweets", {
        headers: { Authorization: `Bearer ${token}` },
      }),
  },
};
export default api;
