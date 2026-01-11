import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchJobs = (params) => API.get("/jobs", { params });

export const fetchJobById = (id) => API.get(`/jobs/${id}`);

export const createJob = (data) => API.post("/jobs", data);

export const runJob = (id) => API.post(`/run-job/${id}`);
