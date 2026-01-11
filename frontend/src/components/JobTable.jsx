import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';

export default function JobTable({ jobs, onRun, runningJobId }) {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Task Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Priority
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {jobs.map(job => {
                        const isRunning = runningJobId === job.id;
                        const isDisabled = job.status !== 'pending' || isRunning;

                        return (
                            <tr
                                key={job.id}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4">
                                    <Link
                                        className="text-sm font-medium text-gray-900 hover:text-gray-700 hover:underline transition-colors"
                                        to={`/jobs/${job.id}`}
                                    >
                                        {job.taskName}
                                    </Link>
                                </td>

                                <td className="px-6 py-4">
                                    <PriorityBadge priority={job.priority} />
                                </td>

                                <td className="px-6 py-4">
                                    <StatusBadge status={job.status} />
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(job.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </td>

                                <td className="px-6 py-4 text-right">
                                    <button
                                        disabled={isDisabled}
                                        onClick={() => onRun(job.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                            isDisabled
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-md active:scale-95'
                                        }`}
                                    >
                                        {isRunning ? 'Starting...' : 'Run Job'}
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
