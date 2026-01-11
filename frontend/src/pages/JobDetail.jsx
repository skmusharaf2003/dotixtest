import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobById } from '../api/jobsApi';
import StatusBadge from '../components/StatusBadge';

export default function JobDetail() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetchJobById(id).then(res => setJob(res.data));
    }, [id]);

    if (!job) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
                <h1 className="text-xl font-bold mb-2">{job.taskName}</h1>

                <div className="mb-4">
                    <StatusBadge status={job.status} />
                </div>

                <h2 className="font-semibold mb-2">Payload</h2>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                    {JSON.stringify(JSON.parse(job.payload), null, 2)}
                </pre>
            </div>
        </div>

    );
}
