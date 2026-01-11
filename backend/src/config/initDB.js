const db = require("./db");

async function initDb() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        taskName VARCHAR(255) NOT NULL,
        payload JSON NOT NULL,
        priority ENUM('Low', 'Medium', 'High') NOT NULL,
        status ENUM('pending', 'running', 'completed') DEFAULT 'pending',
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    console.log("✅ jobs table ensured");
  } catch (error) {
    console.error("❌ DB init failed:", error.message);
    process.exit(1);
  }
}

module.exports = initDb;
