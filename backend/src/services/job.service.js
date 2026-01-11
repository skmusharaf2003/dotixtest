const jobModel = require("../models/job.model");
const webhookService = require("./webhook.service");

exports.runJob = async (job) => {
  await jobModel.updateJobStatus(job.id, "running");

  setTimeout(async () => {
    await jobModel.updateJobStatus(job.id, "completed");
    await webhookService.triggerWebhook(job);
  }, 3000);
};
