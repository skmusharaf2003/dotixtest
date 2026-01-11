import { useEffect, useState } from 'react';
import { fetchJobs, runJob } from '../api/jobsApi';
import JobTable from '../components/JobTable';
import Filters from '../components/Filters';

export default function Dashboard() {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({});
    const [loading, setLoading] = useState(false);
    const [runningJobId, setRunningJobId] = useState(null);

    const loadJobs = async () => {
        setLoading(true);
        const res = await fetchJobs(filters);
        setJobs(res.data);
        setLoading(false);
    };

    useEffect(() => {
        loadJobs();
    }, [filters]);

    // ✅ THIS IS THE RUN HANDLER
    const handleRunJob = async (jobId) => {
        try {
            setRunningJobId(jobId);          // disable button
            await runJob(jobId);             // call backend
            await loadJobs();                // refresh list
        } catch (err) {
            console.error('Failed to run job', err);
            alert('Failed to start job');
        } finally {
            setRunningJobId(null);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Job Dashboard</h1>

            <Filters setFilters={setFilters} />

            {loading && (
                <p className="text-gray-500 mt-4">Loading jobs...</p>
            )}

            {!loading && jobs.length === 0 && (
                <p className="text-gray-500 mt-4">No jobs found.</p>
            )}

            {!loading && jobs.length > 0 && (
                <JobTable
                    jobs={jobs}
                    onRun={handleRunJob}
                    runningJobId={runningJobId}
                />
            )}
        </div>
    );
}
