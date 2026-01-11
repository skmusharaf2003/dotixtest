import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';

export default function JobTable({ jobs, onRun }) {
    return (
        <div className="overflow-hidden rounded-lg border bg-white">
            <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left">
                    <tr>
                        <th className="p-3">Task</th>
                        <th className="p-3">Priority</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {jobs.map(job => (
                        <tr
                            key={job.id}
                            className="border-t hover:bg-gray-50 transition"
                        >
                            <td className="p-3 font-medium">
                                <Link className="text-blue-600 hover:underline" to={`/jobs/${job.id}`}>
                                    {job.taskName}
                                </Link>
                            </td>

                            <td className="p-3">
                                <PriorityBadge priority={job.priority} />
                            </td>

                            <td className="p-3">
                                <StatusBadge status={job.status} />
                            </td>

                            <td className="p-3 text-center">
                                <button
                                    disabled={job.status !== 'pending'}
                                    onClick={() => onRun(job.id)}
                                    className="px-3 py-1 rounded bg-black text-white text-xs
                    disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    Run Job
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
