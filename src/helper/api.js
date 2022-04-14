import { create } from "apisauce";

const api = create({
  baseURL: "https://jobs-api.return0.codes",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;