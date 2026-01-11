const jobModel = require("../models/job.model");
const jobService = require("../services/job.service");

exports.createJob = async (req, res) => {
  const { taskName, payload, priority } = req.body;

  if (!taskName || !payload || !priority) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const id = await jobModel.createJob({ taskName, payload, priority });
  res.status(201).json({ id });
};

exports.getJobs = async (req, res) => {
  const jobs = await jobModel.getAllJobs(req.query);
  res.json(jobs);
};

exports.getJobById = async (req, res) => {
  const job = await jobModel.getJobById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
};

exports.runJob = async (req, res) => {
  const job = await jobModel.getJobById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });

  jobService.runJob(job);
  res.json({ message: "Job started" });
};
