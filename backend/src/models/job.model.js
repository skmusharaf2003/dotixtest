const db = require("../config/db");

exports.createJob = async (job) => {
  const [result] = await db.query(
    `INSERT INTO jobs (taskName, payload, priority, status)
     VALUES (?, ?, ?, 'pending')`,
    [job.taskName, JSON.stringify(job.payload), job.priority]
  );
  return result.insertId;
};

exports.getAllJobs = async (filters) => {
  let query = "SELECT * FROM jobs WHERE 1=1";
  const params = [];

  if (filters.status) {
    query += " AND status = ?";
    params.push(filters.status);
  }

  if (filters.priority) {
    query += " AND priority = ?";
    params.push(filters.priority);
  }

  const [rows] = await db.query(query, params);
  return rows;
};

exports.getJobById = async (id) => {
  const [rows] = await db.query("SELECT * FROM jobs WHERE id = ?", [id]);
  return rows[0];
};

exports.updateJobStatus = async (id, status) => {
  await db.query("UPDATE jobs SET status = ?, updatedAt = NOW() WHERE id = ?", [
    status,
    id,
  ]);
};
